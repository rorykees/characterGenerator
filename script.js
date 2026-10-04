// Data (`campaigns` and `characters`) comes from characters.js, generated from the
// TTRPG Wiki vault by sync/sync.js. Shapes:
//   campaign:  { Name, Cover }
//   character: { Name, Status, Portrait, Campaigns: [ { Name, Role, Player?, Description? } ] }

(function () {
    "use strict";

    var campaignByName = new Map(campaigns.map(function (c) { return [c.Name, c]; }));

    // ---- elements ------------------------------------------------------------

    var card = document.getElementById("card");
    var cardName = document.getElementById("card-name");
    var cardStatus = document.getElementById("card-status");
    var cardPortrait = document.getElementById("card-portrait");
    var cardPortraitImage = document.getElementById("card-portrait-image");
    var cardCampaigns = document.getElementById("card-campaigns");
    var covers = [document.getElementById("cover-a"), document.getElementById("cover-b")];
    var drawButton = document.getElementById("draw");
    var poolSize = document.getElementById("pool-size");
    var filters = document.getElementById("filters");
    var campaignChips = document.getElementById("campaign-chips");
    var clearButton = document.getElementById("clear-campaigns");
    var colophon = document.getElementById("colophon-text");

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ---- filter state --------------------------------------------------------

    function selectedCampaigns() {
        return Array.prototype.map.call(
            campaignChips.querySelectorAll("input:checked"),
            function (input) { return input.value; }
        );
    }

    function selectedWho() {
        return filters.elements.who.value;
    }

    // Memberships that count for the current filters.
    function matchingMemberships(character, chosen, who) {
        return character.Campaigns.filter(function (m) {
            if (chosen.length && chosen.indexOf(m.Name) === -1) return false;
            if (who === "players") return m.Role === "Player";
            if (who === "npcs") return m.Role === "NPC";
            return true;
        });
    }

    function currentPool() {
        var chosen = selectedCampaigns();
        var who = selectedWho();
        return characters.filter(function (c) {
            return matchingMemberships(c, chosen, who).length > 0;
        });
    }

    function describePool(pool) {
        var chosen = selectedCampaigns();
        var who = selectedWho();
        var noun = who === "players" ? "player character" : who === "npcs" ? "NPC" : "character";
        var where = chosen.length === 0 ? "every campaign"
            : chosen.length === 1 ? chosen[0]
            : chosen.length + " campaigns";
        if (pool.length === 0) {
            return "No " + noun + "s in " + where + ". Change the filters to keep drawing.";
        }
        return "Drawing from " + pool.length + " " + noun + (pool.length === 1 ? "" : "s") + " in " + where + ".";
    }

    function updatePool() {
        var pool = currentPool();
        poolSize.textContent = describePool(pool);
        drawButton.disabled = pool.length === 0;
        clearButton.hidden = selectedCampaigns().length === 0;
    }

    // ---- rendering -----------------------------------------------------------

    var coverIndex = 0;

    function showCover(campaignName) {
        var campaign = campaignByName.get(campaignName);
        var next = covers[(coverIndex + 1) % 2];
        var current = covers[coverIndex];
        if (!campaign || !campaign.Cover) {
            current.classList.remove("is-visible");
            return;
        }
        next.style.backgroundImage = "url(\"" + campaign.Cover + "\")";
        next.classList.add("is-visible");
        current.classList.remove("is-visible");
        coverIndex = (coverIndex + 1) % 2;
    }

    function showPortrait(character) {
        if (!character.Portrait) {
            cardPortrait.hidden = true;
            cardPortraitImage.removeAttribute("src");
            return;
        }
        cardPortraitImage.alt = "Portrait of " + character.Name;
        cardPortraitImage.src = character.Portrait;
        cardPortrait.hidden = false;
    }

    function renderCharacter(character) {
        var chosen = selectedCampaigns();
        var who = selectedWho();
        var focus = matchingMemberships(character, chosen, who);

        cardName.textContent = character.Name;
        cardStatus.textContent = character.Status === "Dead" ? "Deceased" : "";
        showPortrait(character);

        cardCampaigns.innerHTML = "";
        character.Campaigns.forEach(function (m) {
            var item = document.createElement("li");
            if (focus.indexOf(m) !== -1 && (chosen.length || who !== "anyone")) item.classList.add("is-focus");

            var title = document.createElement("span");
            title.className = "campaign-title";
            title.textContent = m.Name;
            item.appendChild(title);

            if (m.Role === "Player") {
                var role = document.createElement("span");
                role.className = "campaign-role";
                role.textContent = "Played by " + (m.Player || "a player") + (m.Description ? ", " + m.Description : "");
                item.appendChild(role);
            }
            cardCampaigns.appendChild(item);
        });

        card.classList.add("has-character");
        showCover((focus[0] || character.Campaigns[0] || {}).Name);
    }

    // ---- the draw ------------------------------------------------------------

    function randomFrom(list) {
        return list[Math.floor(Math.random() * list.length)];
    }

    var shuffleTimer = null;

    function draw() {
        var pool = currentPool();
        if (pool.length === 0) return;
        var pick = randomFrom(pool);

        if (reduceMotion || pool.length < 3) {
            renderCharacter(pick);
            return;
        }

        // Riffle through a few other names before settling on the pick.
        clearInterval(shuffleTimer);
        drawButton.disabled = true;
        card.classList.add("has-character");
        cardName.classList.add("is-shuffling");
        cardStatus.textContent = "";
        cardCampaigns.innerHTML = "";
        cardPortrait.hidden = true;
        if (pick.Portrait) new Image().src = pick.Portrait;

        var ticks = 0;
        shuffleTimer = setInterval(function () {
            ticks += 1;
            if (ticks < 9) {
                cardName.textContent = randomFrom(pool).Name;
                return;
            }
            clearInterval(shuffleTimer);
            cardName.classList.remove("is-shuffling");
            renderCharacter(pick);
            drawButton.disabled = false;
        }, 60);
    }

    // ---- setup ---------------------------------------------------------------

    campaigns.forEach(function (campaign) {
        var label = document.createElement("label");
        label.className = "chip";
        var input = document.createElement("input");
        input.type = "checkbox";
        input.name = "campaign";
        input.value = campaign.Name;
        var text = document.createElement("span");
        text.textContent = campaign.Name;
        label.appendChild(input);
        label.appendChild(text);
        campaignChips.appendChild(label);
    });

    filters.addEventListener("change", updatePool);
    filters.addEventListener("submit", function (event) { event.preventDefault(); });

    clearButton.addEventListener("click", function () {
        campaignChips.querySelectorAll("input:checked").forEach(function (input) { input.checked = false; });
        updatePool();
    });

    drawButton.addEventListener("click", draw);

    var playerCount = characters.filter(function (c) {
        return c.Campaigns.some(function (m) { return m.Role === "Player"; });
    }).length;
    colophon.textContent = characters.length + " characters across " + campaigns.length + " campaigns, " +
        playerCount + " of them played by one of us. Data comes from the TTRPG Wiki.";

    updatePool();
})();
