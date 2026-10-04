# Character Generator

Picks a random NPC or player character from our tabletop campaigns.

## Files

- `index.html`, `style.css`, `script.js` - the page: one draw button, a result card, and filters for role and campaign. The campaign filters are built from the data at load time, so there is nothing to add here when a campaign or character is added.
- `characters.js` - the data (`campaigns` and `characters`). **Generated, do not edit by hand.**
- `covers/` - campaign cover images copied from the vault, shown behind the result card. **Generated**, but a copy that is newer than the vault image is left alone, so you can hand-shrink one if it is large.
- `sync/sync.js` - builds `characters.js` from the TTRPG Wiki Obsidian vault.
- `sync/overrides.json` - the few things the vault does not know:
  - `names`: vault file name to the shorter name shown on the page (for example `Volothamp Geddarm` to `Volo`).
  - `extras`: characters with no note in the vault, with their campaigns.
  - `extraCampaigns`: campaign memberships to add on top of the vault's, keyed by vault file name.

## Updating the data

```
node sync/sync.js
```

The vault path defaults to `C:\Users\roryk\OneDrive\Documents\Vaults\TTRPG Wiki`; pass a different path as the first argument if needed. The script prints a summary and warnings for anything it could not resolve, such as a campaign with no note in `Campaigns/`.

What the sync reads from the vault:

- `Characters/*.md` frontmatter `Campaign` list for each character's campaigns. Notes with an empty list are skipped.
- `Campaigns/*.md` `## Cast` and `## Secondary Cast` bullets for who was a player character in that campaign, who played them, and their class. Everyone else in the campaign is an NPC. `Start Date` sets the campaign order, the first alias sets the display name, and `Cover` names the image copied into `covers/`.
- `Characters/*.md` `Status` marks a character as deceased on the card.

Each character in `characters.js` ends up as:

```js
{
    "Name": "Ezmerelda",
    "Status": "Alive",
    "Campaigns": [
        { "Name": "Curse of Strahd", "Role": "NPC" },
        { "Name": "Borca", "Role": "Player", "Player": "Lup", "Description": "a vistani human fighter (eldritch knight)" }
    ]
}
```

## Running locally

Open `index.html` directly, or serve the folder (for example `python -m http.server`) so the fonts and covers load the same way they will when hosted.
