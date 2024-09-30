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

function getHumanChoice(){
    let choice = prompt().toLowerCase();
    
    return choice
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){    
        if (humanChoice === "rock" && computerChoice === "scissors"){
            humanScore++;
            console.log("You win! Rock beats Scissors!");
        }
        else if (humanChoice === "paper" && computerChoice === "rock"){
            humanScore++;
            console.log("You win! Paper beats Rock!");
        }
        else if (humanChoice === "scissors" && computerChoice === "paper"){
            humanScore++;
            console.log("You win! Scissors beats Paper!");
        }
        else if (humanChoice === "rock" && computerChoice === "paper"){
            computerScore++;
            console.log("You lose! Paper beats Rock!");
        }
        else if (humanChoice === "paper" && computerChoice === "scissors"){
            computerScore++;
            console.log("You lose! Scissors beats Paper!");
        }
        else if (humanChoice === "scissors" && computerChoice === "rock"){
            computerScore++;
            console.log("You lose! Rock beats Scissors!");
        }
        else {
            console.log("It's a tie!");
        }
        
    }

    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())

    if (humanScore > computerScore){
        console.log("You Win! Your score was " + humanScore + "! The computer's score was " + computerScore + ".")
    }
    else if (humanScore < computerScore) {
        console.log("You Lose! Your score was " + humanScore + "! The computer's score was " + computerScore + ".")
    }
    else {
        console.log("You Tied! Your score was " + humanScore + "! The computer's score was " + computerScore + ".")
    }

}

playGame()


