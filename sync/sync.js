#!/usr/bin/env node
// Builds characters.js from the TTRPG Wiki Obsidian vault.
//
//   node sync/sync.js [path-to-vault]
//
// Sources:
//   <vault>/Characters/*.md  - frontmatter "Campaign" list gives each character's campaigns
//   <vault>/Campaigns/*.md   - "## Cast" / "## Secondary Cast" bullets give the player characters
//                              per campaign (with who played them and their class); "Start Date"
//                              orders the campaigns; "Cover" names the campaign's cover image
//   <vault>/Images/          - cover images, copied into covers/
//   sync/overrides.json      - display names, characters with no vault note, extra memberships
//
// Output: characters.js, which defines `campaigns` and `characters` for script.js, and covers/*.

const fs = require("fs");
const path = require("path");

const VAULT = process.argv[2] || "C:\\Users\\roryk\\OneDrive\\Documents\\Vaults\\TTRPG Wiki";
const ROOT = path.join(__dirname, "..");
const OVERRIDES = JSON.parse(fs.readFileSync(path.join(__dirname, "overrides.json"), "utf8"));

// ---- helpers ---------------------------------------------------------------

// Minimal YAML frontmatter reader: scalar keys and "- item" lists are all the vault uses.
function readFrontmatter(text) {
    if (!text.startsWith("---")) return {};
    const end = text.indexOf("\n---", 3);
    const data = {};
    let key = null;
    for (const line of text.slice(3, end).split(/\r?\n/)) {
        const scalar = line.match(/^([A-Za-z][^:]*):\s*(.*)$/);
        if (scalar && !line.startsWith(" ")) {
            key = scalar[1].trim();
            const value = scalar[2].trim();
            data[key] = value === "" || value === "[]" ? [] : value;
        } else if (key && /^\s+- /.test(line) && Array.isArray(data[key])) {
            data[key].push(line.replace(/^\s+- /, "").trim().replace(/^"|"$/g, ""));
        }
    }
    return data;
}

function body(text) {
    if (!text.startsWith("---")) return text;
    return text.slice(text.indexOf("\n---", 3) + 4);
}

// "[[Target|Label]]" -> "Target"
function linkTarget(link) {
    const m = link.match(/\[\[([^\]|]+)/);
    return m ? m[1].trim() : link;
}

function markdownFiles(dir) {
    return fs.readdirSync(dir).filter(f => f.endsWith(".md")).map(f => ({
        name: f.slice(0, -3),
        text: fs.readFileSync(path.join(dir, f), "utf8"),
    }));
}

// ---- campaigns -------------------------------------------------------------

const campaignsByFile = {};
for (const file of markdownFiles(path.join(VAULT, "Campaigns"))) {
    const fm = readFrontmatter(file.text);
    const aliases = Array.isArray(fm.aliases) ? fm.aliases : [];
    // cast: character file name -> { player, description }
    const cast = new Map();
    let inCast = false;
    for (const line of body(file.text).split(/\r?\n/)) {
        if (/^## /.test(line)) inCast = /^## (Cast|Secondary Cast)\s*$/.test(line);
        if (!inCast) continue;
        // "* [[Callista]] as [[Nia Skultrac|Nia]], a dhampir rogue (soulknife)"
        const m = line.match(/^\s*[-*]\s*\[\[([^\]|]+)[^\]]*\]\]\s+as\s+\[\[([^\]|]+)[^\]]*\]\]\s*,?\s*(.*)$/);
        if (m && !cast.has(m[2].trim())) {
            cast.set(m[2].trim(), { player: m[1].trim(), description: m[3].trim() });
        }
    }
    campaignsByFile[file.name] = {
        file: file.name,
        name: aliases[0] || file.name,
        startDate: typeof fm["Start Date"] === "string" ? fm["Start Date"] : "9999",
        cover: typeof fm.Cover === "string" ? linkTarget(fm.Cover) : null,
        cast,
    };
}

// ---- covers ----------------------------------------------------------------

const COVERS_DIR = path.join(ROOT, "covers");
fs.mkdirSync(COVERS_DIR, { recursive: true });
const imageFiles = fs.readdirSync(path.join(VAULT, "Images"));
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
for (const campaign of Object.values(campaignsByFile)) {
    if (!campaign.cover) continue;
    const source = imageFiles.find(f => f.toLowerCase() === campaign.cover.toLowerCase());
    if (!source) { campaign.cover = null; continue; }
    const target = slug(campaign.name) + path.extname(source).toLowerCase();
    const from = path.join(VAULT, "Images", source);
    const to = path.join(COVERS_DIR, target);
    // Copy only when missing or the vault copy is newer, so a hand-optimised copy survives.
    if (!fs.existsSync(to) || fs.statSync(from).mtimeMs > fs.statSync(to).mtimeMs) {
        fs.copyFileSync(from, to);
    }
    campaign.cover = "covers/" + target;
}
const campaignDisplayName = file => (campaignsByFile[file] ? campaignsByFile[file].name : file);
const campaignFileByName = name => Object.keys(campaignsByFile).find(f => campaignsByFile[f].name === name);
const campaigns = Object.values(campaignsByFile)
    .sort((a, b) => a.startDate.localeCompare(b.startDate) || a.name.localeCompare(b.name))
    .map(c => ({ Name: c.name, Cover: c.cover }));
