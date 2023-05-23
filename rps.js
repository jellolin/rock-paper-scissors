//Define global variables
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let gameExit = false;

playGame();


function determineWinner(playerScore, computerScore) {
    if (playerScore === computerScore) {
        console.log("IT'S A TIE! Refresh to play again.");
    }
    else if (playerScore > computerScore) {
        console.log("THE PLAYER WINS! Refresh to play again.");
    }
    else {
        console.log("THE COMPUTER WINS! Refresh to try again.");
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        //If last round was invalid, do not proceed with new prompts
        if (!gameExit) {
            getComputerChoice();
            getPlayerChoice();
            //If conditions for string are valid, proceed with round
            if (!gameExit) {
                let areYouWinning = playRound(playerSelection, computerSelection);
                if (areYouWinning === null) {
                    //If tie, leave scores alone
                    console.log(`No one gets points.`);
                }
                else if (areYouWinning === true) {
                    //If player wins increase player score
                    console.log(`Player has ${++playerScore} points.`);
                    console.log(`Computer has ${computerScore} points.`);
                }
                else {
                    //If player loses increase computer score
                    console.log(`Player has ${playerScore} points.`);
                    console.log(`Computer has ${++computerScore} points.`);
                }
                console.log(`Round ${i+1} Completed.`);
            }
        }
        else console.log("Game Exited");
    }
    determineWinner(playerScore, computerScore);
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
            console.log(`You lose this round! ${selectionCapitalized} is weak against ${computerSelection}.`);
            return false;
        }
    }
    else if (playerSelection === "paper") {
        //If computer chose rock, player wins
        if (computerSelection === "rock") {
            console.log(`You win this round! ${selectionCapitalized} beats ${computerSelection}.`);
            return true;
        }
        //If computer chose scissors, player loses
        else {
            console.log(`You lose this round! ${selectionCapitalized} is weak against ${computerSelection}.`);
            return false;
        }
    }
    //If player chose scissors
    else {
        //If computer chose paper, player wins
        if (computerSelection === "paper") {
            console.log(`You win this round! ${selectionCapitalized} beats ${computerSelection}.`);
            return true;
        }
        //If computer chose rock, player loses
        else {
            console.log(`You lose this round! ${selectionCapitalized} is weak against ${computerSelection}.`);
            return false;
        }
    }

}

//Randomly choose between rock, paper, and scissors for computer selection
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    //console.log(choice);
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