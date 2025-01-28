function getComputerChoice() {
    let random = Math.random();
    return random <= 0.33 ? choice = "rock"
    : random > 0.33 && random <= 0.66 ? choice = "paper"
    : choice = "scissors";
}

function getHumanChoice() {
    let choice = prompt("What would you like to play");
    choice.toLowerCase();
    if (choice  == "rock" || choice == "paper" || choice == "scissors"){
        console.log(`You are playing ${choice}. Good Luck!`);
        return choice;
    } else {
        console.log('Invalid choice, please input one of the following: rock, paper, scissors');
        return;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice,computerChoice){
   switch (humanChoice){
    case "rock": 
        if(computerChoice == "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        } else if (computerChoice == "paper"){
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } else console.log("Tie");
    case "paper": 
        if(computerChoice == "scissors") {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        } else if (computerChoice == "rock"){
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else console.log("Tie");
    case "scissors": 
        if(computerChoice == "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        } else if (computerChoice == "rock"){
            console.log("You lose! Rock beats scissors");
            computerScore++;
        } else console.log("Tie");
   }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();