const campaignNames = campaigns.map(c => c.Name);

// ---- characters ------------------------------------------------------------

const characters = [];
const warnings = [];
let skipped = 0;
for (const file of markdownFiles(path.join(VAULT, "Characters"))) {
    const fm = readFrontmatter(file.text);
    const campaignLinks = Array.isArray(fm.Campaign) ? fm.Campaign : [];
    if (campaignLinks.length === 0) { skipped++; continue; }

    const types = Array.isArray(fm["Character Type"]) ? fm["Character Type"] : [];
    const memberships = [];
    const add = (campaignFile, displayName) => {
        if (memberships.some(m => m.Name === displayName)) return;
        const campaign = campaignsByFile[campaignFile];
        let role;
        const castEntry = campaign && campaign.cast.get(file.name);
        if (campaign) {
            role = castEntry ? "Player" : "NPC";
        } else {
            // No campaign note to read a cast from: fall back to the character's own type.
            warnings.push(`${file.name}: campaign "${campaignFile}" has no note in Campaigns/, so it gets no button`);
            role = types.includes("Player Character") ? "Player" : "NPC";
        }
        const membership = { Name: displayName, Role: role };
        if (castEntry) {
            membership.Player = castEntry.player;
            if (castEntry.description) membership.Description = castEntry.description;
        }
        memberships.push(membership);
    };
    for (const link of campaignLinks) {
        const target = linkTarget(link);
        add(target, campaignDisplayName(target));
    }
    for (const displayName of OVERRIDES.extraCampaigns[file.name] || []) {
        add(campaignFileByName(displayName) || displayName, displayName);
    }

    characters.push({
        Name: OVERRIDES.names[file.name] || file.name,
        Status: typeof fm.Status === "string" ? fm.Status : "Alive",
        Campaigns: memberships,
    });
}

for (const extra of OVERRIDES.extras) {
    characters.push({
        Name: extra.Name,
        Status: extra.Status || "Alive",
        Campaigns: extra.Campaigns.map(c => ({ Name: c, Role: extra.Role || "NPC" })),
    });
}

characters.sort((a, b) => a.Name.localeCompare(b.Name, "en", { sensitivity: "base" }));

// ---- checks ----------------------------------------------------------------

const seen = new Set();
for (const c of characters) {
    const key = c.Name.toLowerCase();
    if (seen.has(key)) warnings.push(`duplicate display name "${c.Name}"`);
    seen.add(key);
    for (const m of c.Campaigns) {
        if (!campaignNames.includes(m.Name) && !warnings.some(w => w.includes(`"${m.Name}"`)))
            warnings.push(`campaign "${m.Name}" (on ${c.Name}) has no note in Campaigns/, so it gets no button`);
    }
}
for (const campaign of Object.values(campaignsByFile)) {
    for (const member of campaign.cast.keys()) {
        const c = characters.find(x => x.Name === (OVERRIDES.names[member] || member));
        if (!c) warnings.push(`${campaign.name} cast lists "${member}" but no character note has a campaign`);
        else if (!c.Campaigns.some(m => m.Name === campaign.name))
            warnings.push(`${campaign.name} cast lists "${member}" but that character's note does not list the campaign`);
    }
}

// ---- write -----------------------------------------------------------------

const stamp = new Date().toISOString().slice(0, 10);
const out = [
    `// Generated by sync/sync.js from the TTRPG Wiki vault on ${stamp}.`,
    "// Do not edit by hand: change the vault or sync/overrides.json and run `node sync/sync.js`.",
    "",
    "const campaigns = [",
    campaigns.map(c => `    { "Name": ${JSON.stringify(c.Name)}, "Cover": ${JSON.stringify(c.Cover)} }`).join(",\n"),
    "];",
    "",
    "const characters = [",
    characters.map(c => {
        const memberships = c.Campaigns
            .map(m => "            { " + Object.keys(m).map(k => `${JSON.stringify(k)}: ${JSON.stringify(m[k])}`).join(", ") + " }")
            .join(",\n");
        return [
            "    {",
            `        "Name": ${JSON.stringify(c.Name)},`,
            `        "Status": ${JSON.stringify(c.Status)},`,
            '        "Campaigns": [',
            memberships,
            "        ]",
            "    }",
        ].join("\n");
    }).join(",\n"),
    "];",
    "",
].join("\n");
fs.writeFileSync(path.join(ROOT, "characters.js"), out, "utf8");

const players = characters.filter(c => c.Campaigns.some(m => m.Role === "Player")).length;
const withCover = campaigns.filter(c => c.Cover).length;
for (const c of campaigns) {
    if (!c.Cover) continue;
    const kb = Math.round(fs.statSync(path.join(ROOT, c.Cover)).size / 1024);
    if (kb > 500) warnings.push(`${c.Cover} is ${kb}KB; consider shrinking it (a copy newer than the vault image is left alone by the sync)`);
}
console.log(`campaigns: ${campaigns.length} (${withCover} with a cover image in covers/)`);
console.log(`characters: ${characters.length} (${players} with a player role, ${OVERRIDES.extras.length} from overrides, ${skipped} vault notes skipped for having no campaign)`);
for (const w of warnings) console.log("warning:", w);
