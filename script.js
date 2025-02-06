/*Create Buttons for Game*/

        let container = document.createElement("div");
        document.body.appendChild(container);

        let rockButton = document.createElement("button");
        rockButton.textContent = "Rock";
        container.appendChild(rockButton);
        let paperButton = document.createElement("button");
        paperButton.textContent = "Paper";
        container.appendChild(paperButton);
        let scissorsButton = document.createElement("button");
        scissorsButton.textContent = "Scissors";
        container.appendChild(scissorsButton);

        rockButton.addEventListener("click", () => humanChoice = "rock");
        paperButton.addEventListener("click", () => humanChoice = "paper");
        scissorsButton.addEventListener("click", () => humanChoice = "scissors");

        container.addEventListener('click',(event) => playRound(humanChoice));

        const winners = document.createElement("div");
        const body = document.querySelector("body");
        body.appendChild(winners);
        let computerScore = 0;
        let humanScore = 0;
        let humanChoice = '';
        initFlag = false;

function getComputerChoice() {
    let random = Math.random();
    return random <= 0.33 ? "rock"
    : random > 0.33 && random <= 0.66 ? "paper"
    : "scissors";
}




function playRound (humanChoice){
    let roundWinner = '';
    let computerChoice = getComputerChoice();
    let string = document.createElement("div");
   switch (humanChoice){
    case "rock": 
        if(computerChoice == "scissors") {
            string.textContent = "You win! Rock beats Scissors";
            roundWinner = "human"
        } else if (computerChoice == "paper"){
            string.textContent = "You lose! Paper beats Rock";
            roundWinner = "computer";
        } else {
            string.textContent = "Tie";
            roundWinner = "tie";
        }
        break;
    case "paper": 
        if(computerChoice == "scissors") {
            string.textContent = "You lose! Scissors beats Paper";
            roundWinner = "computer";
        } else if (computerChoice == "rock"){
            string.textContent = "You win! Paper beats Rock";
            roundWinner = "human";
        } else {
            string.textContent = "Tie";
            roundWinner = "tie";
        }
        break;
    case "scissors": 
        if(computerChoice == "paper") {
            string.textContent = "You win! Scissors beats Paper";
            roundWinner = "human";
        } else if (computerChoice == "rock"){
            string.textContent = "You lose! Rock beats scissors";
            roundWinner = "computer";
        } else {
            string.textContent = "Tie";
            roundWinner = "tie";
        }

    default: break;
   }
   winners.appendChild(string);
   if (roundWinner ==  "human") humanScore++;
   else if (roundWinner == "computer") computerScore++;
   
   if(computerScore == 5 || humanScore == 5){
    body.removeChild(winners);
    if (computerScore > humanScore){
        container.textContent = "Computer Wins";
    } else {
        container.textContent = "Human Wins";
    }
    humanScore = 0;
    computerScore = 0;
   }
}




