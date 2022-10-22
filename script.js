const cosCharacters = [
    { 
        "Name": "Ezmerelda",
        "Campaigns": ["Curse of Strahd","Tomb of Horrors","Waterdeep: Dragon Heist","Strixhaven: Campus Kerfuffle","Borca","Wild Beyond the Witchlight"]  
    },
    {
        "Name": "Ireena",
        "Campaigns": ["Curse of Strahd","Tomb of Horrors","Wild Beyond the Witchlight"]
    }, 
    {
        "Name": "Yesper",
        "Campaigns": ["Curse of Strahd","Wild Beyond the Witchlight"]
    }, 
    {
        "Name": "Rictavio",
        "Campaigns": ["Curse of Strahd","Tomb of Horrors","Wild Beyond the Witchlight"]
    }, 
    {
        "Name": "The Abbot (Jude Law)",
        "Campaigns": ["Curse of Strahd"]
    },
    {
        "Name": "Baron Vallakovich",
        "Campaigns": ["Curse of Strahd"]
    },
    {
        "Name": "Blinksy",
        "Campaigns": ["Curse of Strahd"]
    },
    {
        "Name": "Christopher",
        "Campaigns": ["Curse of Strahd"]
    }, 
    {
        "Name": "Exethanter",
        "Campaigns": ["Curse of Strahd", "Orrery of the Wanderer"]
    }, 
    {
        "Name": "Godfrey",
        "Campaigns": ["Curse of Strahd"]
    },
    {
        "Name": "Ismark",
        "Campaigns": ["Curse of Strahd"]
    },
    {
        "Name": "Mordenkainen",
        "Campaigns": ["Curse of Strahd"]
    },
    {
        "Name": "Neferon",
        "Campaigns": ["Curse of Strahd", "Orrery of the Wanderer"]
    },
    {
        "Name": "Pidlwick",
        "Campaigns": ["Curse of Strahd", "Wild Beyond the Witchlight"]
    },
    {
        "Name": "Rahadin",
        "Campaigns": ["Curse of Strahd"]
    },
    {
        "Name": "Strahd",
        "Campaigns": ["Curse of Strahd"]
    },
    {
        "Name": "Victor",
        "Campaigns": ["Curse of Strahd"]
    }
];

const dhCharacters = [
    {
        "Name":"Avi",
        "Campaigns": ["Waterdeep: Dragon Heist","Lost Laboratory of Kwalish"]
    },
    {
        "Name":"Babolax",
        "Campaigns": ["Waterdeep: Dragon Heist","Orrery of the Wanderer","Lost Laboratory of Kwalish"]
    },
    {
        "Name":"Yurk",
        "Campaigns": ["Waterdeep: Dragon Heist","Lost Laboratory of Kwalish"]
    },
    {
        "Name":"Davil",
        "Campaigns": ["Waterdeep: Dragon Heist","Lost Laboratory of Kwalish"]
    },
    {
        "Name":"Embric",
        "Campaigns": ["Waterdeep: Dragon Heist","Lost Laboratory of Kwalish"]
    },
    {
        "Name":"Emmek",
        "Campaigns": ["Waterdeep: Dragon Heist"]
    },
    {
        "Name":"Floon",
        "Campaigns": ["Waterdeep: Dragon Heist", "Dungeon of the Mad Mage"]
    },
    {
        "Name":"Jorn",
        "Campaigns": ["Waterdeep: Dragon Heist","Lost Laboratory of Kwalish"]
    },
    {
        "Name":"Hrangor",
        "Campaigns": ["Waterdeep: Dragon Heist","Orrery of the Wanderer","Strixhaven: Campus Kerfuffle"]
    },
    {
       "Name": "Lif",
        "Campaigns": ["Waterdeep: Dragon Heist","Lost Laboratory of Kwalish"]
    },
    {
        "Name":"Nim",
        "Campaigns": ["Waterdeep: Dragon Heist","Lost Laboratory of Kwalish"]
    },
    {
        "Name":"Otis",
        "Campaigns": ["Waterdeep: Dragon Heist","Orrery of the Wanderer"]
    },
    {
        "Name":"Renaer",
        "Campaigns": ["Waterdeep: Dragon Heist"]
    },
    {
        "Name":"Tashlyn",
        "Campaigns": ["Waterdeep: Dragon Heist","Lost Laboratory of Kwalish"]
    },
    {
        "Name": "Trench",
        "Campaigns": ["Waterdeep: Dragon Heist"]
    },
    {
        "Name":"Vajra",
        "Campaigns": ["Waterdeep: Dragon Heist","Lost Laboratory of Kwalish"]
    },
    {
        "Name": "Volo",
        "Campaigns": ["Waterdeep: Dragon Heist","Lost Laboratory of Kwalish","Dungeon of the Mad Mage"]
    },
    {
        "Name": "Yagra",
        "Campaigns": ["Waterdeep: Dragon Heist","Lost Laboratory of Kwalish"]
    }
];


