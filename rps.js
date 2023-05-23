//Define global variables
let playerSelection;
let computerSelection;
let playerPoints;
let computerPoints;
let gameExit = false;

getComputerChoice();
//computerSelection = "scissors";
getPlayerChoice();
if (!gameExit) {
    playRound(playerSelection, computerSelection);
}

function playRound(playerSelection, computerSelection) {
    //Capitalize the first word
    let selectionCapitalized = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    if (playerSelection === computerSelection) {
        //Tie!
        console.log(`It's a tie! ${selectionCapitalized} and ${computerSelection} don't beat each other.`);
        return null;
    }
    else if (playerSelection === "rock") {
        //If computer chose scissors, player wins
        if (computerSelection === "scissors") {
            console.log(`You win this round! ${selectionCapitalized} beats ${computerSelection}.`);
            return true;
        }
        //If computer chose paper, player loses
        else {
            return false;
        }
    }
    else if (playerSelection === "paper") {
        //If computer chose rock, player wins
        if (computerSelection === "rock") {
            return true;
        }
        //If computer chose scissors, player loses
        else {
            return false;
        }
    }
    //If player chose scissors
    else {
        //If computer chose paper, player wins
        if (computerSelection === "paper") {
            return true;
        }
        //If computer chose rock, player loses
        else {
            return false;
        }
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
    //If player presses cancel and string is null or string is empty
    if(query == null || query === "") {
        console.log("You pressed cancel or entered an empty string.");
        //Stop game at this point too
        gameExit = true;
    }
    else {
        playerSelection = query.toLowerCase();
        //Check if player input is valid.
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
            gameExit = false;
        }
        //If player enters something other than rock, paper, or scissors
        else {
            console.log("You entered a choice other than rock, paper, or scissors.");
            //Stop game at this point too
            gameExit = true;
        }
    }
}