# Character Generator

Picks a random NPC or player character from our tabletop campaigns.

## Files

- `index.html`, `style.css`, `script.js` - the page: one draw button, a result card, and filters for role and campaign. The campaign filters are built from the data at load time, so there is nothing to add here when a campaign or character is added.
- `characters.js` - the data (`campaigns` and `characters`). **Generated, do not edit by hand.**
- `portraits/` - character portraits shown under the name, resized from the vault into small WebP files. **Generated, do not edit by hand.**
- `sync/sync.js` - builds `characters.js` from the TTRPG Wiki Obsidian vault.
- `sync/overrides.json` - the few things the vault does not know:
  - `names`: vault file name to the shorter name shown on the page (for example `Volothamp Geddarm` to `Volo`).
  - `extras`: characters with no note in the vault, with their campaigns.
  - `extraCampaigns`: campaign memberships to add on top of the vault's, keyed by vault file name.

## Updating the data

The first time, install the image library the sync uses:

```
cd sync
npm install
```

Then, from the repo root:

```
node sync/sync.js
```

The vault path defaults to `C:\Users\roryk\OneDrive\Documents\Vaults\TTRPG Wiki`; pass a different path as the first argument if needed. The script prints a summary and warnings for anything it could not resolve, such as a campaign with no note in `Campaigns/`.

What the sync reads from the vault:

- `Characters/*.md` frontmatter `Campaign` list for each character's campaigns. Notes with an empty list are skipped.
- `Campaigns/*.md` `## Cast` and `## Secondary Cast` bullets for who was a player character in that campaign, who played them, and their class. Everyone else in the campaign is an NPC. `Start Date` sets the campaign order and the first alias sets the display name.
- `Characters/*.md` `Status` marks a character as deceased on the card, and `Portrait` names the image resized into `portraits/`.

Images are only reconverted when the vault file is newer than the copy in the repo, so reruns are quick.

Each character in `characters.js` ends up as:

```js
{
    "Name": "Ezmerelda",
    "Status": "Alive",
    "Portrait": "portraits/ezmerelda-d-avenir.webp",
    "Campaigns": [
        { "Name": "Curse of Strahd", "Role": "NPC" },
        { "Name": "Borca", "Role": "Player", "Player": "Lup", "Description": "a vistani human fighter (eldritch knight)" }
    ]
}
```

## Running locally

Open `index.html` directly, or serve the folder (for example `python -m http.server`) so the fonts and portraits load the same way they will when hosted.
