let humanScore = 0;
let computerScore = 0;

let score = document.createElement("p");
let scoreNode = document.createTextNode(`Human Score = ${humanScore} Computer Score = ${computerScore}`);
score.appendChild(scoreNode);

let roundResult = document.createElement("p");
let roundNode = document.createTextNode("");
roundResult.appendChild(roundNode);

let endResult = document.createElement("p");
let endNode = document.createTextNode("");
endResult.appendChild(endNode);

let div = document.getElementById("results");
div.appendChild(score);
div.appendChild(roundResult);
div.appendChild(endResult);

/*function to get computer's choice*/
function getComputerChoice(){
    var x = Math.floor(Math.random() * 3);

    if (x === 2){
        return "rock";
    }
    else if (x === 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}

/*function to play a single round, return the result, and increment the winner's score*/
function playRound(humanChoice, computerChoice){    
    if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        scoreNode.textContent = `Human Score = ${humanScore} Computer Score = ${computerScore}`;
        roundNode.textContent = "You win! Rock beats Scissors!";
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        scoreNode.textContent = `Human Score = ${humanScore} Computer Score = ${computerScore}`;
        roundNode.textContent = "You win! Paper beats Rock!";
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        scoreNode.textContent = `Human Score = ${humanScore} Computer Score = ${computerScore}`;
        roundNode.textContent = "You win! Scissors beats Paper!";
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        scoreNode.textContent = `Human Score = ${humanScore} Computer Score = ${computerScore}`;
        roundNode.textContent = "You lose! Paper beats Rock!";
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        scoreNode.textContent = `Human Score = ${humanScore} Computer Score = ${computerScore}`;
        roundNode.textContent = "You lose! Scissors beats Paper!";
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        scoreNode.textContent = `Human Score = ${humanScore} Computer Score = ${computerScore}`;
        roundNode.textContent = "You lose! Rock beats Scissors!";
    }
    else {
        roundNode.textContent = "It's a tie!";
    }
        
    }
/*Plays a round using the button clicked and displays current score */
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());

        if (humanScore >= 5){
            endNode.textContent = "Human Wins!"
        }
        else if (computerScore >=5){
            endNode.textContent = "Computer Wins!"
        }
     });
 });
/*displays the winner of the playGame function
    if (humanScore > computerScore){
        console.log("You Win! Your score was " + humanScore + "! The computer's score was " + computerScore + ".")
    }
    else if (humanScore < computerScore) {
        console.log("You Lose! Your score was " + humanScore + "! The computer's score was " + computerScore + ".")
    }
    else {
        console.log("You Tied! Your score was " + humanScore + "! The computer's score was " + computerScore + ".")
    }

}*/


