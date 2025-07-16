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

}

humanScore = 0
computerScore = 0

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);