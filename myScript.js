function getComputerChoice() {
    random = Math.floor(Math.random() * 3)
    value = "";
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
    console.log("0 = rock\n1 = paper\n2 = scissors")
    choice = prompt()
    console.log(choice)
    if (choice == "0") {
        choice = "rock"
    }
    else if (choice == "1") {
        choice = "paper"
    }
    else if (choice == "2") {
        choice = "scissors"
    }
    else {
        console.log("Invalit input")
    }
    return choice;
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

humanScore = 0
computerScore = 0

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);