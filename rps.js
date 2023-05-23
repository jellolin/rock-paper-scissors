//Define global variables
let playerSelection;
let computerSelection;
let playerPoints;
let computerPoints;

getComputerChoice();
getPlayerChoice();
playRound(playerSelection, computerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        //Tie! Capitalize the first word
        let selectionCapitalized = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        console.log(`It's a tie! ${selectionCapitalized} and ${computerSelection} don't beat each other.`);
    }
}

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
    //If player presses cancel and string is null
    if(query == null) {
        console.log("You pressed cancel.");
        //Maybe stop game at this point too
    }
    else {
        playerSelection = query.toLowerCase();
        //If player enters something other than rock, paper, or scissors
        if (query != "rock" || query != "paper" || query != "scissors") {
            console.log("You entered a choice other than rock, paper, or scissors.");
            //Maybe stop game at this point too
        }
    }
}