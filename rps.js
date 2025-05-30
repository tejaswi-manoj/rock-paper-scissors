
let humanScore = 0;
let computerScore = 0;
let humanChoice;

const choices = ["rock", "paper", "scissors"];

const humanIcons = document.querySelector(".humanIcons");
const humanRock = document.querySelector(".humanRock");
const humanPaper = document.querySelector(".humanPaper");
const humanScissors = document.querySelector(".humanScissors");

const images = document.querySelectorAll("img");

// document.querySelector(".humanIcons").addEventListener("click", function win = (e) => {
//     e.target.classList.toggle("greenBorder");
// })

document.querySelector(".humanRock").addEventListener("click", (e) => {

    const compChoice = getComputerChoice();

    if (compChoice==="scissors"){
        document.getElementById("humanRock").style.borderColor="green";
        document.getElementById("compScissors").style.borderColor="red";
    } else if (compChoice==="paper"){
        document.getElementById("humanRock").style.borderColor="red";
        document.getElementById("compPaper").style.borderColor="green";
    } else {
        document.getElementById("humanRock").style.borderColor="blue";
        document.getElementById("compRock").style.borderColor="blue";
    }

    setTimeout(() => {document.querySelectorAll("img").forEach(img => img.style.borderColor = "black");
    }, 2000);

})

document.querySelector(".humanPaper").addEventListener("click", (e) => {

    const compChoice = getComputerChoice();

    if (compChoice==="rock"){
        document.getElementById("humanPaper").style.borderColor="green";
        document.getElementById("compRock").style.borderColor="red";
    } else if (compChoice==="scissors"){
        document.getElementById("humanPaper").style.borderColor="red";
        document.getElementById("compScissors").style.borderColor="green";
    } else {
        document.getElementById("humanPaper").style.borderColor="blue";
        document.getElementById("compPaper").style.borderColor="blue";
    }

    setTimeout(() => {document.querySelectorAll("img").forEach(img => img.style.borderColor = "black");
    }, 2000);

})

document.querySelector(".humanScissors").addEventListener("click", (e) => {

    const compChoice = getComputerChoice();

    if (compChoice==="paper"){
        document.getElementById("humanScissors").style.borderColor="green";
        document.getElementById("compPaper").style.borderColor="red";
    } else if (compChoice==="rock"){
        document.getElementById("humanScissors").style.borderColor="red";
        document.getElementById("compRock").style.borderColor="green";
    } else {
        document.getElementById("humanScissors").style.borderColor="blue";
        document.getElementById("compScissors").style.borderColor="blue";
    }

    setTimeout(() => {document.querySelectorAll("img").forEach(img => img.style.borderColor = "black");
    }, 2000);

})




// document.querySelector(".humanIcons").addEventListener("click", (e) => {
    
//     if (getComputedStyle(e.target).id==="")


//     document.getElementById("human").style.borderColor = "red";
//     setTimeout(()=>{
//         document.getElementById("human").style.borderColor = "black";
//     }, 1000)
// })

function getComputerChoice(){
    const ranInd = Math.floor(Math.random()*choices.length);
    return choices[ranInd];
}

// function playRound(humanChoice, computerChoice){

    
//     humanChoice = humanChoice.toLowerCase();

//     if (humanChoice==="rock" && computerChoice==="scissors"){
//         alert("You win! Rock beats Scissors.");
//         humanScore+=1;
//     }
//     else if (humanChoice==="rock" && computerChoice==="paper"){
//         alert("You lose! Paper beats Rock.");
//         computerScore+=1;
//     }
//     else if (humanChoice==="scissors" && computerChoice==="paper"){
//         alert("You win! Scissors beat Paper.");
//         humanScore+=1;
//     }
//     else if (humanChoice==="scissors" && computerChoice==="rock"){
//         alert("You lose! Rock beats Scissors.");
//         computerScore+=1;
//     }
//     else if (humanChoice==="paper" && computerChoice==="rock"){
//         alert("You win! Paper beats Rock.");
//         humanScore+=1;
//     }
//     else if (humanChoice==="paper" && computerChoice==="scissors"){
//         alert("You lose! Scissors beat Paper.");
//         computerScore+=1;
//     }
//     else if (humanChoice===computerChoice){
//         alert("It's a tie!");
//     }

// }

// function playGame(){

//     for (let i=0;i<5; i++){
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     }
// }

// playGame();



