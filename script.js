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

function round(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection == "rock" && computerSelection == "paper") {
        return -1;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return 1;
    } else if(playerSelection == "paper" && computerSelection == "scissors") {
        return -1;
    } else if(playerSelection == "paper" && computerSelection == "rock") {
        return 1;
    } else if(playerSelection == "scissors" && computerSelection == "rock") {
        return -1;
    } else if(playerSelection === computerSelection) {
        return 0;
    } else {
        return 1;
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

game();