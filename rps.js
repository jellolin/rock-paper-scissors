//Define global variables
let playerSelection;
let computerSelection;
let playerPoints;
let computerPoints;

getComputerChoice();
getPlayerChoice();

//Randomly choose between rock, paper, and scissors for computer selection
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    console.log(choice);
    if (choice === 1) {
        computerSelection = "rock";
    }
    else if (choice === 2) {
        computerSelection = "paper";
    }
    else
    computerSelection = "scissors";
}

//Get player choice with prompt, convert it to lowercase, and store it in playerSelection 
function getPlayerChoice() {
    let query = prompt("Rock, paper, or scissors?", "rock");
    playerSelection = query.toLowerCase();
}