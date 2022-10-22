const cosCharacters = [
    "Krue",
    "Skoll",
    "Nia",
    "Ezmerelda", 
    "Ireena", 
    "Yesper", 
    "Rictavio", 
    "The Abbot (Jude Law)",
    "Baron Vallakovich",
    "Blinksy",
    "Christopher", 
    "Exethanter", 
    "Godfrey",
    "Ismark",
    "Mordenkainen",
    "Neferon",
    "Pidlwick",
    "Rahadin",
    "Strahd",
    "Victor"
];

const dhCharacters = [
    "Ruik",
    "Briar",
    "Evie",
    "Avi",
    "Babolax",
    "Yurk",
    "Davil",
    "Embric",
    "Emmek",
    "Floon",
    "Jorn",
    "Hrangor",
    "Lif",
    "Nim",
    "Otis",
    "Renaer",
    "Tashlyn",
    "Trench",
    "Vajra",
    "Volo",
    "Yagra"
];

const orreryCharacters = [
    "Andros",
    "Dyre",
    "Kitty", 
    "Brawn",
    "Ecstasy", 
    "Frahl",
    "Gildha",
    "Gorkoh",
    "Grunka",
    "Guthildi",
    "Jutt",
    "Meff",
    "Lottie",
    "Omin",
    "Patsky", 
    "Sildar",
    "Talanatha",
    "Thetsis",
    "Wizzy",
    "Wester",
    "Tordit"
]

const witchlightCharacters = [
    "Amidor",
    "Bavlorna Blightstraw", 
    "Bloody Toes", 
    "Candlefoot", 
    "Charm", 
    "Clapperclaw",
    "Dumphrey Frogart",
    "Elidon",
    "Elkhorn",
    "Endelyn Moongrave",
    "Ewyn",
    "Gleam",
    "Glister",
    "Feenia",
    "Hati",
    "Jingle Jangle",
    "Jord",
    "Juniper",
    "Lamorna",
    "Molliver",
    "Mr. Light",
    "Mr. Witch",
    "Pollenella",
    "Selise",
    "Skabatha Nightshade",
    "Sir Talavar",
    "Thaco",
    "Tsu",
    "Will of the Feywild",
    "Zybilna"
]

const strixhavenY1Characters = [
    "Casavel",
    "Zaria",
    "Crypta",
    "Silver",
    "Abel",
    "Aurora",
    "Cadoras",
    "Nassari",
    "Tullus",
    "Drazhomir",
    "Dusty", 
    "Prismari",
    "Genevayne",
    "Glitter Dew",
    "Grayson",
    "Ivan",
    "Javenesh",
    "Larine",
    "Melwythorne",
    "Mina",
    "Nora",
    "Pewter",
    "Brenneth",
    "Lang",
    "Ruxa",
    "Prydevere",
    "Quentillius",
    "Rampart",
    "Roberta",
    "Roneca",
    "Rosie",
    "Rubina",
    "Ruslana",
    "Shuvadri",
    "Tilana",
    "Urzmaktok",
    "Vel",
    "Velastrias",
    "Whippoorwill",
    "Zanther"
]

var allCharacters = cosCharacters.concat(dhCharacters, orreryCharacters, witchlightCharacters, strixhavenY1Characters); 

// get elements 
var beginButton = document.querySelector("#begin-button"); 
var characterSection = document.querySelector("character-generation");
var characterText = document.querySelector("#character"); 
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
    characterText.textContent = allCharacters[Math.floor(Math.random()*allCharacters.length)];
}); 
