#!/usr/bin/env node
// Builds characters.js from the TTRPG Wiki Obsidian vault.
//
//   node sync/sync.js [path-to-vault]
//
// Sources:
//   <vault>/Characters/*.md  - frontmatter "Campaign" list gives each character's campaigns
//   <vault>/Campaigns/*.md   - "## Cast" / "## Secondary Cast" bullets give the player characters
//                              per campaign; "Start Date" orders the campaign buttons
//   sync/overrides.json      - display names, characters with no vault note, extra memberships
//
// Output: characters.js, which defines `campaigns` and `characters` for script.js.

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
    const cast = new Set();
    let inCast = false;
    for (const line of body(file.text).split(/\r?\n/)) {
        if (/^## /.test(line)) inCast = /^## (Cast|Secondary Cast)\s*$/.test(line);
        if (!inCast) continue;
        const m = line.match(/\bas \[\[([^\]|]+)/);
        if (m) cast.add(m[1].trim());
    }
    campaignsByFile[file.name] = {
        file: file.name,
        name: aliases[0] || file.name,
        startDate: typeof fm["Start Date"] === "string" ? fm["Start Date"] : "9999",
        cast,
    };
}
const campaignDisplayName = file => (campaignsByFile[file] ? campaignsByFile[file].name : file);
const campaignFileByName = name => Object.keys(campaignsByFile).find(f => campaignsByFile[f].name === name);
const campaigns = Object.values(campaignsByFile)
    .sort((a, b) => a.startDate.localeCompare(b.startDate) || a.name.localeCompare(b.name))
    .map(c => c.name);

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
        if (campaign) {
            role = campaign.cast.has(file.name) ? "Player" : "NPC";
        } else {
            // No campaign note to read a cast from: fall back to the character's own type.
            warnings.push(`${file.name}: campaign "${campaignFile}" has no note in Campaigns/, so it gets no button`);
            role = types.includes("Player Character") ? "Player" : "NPC";
        }
        memberships.push({ Name: displayName, Role: role });
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
        Campaigns: memberships,
    });
}

for (const extra of OVERRIDES.extras) {
    characters.push({
        Name: extra.Name,
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
        if (!campaigns.includes(m.Name) && !warnings.some(w => w.includes(`"${m.Name}"`)))
            warnings.push(`campaign "${m.Name}" (on ${c.Name}) has no note in Campaigns/, so it gets no button`);
    }
}
for (const campaign of Object.values(campaignsByFile)) {
    for (const member of campaign.cast) {
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
    "const campaigns = " + JSON.stringify(campaigns, null, 4) + ";",
    "",
    "const characters = [",
    characters.map(c => {
        const memberships = c.Campaigns
            .map(m => `            { "Name": ${JSON.stringify(m.Name)}, "Role": ${JSON.stringify(m.Role)} }`)
            .join(",\n");
        return [
            "    {",
            `        "Name": ${JSON.stringify(c.Name)},`,
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
console.log(`campaigns: ${campaigns.length}`);
console.log(`characters: ${characters.length} (${players} with a player role, ${OVERRIDES.extras.length} from overrides, ${skipped} vault notes skipped for having no campaign)`);
for (const w of warnings) console.log("warning:", w);
