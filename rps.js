
let humanScore = 0;
let computerScore = 0;
let humanChoice;

const choices = ["rock", "paper", "scissors"];

const humanIcons = document.querySelector(".humanIcons");
// const humanRock = document.querySelector(".humanRock");
// const humanPaper = document.querySelector(".humanPaper");
// const humanScissors = document.querySelector(".humanScissors");


humanRock.addEventListener("click", humanPlaysRock);
humanPaper.addEventListener("click", humanPlaysPaper);
humanScissors.addEventListener("click", humanPlaysScissors);

function humanPlaysRock(){
    humanChoice = "rock";
    return humanChoice;
}

function humanPlaysPaper(){
    humanChoice = "paper";
    return humanChoice;
}
function humanPlaysScissors(){
    humanChoice = "scissors";
    return humanChoice;
}

function getComputerChoice(){
    const ranInd = Math.floor(Math.random()*choices.length);
    return choices[ranInd];
}

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
        alert("It's a tie!");
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



