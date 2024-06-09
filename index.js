const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDiplay = document.getElementById("computerDiplay");
const resultDisplay = document.getElementById("playerDisplay");

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case 'rock':
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case 'paper':
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case 'scissors':
                    result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                    break; 
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDiplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
}