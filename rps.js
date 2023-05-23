//Define global variables
let playerSelection;
let computerSelection;
let playerPoints;
let computerPoints;

getComputerChoice();

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