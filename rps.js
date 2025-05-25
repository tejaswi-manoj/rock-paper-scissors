// STEP 1: Get the computer choice

// Get a random number between 0 and 1. 
// Multiply that number with 3, which is the number of choices in this case. Thus, there are 3 possibilities - 0, 1, or 2
// 0 --> return "rock", 1 --> return "paper", 2 --> return "scissors"

const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const ranInd = Math.floor(Math.random()*choices.length);
    return choices[ranInd];
}

// STEP 2: Get the human choice
// Get the input from the human - this will be typed in.

function getHumanChoice(){
    hChoice = prompt("What is your choice - Rock, Paper, or Scissors?")
    return hChoice;
}

let humanScore = 0;
let computerScore = 0;

// STEP 3: Play the round

// If human plays rock and computer plays scissors, human wins
// If human plays rock and computer plays paper, human loses
// If human plays scissors and computer plays paper, human wins
// If human plays scissors and computer plays rock, human loses
// If human plays paper and computer plays rock, human wins
// If human plays paper and computer plays scissors, human loses


function playRound(humanChoice, computerChoice){

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice==="rock" && computerChoice==="scissors"){
        alert("You win! Rock beats Scissors.");
        humanScore+=1;
    }
    else if (humanChoice==="rock" && computerChoice==="paper"){
        alert("You lose! Paper beats Rock.");
        computerScore+=1;
    }
    else if (humanChoice==="scissors" && computerChoice==="paper"){
        alert("You win! Scissors beat Paper.");
        humanScore+=1;
    }
    else if (humanChoice==="scissors" && computerChoice==="rock"){
        alert("You lose! Rock beats Scissors.");
        computerScore+=1;
    }
    else if (humanChoice==="paper" && computerChoice==="rock"){
        alert("You win! Paper beats Rock.");
        humanScore+=1;
    }
    else if (humanChoice==="paper" && computerChoice==="scissors"){
        alert("You lose! Scissors beat Paper.");
        computerScore+=1;
    }
    else if (humanChoice===computerChoice){
        alert("It's a tie!")
    }

}

function playGame(){

    for (let i=0;i<5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

playGame();



