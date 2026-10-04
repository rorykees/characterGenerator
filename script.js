// Data (`campaigns` and `characters`) comes from characters.js, generated from the
// TTRPG Wiki vault by sync/sync.js. Shapes:
//   campaigns: [ Name ]
//   character: { Name, Aliases, Link, Status, Portrait,
//                Campaigns: [ { Name, Role, Player?, Description? } ] }

(function () {
    "use strict";

    // ---- elements ------------------------------------------------------------

    var card = document.getElementById("card");
    var cardName = document.getElementById("card-name");
    var cardStatus = document.getElementById("card-status");
    var cardAliases = document.getElementById("card-aliases");
    var cardPortrait = document.getElementById("card-portrait");
    var cardPortraitImage = document.getElementById("card-portrait-image");
    var cardCampaigns = document.getElementById("card-campaigns");
    var drawButton = document.getElementById("draw");
    var poolSize = document.getElementById("pool-size");
    var filters = document.getElementById("filters");
    var whoChips = document.getElementById("who-chips");
    var campaignChips = document.getElementById("campaign-chips");
    var clearButton = document.getElementById("clear-campaigns");
    var colophon = document.getElementById("colophon-text");

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Everyone who has played a character, from the cast data.
    var players = [];
    characters.forEach(function (c) {
        c.Campaigns.forEach(function (m) {
            if (m.Player && players.indexOf(m.Player) === -1) players.push(m.Player);
        });
    });
    players.sort();

    // ---- filter state --------------------------------------------------------

    function selectedCampaigns() {
        return Array.prototype.map.call(
            campaignChips.querySelectorAll("input:checked"),
            function (input) { return input.value; }
        );
    }

    // "anyone" | "players" | "npcs" | "player:<Name>"
    function selectedWho() {
        return filters.elements.who.value;
    }

    // Does this membership pass the "who" filter?
    function membershipMatchesWho(m, who) {
        if (who === "players") return m.Role === "Player";
        if (who === "npcs") return m.Role === "NPC";
        if (who.indexOf("player:") === 0) return m.Role === "Player" && m.Player === who.slice(7);
        return true;
    }

    // Memberships that count for the given filters.
    function matchingMemberships(character, chosen, who) {
        return character.Campaigns.filter(function (m) {
            if (chosen.length && chosen.indexOf(m.Name) === -1) return false;
            return membershipMatchesWho(m, who);
        });
    }

    function poolFor(chosen, who) {
        return characters.filter(function (c) {
            return matchingMemberships(c, chosen, who).length > 0;
        });
    }

    function currentPool() {
        return poolFor(selectedCampaigns(), selectedWho());
    }

    function describeWho(who, plural) {
        if (who === "players") return plural ? "player characters" : "player character";
        if (who === "npcs") return plural ? "NPCs" : "NPC";
        if (who.indexOf("player:") === 0) return (plural ? "characters" : "character") + " played by " + who.slice(7);
        return plural ? "characters" : "character";
    }

    function describePool(pool) {
        var chosen = selectedCampaigns();
        var who = selectedWho();
        var where = chosen.length === 0 ? "every campaign"
            : chosen.length === 1 ? chosen[0]
            : chosen.length + " campaigns";
        if (pool.length === 0) {
            return "No " + describeWho(who, true) + " in " + where + ". Change the filters to keep drawing.";
        }
        return "Drawing from " + pool.length + " " + describeWho(who, pool.length !== 1) + " in " + where + ".";
    }

    // Count on each campaign chip: how many characters that campaign offers under the current "who".
    function updateCampaignCounts() {
        var who = selectedWho();
        campaignChips.querySelectorAll(".chip").forEach(function (chip) {
            var name = chip.querySelector("input").value;
            var count = poolFor([name], who).length;
            chip.querySelector(".chip-count").textContent = count;
            chip.classList.toggle("is-empty", count === 0);
        });
    }

    function updatePool() {
        var pool = currentPool();
        poolSize.textContent = describePool(pool);
        drawButton.disabled = pool.length === 0;
        clearButton.hidden = selectedCampaigns().length === 0;
        updateCampaignCounts();
    }

    // ---- rendering -----------------------------------------------------------

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
        if (character.Link) {
            cardName.href = character.Link;
            cardName.title = "Open " + character.Name + " on the wiki";
        } else {
            cardName.removeAttribute("href");
            cardName.removeAttribute("title");
        }
        cardStatus.textContent = character.Status === "Dead" ? "Deceased" : "";
        cardAliases.textContent = character.Aliases && character.Aliases.length
            ? "Also known as " + character.Aliases.join(", ")
            : "";
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
        cardName.removeAttribute("href");
        cardStatus.textContent = "";
        cardAliases.textContent = "";
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

    function makeChip(type, name, value, text, withCount) {
        var label = document.createElement("label");
        label.className = "chip";
        var input = document.createElement("input");
        input.type = type;
        input.name = name;
        input.value = value;
        var span = document.createElement("span");
        span.textContent = text;
        if (withCount) {
            var count = document.createElement("small");
            count.className = "chip-count";
            span.appendChild(count);
        }
        label.appendChild(input);
        label.appendChild(span);
        return label;
    }

    players.forEach(function (player) {
        whoChips.appendChild(makeChip("radio", "who", "player:" + player, "Played by " + player, false));
    });

    campaigns.forEach(function (campaignName) {
        campaignChips.appendChild(makeChip("checkbox", "campaign", campaignName, campaignName, true));
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
        playerCount + " of them played by one of us. Names link to the TTRPG Wiki.";

    updatePool();
})();
