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

console.log(getComputerChoice())