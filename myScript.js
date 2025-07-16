function getComputerChoice() {
    random = Math.floor(Math.random() * 3)
    let value;
    if (random == 0) {
        value = "rock"
    }
    else if (random == 1) {
        value = "paper"
    }
    else {
        value = "scissors"
    }
    return value;
}

function getHumanChoice() {
    let choice;
    while (true) {
        console.log("0 = rock\n1 = paper\n2 = scissors")
        choice = prompt();
        if (choice === "0") {
            return "rock";
        }
        else if (choice === "1") {
            return "paper";
        }
        else if (choice === "2") {
            return "scissors";
        }
        else {
            console.log("Invalid Input");
        }
    }
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "rock") && (computerChoice == "scissors")) {
        humanScore++;
        console.log("You Win! Rock beats Scissors.")
    }
    else if ((humanChoice == "rock") && (computerChoice == "paper")) {
        computerScore++;
        console.log("You Lose! Paper beats Rock.")
    }
    else if ((humanChoice == "scissors") && (computerChoice == "paper")) {
        humanScore++;
        console.log("You Win! Scissors beats Paper.")
    }
    else if ((humanChoice == "scissors") && (computerChoice == "rock")) {
        computerScore++;
        console.log("You Lose! Rock beats Scissors.")
    }
    else if ((humanChoice == "paper") && (computerChoice == "scissors")) {
        computerScore++;
        console.log("You Lose! Scissors beats Paper.")
    }
    else if ((humanChoice == "paper") && (computerChoice == "rock")) {
        humanScore++;
        console.log("You Win! Paper beats Rock.")
    }
    else {
        console.log("It's a Draw!")
    }
}

function playGame() {
    round = 0
    while (round < 5) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Game state: " + humanScore + ":" + computerScore)
        round++;
    }
    if (humanScore > computerScore) {
        console.log("You Win! Final Score: " + humanScore + ":" + computerScore)
    }
    else if (humanScore < computerScore) {
        console.log("You Lose! Final Score: " + humanScore + ":" + computerScore)
    }
    else { console.log("It's a Draw! Final Score: " + humanScore + ":" + computerScore) }
}

humanScore = 0
computerScore = 0

playGame()