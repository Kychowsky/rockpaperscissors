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



function playRound (humanChoice,computerChoice){
   switch (humanChoice){
    case "rock": 
        if(computerChoice == "scissors") {
            console.log("You win! Rock beats Scissors");
            return "human";
        } else if (computerChoice == "paper"){
            console.log("You lose! Paper beats Rock");
            return "computer";
        } else {
            console.log("Tie");
            return "tie";
        }
        break;
    case "paper": 
        if(computerChoice == "scissors") {
            console.log("You lose! Scissors beats Paper");
            return "computer";
        } else if (computerChoice == "rock"){
            console.log("You win! Paper beats Rock");
            return "human";
        } else {
            console.log("Tie");
            return "tie";
        }
        break;
    case "scissors": 
        if(computerChoice == "paper") {
            console.log("You win! Scissors beats Paper");
            return "human";
        } else if (computerChoice == "rock"){
            console.log("You lose! Rock beats scissors");
            return "computer";
        } else {
            console.log("Tie");
            return "tie";
        }
        break;
    default: break;
   }

}


function playGame (rounds = 5) {
    let humanScore = 0;
    let computerScore = 0;
    for (i = 1; i <= 5; i++){
        let winner = playRound(getHumanChoice(),getComputerChoice());
        if (winner == "human")
            humanScore++;
        else if (winner == "computer")
            computerScore++;
        else i--;
        console.log(`Human has ${humanScore}, Computer has ${computerScore}`);
    }
    if (humanScore > computerScore) {
        console.log(`You win the game!`);
    } else if (computerScore > humanScore){
        console.log(`You lose the loser!`);
    } else console.log(`Tie Game!`);
}