// STEP 1: Get the computer choice

// Get a random number between 0 and 1. 
// Multiply that number with 3, which is the number of choices in this case. Thus, there are 3 possibilities - 0, 1, or 2
// 0 --> return "rock", 1 --> return "paper", 2 --> return "scissors"


function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"]
    const ranInd = Math.floor(Math.random()*choices.length);
    return choices[ranInd];
}

console.log(getComputerChoice());