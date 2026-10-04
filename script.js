// Character data (`campaigns` and `characters`) comes from characters.js, which is
// generated from the TTRPG Wiki vault by sync/sync.js. Each character looks like:
//   { "Name": "Ezmerelda", "Campaigns": [ { "Name": "Borca", "Role": "Player" }, ... ] }

// ---- character pools -------------------------------------------------------

function isPlayerCharacter(character) {
    return character.Campaigns.some(function(membership) {
        return membership.Role === "Player";
    });
}

function charactersInCampaign(campaignName) {
    return characters.filter(function(character) {
        return character.Campaigns.some(function(membership) {
            return membership.Name === campaignName;
        });
    });
}

var pools = {
    all: function() { return characters; },
    players: function() { return characters.filter(isPlayerCharacter); }
};

function randomFrom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

// ---- rendering -------------------------------------------------------------

// Fill a generator section with a character's name and its campaign list.
function showCharacter(character, section) {
    section.querySelector(".character-name").textContent = character.Name;
    section.querySelector(".campaign-heading").textContent = "Campaign(s): ";

    var list = section.querySelector(".campaign-list");
    list.innerHTML = "";
    character.Campaigns.forEach(function(membership) {
        var item = document.createElement("li");
        item.textContent = membership.Name + (membership.Role === "Player" ? " (player character)" : "");
        list.appendChild(item);
    });
}

// Build a generator section for a campaign that has no hand-written HTML.
function createCampaignSection(campaignName) {
    var row = document.createElement("div");
    row.className = "row";

    var section = document.createElement("section");
    section.className = "col-sm-12 generator";
    section.dataset.campaign = campaignName;

    var button = document.createElement("button");
    button.type = "button";
    button.className = "btn btn-primary";
    button.textContent = "Generate from " + campaignName;

    var name = document.createElement("h1");
    name.className = "character-name";
    var heading = document.createElement("h5");
    heading.className = "campaign-heading";
    var list = document.createElement("ul");
    list.className = "campaign-list";

    section.append(button, name, heading, list);
    row.appendChild(section);
    return row;
}

// ---- setup -----------------------------------------------------------------

var campaignContainer = document.querySelector("#campaign-generators");
campaigns.forEach(function(campaignName) {
    if (charactersInCampaign(campaignName).length > 0) {
        campaignContainer.appendChild(createCampaignSection(campaignName));
    }
});

// One click handler for every generator button, hand-written or generated.
document.querySelectorAll(".generator").forEach(function(section) {
    section.querySelector("button").addEventListener("click", function() {
        var pool = section.dataset.campaign
            ? charactersInCampaign(section.dataset.campaign)
            : pools[section.dataset.pool]();
        showCharacter(randomFrom(pool), section);
    });
});
