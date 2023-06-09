const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector(".result");
const result1 = document.querySelector(".result1");

function getComputerChoice() {
    let random = Math.floor(Math.random()*3);
    if(random == 0) {
        return "Rock";
    } else if (random == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

let playerScore = 0;
let computerScore = 0;
function round(playerSelection, computerSelection) {
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        result.textContent = `You loose! Paper beats Rock`;
        result1.textContent = `Player Score: ${playerScore} ComputerScore: ${computerScore}`;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        result.textContent = `You Win! Rock beats scissors`;
        result1.textContent = `Player Score: ${playerScore} ComputerScore: ${computerScore}`;
    } else if(playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        result.textContent = `You loose! Scissors beats Paper`;
        result1.textContent = `Player Score: ${playerScore} ComputerScore: ${computerScore}`;
    } else if(playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        result.textContent = `You Win! Paper beats Rock`;
        result1.textContent = `Player Score: ${playerScore} ComputerScore: ${computerScore}`;
    } else if(playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        result.textContent = `You loose! Rock beats Scissors`;
        result1.textContent = `Player Score: ${playerScore} ComputerScore: ${computerScore}`;
    } else if(playerSelection === computerSelection) {
        result.textContent = `It's a tie!`;
        result1.textContent = `Player Score: ${playerScore} ComputerScore: ${computerScore}`;
    } else {
        playerScore++;
        result.textContent = `You Win! Scissors beats Paper`;
        result1.textContent = `Player Score: ${playerScore} ComputerScore: ${computerScore}`;
    }
    if(playerScore === 5 || computerScore === 5) {
        if(playerScore > computerScore) {
            result.textContent = "";
            result1.textContent = "Player Wins";
        }
        else {
            result.textContent = "";
            result1.textContent = "Computer Wins";
        }
        playerScore = 0;
        computerScore = 0;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result;
    while(playerScore < 5 && computerScore < 5) {
        let userChoice = prompt("Rock Paper or Scissors?");
        userChoice = userChoice.toLowerCase();
        userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
        let computerChoice = getComputerChoice();
        console.log(`computer selection: ${computerChoice}`);
        result = round(userChoice, computerChoice);
        if(result == 1) {
            console.log(`You Win! ${userChoice} beats ${computerChoice}`);
            playerScore++;
        } else if(result == -1) {
            console.log(`You loose ${computerChoice} beats ${userChoice}`);
            computerScore++;
        } else {
            console.log("It's a tie");
        }
    }
    if(playerScore > computerScore) {
        console.log(`You Win!\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`);
    } else {
        console.log(`You Loose!\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`);
    }
}


rock.addEventListener('click', function(e) {
    const computerChoice = getComputerChoice();
    console.log(`Computer choose: ${computerChoice}`);
    round("rock", computerChoice);
});
paper.addEventListener('click', function(e) {
    const computerChoice = getComputerChoice();
    console.log(`Computer choose: ${computerChoice}`);
    round("paper", computerChoice);
});
scissors.addEventListener('click', function(e) {
    const computerChoice = getComputerChoice();
    console.log(`Computer choose: ${computerChoice}`);
    round("scissors", computerChoice);
});