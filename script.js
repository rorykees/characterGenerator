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
        "Campaigns": []
    },
    {
        "Name": "Bavlorna Blightstraw",
        "Campaigns": []
    }, 
    {
        "Name": "Bloody Toes",
        "Campaigns": []
    }, 
    {
        "Name": "Candlefoot",
        "Campaigns": []
    }, 
    {
        "Name": "Charm",
        "Campaigns": []
    }, 
    {
        "Name": "Clapperclaw",
        "Campaigns": []
    },
    {
        "Name": "Dumphrey Frogart",
        "Campaigns": []
    },
    {
        "Name": "Elidon",
        "Campaigns": []
    },
    {
        "Name": "Elkhorn",
        "Campaigns": []
    },
    {
        "Name": "Endelyn Moongrave",
        "Campaigns": []
    },
    {
        "Name": "Ewyn",
        "Campaigns": []
    },
    {
        "Name": "Gleam",
        "Campaigns": []
    },
    {
        "Name": "Glister",
        "Campaigns": []
    },
    {
        "Name": "Feenia",
        "Campaigns": []
    },
    {
        "Name": "Hati",
        "Campaigns": []
    },
    {
        "Name": "Jingle Jangle",
        "Campaigns": []
    },
    {
        "Name": "Jord",
        "Campaigns": []
    },
    {
        "Name": "Juniper",
        "Campaigns": []
    },
    {
        "Name": "Lamorna",
        "Campaigns": []
    },
    {
        "Name": "Molliver",
        "Campaigns": []
    },
    {
        "Name": "Mr. Light",
        "Campaigns": []
    },
    {
        "Name": "Mr. Witch",
        "Campaigns": []
    },
    {
        "Name": "Pollenella",
        "Campaigns": []
    },
    {
        "Name": "Selise",
        "Campaigns": []
    },
    {
        "Name": "Skabatha Nightshade",
        "Campaigns": []
    },
    {
        "Name": "Sir Talavar",
        "Campaigns": []
    },
    {
        "Name": "Thaco",
        "Campaigns": []
    },
    {
        "Name": "Tsu",
        "Campaigns": []
    },
    {
        "Name": "Will of the Feywild",
        "Campaigns": []
    },
    {
        "Name": "Zybilna",
        "Campaigns": []
    }
]

const strixhavenY1Characters = [
    {
        "Name": "Zaria",
        "Campaigns": []
    },
    {
        "Name": "Abel",
        "Campaigns": []
    },
    {
        "Name": "Aurora",
        "Campaigns": []
    },
    {
        "Name": "Cadoras",
        "Campaigns": []
    },
    {
        "Name": "Nassari",
        "Campaigns": []
    },
    {
        "Name": "Tullus",
        "Campaigns": []
    },
    {
        "Name": "Drazhomir",
        "Campaigns": []
    },
    {
        "Name": "Dusty",
        "Campaigns": []
    }, 
    {
        "Name": "Prismari",
        "Campaigns": []
    },
    {
        "Name": "Genevayne",
        "Campaigns": []
    },
    {
        "Name": "Glitter Dew",
        "Campaigns": []
    },
    {
        "Name": "Grayson",
        "Campaigns": []
    },
    {
        "Name": "Ivan",
        "Campaigns": []
    },
    {
        "Name": "Javenesh",
        "Campaigns": []
    },
    {
        "Name": "Larine",
        "Campaigns": []
    },
    {
        "Name": "Melwythorne",
        "Campaigns": []
    },
    {
        "Name": "Mina",
        "Campaigns": []
    },
    {
        "Name": "Nora",
        "Campaigns": []
    },
    {
        "Name": "Pewter",
        "Campaigns": []
    },
    {
        "Name": "Brenneth",
        "Campaigns": []
    },
    {
        "Name": "Lang",
        "Campaigns": []
    },
    {
        "Name": "Ruxa",
        "Campaigns": []
    },
    {
        "Name": "Prydevere",
        "Campaigns": []
    },
    {
        "Name": "Quentillius",
        "Campaigns": []
    },
    {
        "Name": "Rampart",
        "Campaigns": []
    },
    {
        "Name": "Roberta",
        "Campaigns": []
    },
    {
        "Name": "Roneca",
        "Campaigns": []
    },
    {
        "Name": "Rosie",
        "Campaigns": []
    },
    {
        "Name": "Rubina",
        "Campaigns": []
    },
    {
        "Name": "Ruslana",
        "Campaigns": []
    },
    {
        "Name": "Shuvadri",
        "Campaigns": []
    },
    {
        "Name": "Tilana",
        "Campaigns": []
    },
    {
        "Name": "Urzmaktok",
        "Campaigns": []
    },
    {
        "Name": "Vel",
        "Campaigns": []
    },
    {
        "Name": "Velastrias",
        "Campaigns": []
    },
    {
        "Name": "Whippoorwill",
        "Campaigns": []
    },
    {
        "Name": "Zanther",
        "Campaigns": []
    }
]

const lostLabCharacters = [
    {
        "Name": "Abi-Dalzim",
        "Campaigns": []
    },
    {
        "Name": "Aurora de L'aunaie",
        "Campaigns": []
    },
    {
        "Name": "Bone Devil",
        "Campaigns": []
    },
    {
        "Name": "Darcy",
        "Campaigns": []
    },
    {
        "Name": "Eclipse",
        "Campaigns": []
    },
    {
        "Name": "Escher",
        "Campaigns": []
    },
    {
        "Name": "Evard",
        "Campaigns": []
    },
    {
        "Name": "Father Taps",
        "Campaigns": []
    },
    {
        "Name": "Fox",
        "Campaigns": []
    },
    {
        "Name": "Gearbox",
        "Campaigns": []
    },
    {
        "Name": "Gloine Nathair-Nathair",
        "Campaigns": []
    },
    {
        "Name": "Jery",
        "Campaigns": []
    },
    {
        "Name": "Kwalish",
        "Campaigns": []
    },
    {
        "Name": "Mary",
        "Campaigns": []
    },
    {
        "Name": "Oberon",
        "Campaigns": []
    },
    {
        "Name": "Tzunk",
        "Campaigns": []
    },
    {
        "Name": "Tenser",
        "Campaigns": []
    },
    {
        "Name": "Rusty Bucket",
        "Campaigns": []
    }
]

const madMageCharacters = [ 
    {
        "Name": "Halleth",
        "Campaigns": []
    },
    {
        "Name": "Mirabelle",
        "Campaigns": []
    },
    {
        "Name": "Wobbles",
        "Campaigns": []
    },
    {
        "Name": "Darribeth",
        "Campaigns": []
    },
    {
        "Name": "Lucian",
        "Campaigns": []
    },
    {
        "Name": "Esvele",
        "Campaigns": []
    },
    {
        "Name": "Felrax",
        "Campaigns": []
    },
    {
        "Name": "Frerk",
        "Campaigns": []
    },
    {
        "Name": "Yek",
        "Campaigns": []
    },
    {
        "Name": "Mattrim",
        "Campaigns": []
    },
    {
        "Name": "Rizzeryl",
        "Campaigns": []
    },
    {
        "Name": "Zilitsa",
        "Campaigns": []
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