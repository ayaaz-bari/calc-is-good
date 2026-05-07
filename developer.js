function play(playerChoice) {
let computerResult = document.getElementById("computerResult")
let playerResult = document.getElementById("playerResult")
let result = document.getElementById("result")
let choices = ["rock", "paper", "scissors"]
let computerChoice = choices[Math.floor(Math.random() * 3)]

if (playerChoice == computerChoice) {
    playerResult.innerHTML = `Player choice is: ${playerChoice}`;
    computerResult.innerHTML = `Computer choice is: ${computerChoice}`;
    result.innerHTML = "Its a Tie!";
} else if (
(playerChoice == "rock" && computerChoice == "scissors") ||
(playerChoice == "paper" && computerChoice == "rock") ||
(playerChoice == "scissors" && computerChoice == "paper")
) {
    playerResult.innerHTML = `Player choice is: ${playerChoice}`
    computerResult.innerHTML = `Computer choice is: ${computerChoice}`
    result.innerHTML = "You win!"
}
else{
    playerResult.innerHTML = `Player choice is: ${playerChoice}`
    computerResult.innerHTML = `Computer choice is: ${computerChoice}`
    result.innerHTML = "Computer wins!" 
}
}