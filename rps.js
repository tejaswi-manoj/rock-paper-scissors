
let humanScore = document.createElement("p");
humanScore = 0;

let compScore = document.createElement("p");
compScore = 0;

let humanChoice;
let rounds = 0;

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
    rounds+=1;

    if (compChoice==="scissors"){
        document.getElementById("humanRock").style.borderColor="green";
        document.getElementById("compScissors").style.borderColor="red";
        humanScore+=1;
    } else if (compChoice==="paper"){
        document.getElementById("humanRock").style.borderColor="red";
        document.getElementById("compPaper").style.borderColor="green";
        compScore+=1;
    } else {
        document.getElementById("humanRock").style.borderColor="blue";
        document.getElementById("compRock").style.borderColor="blue";
    }

    setTimeout(() => {document.querySelectorAll("img").forEach(img => img.style.borderColor = "black");
    }, 3000);

    displayScore();

    if (rounds===5){
        displayWinner();
    }
})

document.querySelector(".humanPaper").addEventListener("click", (e) => {

    const compChoice = getComputerChoice();
    rounds+=1;

    if (compChoice==="rock"){
        document.getElementById("humanPaper").style.borderColor="green";
        document.getElementById("compRock").style.borderColor="red";
        humanScore+=1;
    } else if (compChoice==="scissors"){
        document.getElementById("humanPaper").style.borderColor="red";
        document.getElementById("compScissors").style.borderColor="green";
        compScore+=1;
    } else {
        document.getElementById("humanPaper").style.borderColor="blue";
        document.getElementById("compPaper").style.borderColor="blue";
    }

    setTimeout(() => {document.querySelectorAll("img").forEach(img => img.style.borderColor = "black");
    }, 3000);

    displayScore();

    if (rounds===5){
        displayWinner();
    }

})

document.querySelector(".humanScissors").addEventListener("click", (e) => {

    const compChoice = getComputerChoice();
    rounds+=1;

    if (compChoice==="paper"){
        document.getElementById("humanScissors").style.borderColor="green";
        document.getElementById("compPaper").style.borderColor="red";
        humanScore+=1;
    } else if (compChoice==="rock"){
        document.getElementById("humanScissors").style.borderColor="red";
        document.getElementById("compRock").style.borderColor="green";
        compScore+=1;
    } else {
        document.getElementById("humanScissors").style.borderColor="blue";
        document.getElementById("compScissors").style.borderColor="blue";
    }

    setTimeout(() => {document.querySelectorAll("img").forEach(img => img.style.borderColor = "black");
    }, 3000);

    displayScore();

    if (rounds===5){
        displayWinner();
    }

})

function getComputerChoice(){
    const ranInd = Math.floor(Math.random()*choices.length);
    return choices[ranInd];
}

function displayScore(){
    document.getElementById("hScore").textContent = humanScore;
    document.getElementById("cScore").textContent = compScore;
}
