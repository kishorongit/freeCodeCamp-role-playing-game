// Initialize variables
let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

//DOM Manipulation for interactivity

// Initialize DOM elements
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

// Initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// Go to store
function goStore() {
    // Update button text
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    
    // Update onclick method
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;

    text.innerText = "You enter the store."
}

// Go to cave
function goCave() {
    console.log("Going to cave.")
}

// Fight Dragon
function fightDragon() {
    console.log("Fighting dragon.");
}

// Buy health
function buyHealth() {
    console.log("Buying health.")
}
// Buy weapon
function buyWeapon() {
    console.log("Buying weapon.")
}

// Go to town square
function goTown() {
    console.log("Going to town square.")
}