const orreryCharacters = [
    {
        "Name": "Brawn",
        "Campaigns": ["Orrery of the Wanderer"]
    },
    {
        "Name": "Ecstasy",
        "Campaigns": ["Orrery of the Wanderer"]
    }, 
    {
        "Name": "Frahl",
        "Campaigns": ["Orrery of the Wanderer","Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Gildha",
        "Campaigns": ["Orrery of the Wanderer"]
    },
    {
        "Name": "Gorkoh",
        "Campaigns": ["Orrery of the Wanderer"]
    },
    {
        "Name": "Grunka",
        "Campaigns": ["Orrery of the Wanderer"]
    },
    {
        "Name": "Guthildi",
        "Campaigns": ["Orrery of the Wanderer","Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Jutt",
        "Campaigns": ["Orrery of the Wanderer"]
    },
    {
        "Name": "Meff",
        "Campaigns": ["Orrery of the Wanderer"]
    },
    {
        "Name": "Lottie",
        "Campaigns": ["Orrery of the Wanderer"]
    },
    {
        "Name": "Omin",
        "Campaigns": ["Orrery of the Wanderer"]
    },
    {
        "Name": "Patsky",
        "Campaigns": ["Orrery of the Wanderer"]
    }, 
    {
        "Name": "Sildar",
        "Campaigns": ["Orrery of the Wanderer"]
    },
    {
        "Name": "Talanatha",
        "Campaigns": ["Orrery of the Wanderer"]
    },
    {
        "Name": "Thetsis",
        "Campaigns": ["Orrery of the Wanderer"]
    },
    {
        "Name": "Wizzy",
        "Campaigns": ["Orrery of the Wanderer"]
    },
    {
        "Name": "Wester",
        "Campaigns": ["Orrery of the Wanderer"]
    },
    {
        "Name": "Tordit",
        "Campaigns": ["Orrery of the Wanderer"]
    }
]

const witchlightCharacters = [
    {
        "Name": "Amidor",
        "Campaigns": ["Wild Beyond the Witchlight"]
    },
    {
        "Name": "Bavlorna Blightstraw",
        "Campaigns": ["Wild Beyond the Witchlight"]
    }, 
    {
        "Name": "Bloody Toes",
        "Campaigns": ["Wild Beyond the Witchlight"]
    }, 
    {
        "Name": "Candlefoot",
        "Campaigns": ["Wild Beyond the Witchlight","Lost Laboratory of Kwalish"]
    }, 
    {
        "Name": "Charm",
        "Campaigns": ["Wild Beyond the Witchlight","Lost Laboratory of Kwalish"]
    }, 
    {
        "Name": "Clapperclaw",
        "Campaigns": ["Wild Beyond the Witchlight"]
    },
    {
        "Name": "Dumphrey Frogart",
        "Campaigns": ["Wild Beyond the Witchlight"]
    },
    {
        "Name": "Elidon",
        "Campaigns": ["Wild Beyond the Witchlight"]
    },
    {
        "Name": "Elkhorn",
        "Campaigns": ["Wild Beyond the Witchlight"]
    },
    {
        "Name": "Endelyn Moongrave",
        "Campaigns": ["Wild Beyond the Witchlight"]
    },
    {
        "Name": "Ewyn",
        "Campaigns": ["Wild Beyond the Witchlight"]
    },
    {
        "Name": "Gleam",
        "Campaigns": ["Wild Beyond the Witchlight","Lost Laboratory of Kwalish"]
    },
    {
        "Name": "Glister",
        "Campaigns": ["Wild Beyond the Witchlight","Lost Laboratory of Kwalish"]
    },
    {
        "Name": "Feenia",
        "Campaigns": ["Wild Beyond the Witchlight"]
    },
    {
        "Name": "Hati",
        "Campaigns": ["Curse of Strahd","Wild Beyond the Witchlight"]
    },
    {
        "Name": "Jingle Jangle",
        "Campaigns": ["Wild Beyond the Witchlight"]
    },
    {
        "Name": "Jord",
        "Campaigns": ["Wild Beyond the Witchlight"]
    },
    {
        "Name": "Juniper",
        "Campaigns": ["Wild Beyond the Witchlight"]
    },
    {
        "Name": "Lamorna",
        "Campaigns": ["Wild Beyond the Witchlight"]
    },
    {
        "Name": "Molliver",
        "Campaigns": ["Wild Beyond the Witchlight"]
    },
    {
        "Name": "Mr. Light",
        "Campaigns": ["Wild Beyond the Witchlight"]
    },
    {
        "Name": "Mr. Witch",
        "Campaigns": ["Wild Beyond the Witchlight"]
    },
    {
        "Name": "Pollenella",
        "Campaigns": ["Wild Beyond the Witchlight"]
    },
    {
        "Name": "Selise",
        "Campaigns": ["Wild Beyond the Witchlight"]
    },
    {
        "Name": "Skabatha Nightshade",
        "Campaigns": ["Wild Beyond the Witchlight","Dungeon of the Mad Mage"]
    },
    {
        "Name": "Sir Talavar",
        "Campaigns": ["Wild Beyond the Witchlight"]
    },
    {
        "Name": "Thaco",
        "Campaigns": ["Wild Beyond the Witchlight","Lost Laboratory of Kwalish"]
    },
    {
        "Name": "Tsu",
        "Campaigns": ["Wild Beyond the Witchlight"]
    },
    {
        "Name": "Will of the Feywild",
        "Campaigns": ["Wild Beyond the Witchlight"]
    },
    {
        "Name": "Zybilna",
        "Campaigns": ["Wild Beyond the Witchlight"]
    }
]

const strixhavenY1Characters = [
    {
        "Name": "Zaria",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Abel",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Aurora",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Cadoras",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Nassari",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Tullus",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Drazhomir",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Dusty",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    }, 
    {
        "Name": "Prismari",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Genevayne",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Glitter Dew",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Grayson",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Ivan",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Javenesh",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Larine",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Melwythorne",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Mina",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Nora",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Pewter",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Brenneth",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Lang",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Ruxa",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Prydevere",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Quentillius",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Rampart",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Roberta",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Roneca",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Rosie",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Rubina",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Ruslana",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Shuvadri",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Tilana",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Urzmaktok",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Vel",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Velastrias",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Whippoorwill",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Zanther",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    }
]

const lostLabCharacters = [
    {
        "Name": "Abi-Dalzim",
        "Campaigns": ["Lost Laboratory of Kwalish"]
    },
    {
        "Name": "Aurora de L'aunaie",
        "Campaigns": ["Lost Laboratory of Kwalish"]
    },
    {
        "Name": "Bone Devil",
        "Campaigns": ["Lost Laboratory of Kwalish"]
    },
    {
        "Name": "Darcy",
        "Campaigns": ["Lost Laboratory of Kwalish"]
    },
    {
        "Name": "Eclipse",
        "Campaigns": ["Lost Laboratory of Kwalish"]
    },
    {
        "Name": "Escher",
        "Campaigns": ["Curse of Strahd","Lost Laboratory of Kwalish"]
    },
    {
        "Name": "Evard",
        "Campaigns": ["Lost Laboratory of Kwalish"]
    },
    {
        "Name": "Father Taps",
        "Campaigns": ["Lost Laboratory of Kwalish"]
    },
    {
        "Name": "Fox",
        "Campaigns": ["Lost Laboratory of Kwalish"]
    },
    {
        "Name": "Gearbox",
        "Campaigns": ["Lost Laboratory of Kwalish"]
    },
    {
        "Name": "Gloine Nathair-Nathair",
        "Campaigns": ["Lost Laboratory of Kwalish"]
    },
    {
        "Name": "Jery",
        "Campaigns": ["Lost Laboratory of Kwalish"]
    },
    {
        "Name": "Kwalish",
        "Campaigns": ["Lost Laboratory of Kwalish"]
    },
    {
        "Name": "Mary",
        "Campaigns": ["Lost Laboratory of Kwalish"]
    },
    {
        "Name": "Oberon",
        "Campaigns": ["Lost Laboratory of Kwalish"]
    },
    {
        "Name": "Tzunk",
        "Campaigns": ["Lost Laboratory of Kwalish"]
    },
    {
        "Name": "Tenser",
        "Campaigns": ["Lost Laboratory of Kwalish"]
    },
    {
        "Name": "Rusty Bucket",
        "Campaigns": ["Lost Laboratory of Kwalish"]
    }
]

const madMageCharacters = [ 
    {
        "Name": "Halleth",
        "Campaigns": ["Dungeon of the Mad Mage"]
    },
    {
        "Name": "Mirabelle",
        "Campaigns": ["Dungeon of the Mad Mage"]
    },
    {
        "Name": "Wobbles",
        "Campaigns": ["Dungeon of the Mad Mage"]
    },
    {
        "Name": "Darribeth",
        "Campaigns": ["Dungeon of the Mad Mage"]
    },
    {
        "Name": "Lucian",
        "Campaigns": ["Dungeon of the Mad Mage"]
    },
    {
        "Name": "Esvele",
        "Campaigns": ["Waterdeep: Dragon Heist","Dungeon of the Mad Mage"]
    },
    {
        "Name": "Felrax",
        "Campaigns": ["Dungeon of the Mad Mage"]
    },
    {
        "Name": "Frerk",
        "Campaigns": ["Dungeon of the Mad Mage"]
    },
    {
        "Name": "Yek",
        "Campaigns": ["Dungeon of the Mad Mage"]
    },
    {
        "Name": "Mattrim",
        "Campaigns": ["Dungeon of the Mad Mage"]
    },
    {
        "Name": "Rizzeryl",
        "Campaigns": ["Dungeon of the Mad Mage"]
    },
    {
        "Name": "Zilitsa",
        "Campaigns": ["Dungeon of the Mad Mage"]
    }
]

const playerCharacters = [
    {
        "Name": "Krue",
        "Campaigns": ["Curse of Strahd","Tomb of Horros","Borca","Wild Beyond the Witchlight"]
    },
    {
        "Name": "Skoll",
        "Campaigns": ["Curse of Strahd","Tomb of Horros","Wild Beyond the Witchlight"]
    },
    {
        "Name": "Nia",
        "Campaigns": ["Curse of Strahd","Tomb of Horros","Wild Beyond the Witchlight"]
    },
    {
        "Name": "Ruik",
        "Campaigns": ["Waterdeep: Dragon Heist","Lost Laboratory of Kwalish"]
    },
    {
        "Name": "Briar",
        "Campaigns": ["Waterdeep: Dragon Heist","Lost Laboratory of Kwalish"]
    },
    {
        "Name": "Evie",
        "Campaigns": ["Waterdeep: Dragon Heist","Lost Laboratory of Kwalish"]
    },
    {
        "Name": "Andros",
        "Campaigns": ["Orrery of the Wanderer"]
    },
    {
        "Name": "Dyre",
        "Campaigns": ["Orrery of the Wanderer"]
    },
    {
        "Name": "Kitty",
        "Campaigns": ["Orrery of the Wanderer"]
    },
    {
        "Name": "Casavel",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Crypta",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Silver",
        "Campaigns": ["Strixhaven: Campus Kerfuffle"]
    },
    {
        "Name": "Fen",
        "Campaigns": ["Dungeon of the Mad Mage"]
    },
    {
        "Name": "Marsh",
        "Campaigns": []
    },
    {
        "Name": "Sumari",
        "Campaigns": ["Dungeon of the Mad Mage"]
    },
    {
        "Name": "Mani",
        "Campaigns": ["Dungeon of the Mad Mage"]
    },
    {
        "Name": "Vih'zel",
        "Campaigns": ["Dungeon of the Mad Mage"]
    }
]

var allCharacters = cosCharacters.concat(dhCharacters, orreryCharacters, witchlightCharacters, strixhavenY1Characters, lostLabCharacters, madMageCharacters, playerCharacters); 

// get elements 
var beginButton = document.querySelector("#begin-button");
var playerButton = document.querySelector("#player-button"); 
var cosButton = document.querySelector("#cos-button");
var dhButton = document.querySelector("#dh-button");
var orreryButton = document.querySelector("#orrery-button");
var wlButton = document.querySelector("#wl-button");
var shButton = document.querySelector("#sh-button");
var llButton = document.querySelector("#ll-button");
var mmButton = document.querySelector("#mm-button");

var characterSection = document.querySelector("character-generation");

var characterText = document.querySelector("#character");
var playerCharacterText = document.querySelector("#player-character");
var cosCharacterText = document.querySelector("#cos-character");
var dhCharacterText = document.querySelector("#dh-character"); 
var orreryCharacterText = document.querySelector("#orrery-character");
var wlCharacterText = document.querySelector("#wl-character"); 
var shCharacterText = document.querySelector("#sh-character"); 
var llCharacterText = document.querySelector("#ll-character"); 
var mmCharacterText = document.querySelector("#mm-character"); 

var campaignText = document.querySelector("#campaign");
var playerCampaignText = document.querySelector("#player-campaign");

var beginPage = document.querySelector("#begin-page"); 

//click action listener - for answer buttons and high scores link 
addEventListener("click",function(event) {
    
    event.preventDefault(); //stop default behavior 
    
    var buttonID = event.target.getAttribute("id"); // get id of think being clicked 

    if(event.target.matches("button") && buttonID == "begin-button") {
        
        
    }
});

//action listener for generate button 
beginButton.addEventListener("click",function(event) {
    let index = Math.floor(Math.random()*allCharacters.length); 
    characterText.textContent = allCharacters[index].Name;

    campaignText.textContent = "Campaign(s): "
    let campaignList = document.querySelector("#campaigns"); 
    campaignList.innerHTML = "";
    for(let i = 0; i < allCharacters[index].Campaigns.length; i++) {
        let campaignItem = document.createElement("li"); 
        campaignItem.innerText = allCharacters[index].Campaigns[i]; 
        
        campaignList.appendChild(campaignItem); 
    }
}); 

//action listener for player button
playerButton.addEventListener("click",function(event) {
    let index = Math.floor(Math.random()*playerCharacters.length); 
    playerCharacterText.textContent = playerCharacters[index].Name;

    playerCampaignText.textContent = "Campaign(s): "
    let playerCampaignList = document.querySelector("#player-campaigns"); 
    playerCampaignList.innerHTML = ""; 
    for(let i = 0; i < playerCharacters[index].Campaigns.length; i++) {
        let playerCampaignItem = document.createElement("li"); 
        playerCampaignItem.innerText = playerCharacters[index].Campaigns[i]; 
        
        playerCampaignList.appendChild(playerCampaignItem); 
    }
}); 

//action listener for cos button
cosButton.addEventListener("click",function(event) {
    cosCharacterText.textContent = cosCharacters[Math.floor(Math.random()*cosCharacters.length)].Name;
}); 

//action listener for dh button
dhButton.addEventListener("click",function(event) {
    dhCharacterText.textContent = dhCharacters[Math.floor(Math.random()*dhCharacters.length)].Name;
}); 

//action listener for orrery button
orreryButton.addEventListener("click",function(event) {
    orreryCharacterText.textContent = orreryCharacters[Math.floor(Math.random()*orreryCharacters.length)].Name;
}); 

//action listener for witchlight button
wlButton.addEventListener("click",function(event) {
    wlCharacterText.textContent = witchlightCharacters[Math.floor(Math.random()*witchlightCharacters.length)].Name;
}); 

//action listener for strixhaven button
shButton.addEventListener("click",function(event) {
    shCharacterText.textContent = strixhavenY1Characters[Math.floor(Math.random()*strixhavenY1Characters.length)].Name;
}); 

//action listener for lost lab button
llButton.addEventListener("click",function(event) {
    llCharacterText.textContent = lostLabCharacters[Math.floor(Math.random()*lostLabCharacters.length)].Name;
}); 

//action listener for mad mage button
mmButton.addEventListener("click",function(event) {
    mmCharacterText.textContent = madMageCharacters[Math.floor(Math.random()*madMageCharacters.length)].Name;
}); 