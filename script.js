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
    "Cumpen",
    "Davil",
    "Embric",
    "Emmek",
    "Floon"
];
var cosCharacter = cosCharacters[Math.floor(Math.random()*cosCharacters.length)]; 

console.log(cosCharacter); 

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
    characterText.textContent = cosCharacters[Math.floor(Math.random()*cosCharacters.length)];
}); 
