function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];

  return randomChoice.toString();
}

function playRound(playerSelection, computerSelection) {
  if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "paper"
  ) {
    computerScore += 1;
    return "You lose! Paper beats rock!";
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "scissors"
  ) {
    computerScore += 1;
    return "You lose! Scissors beats paper!";
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection.toLowerCase() == "rock"
  ) {
    computerScore += 1;
    return "You lose! Rock beats scissors!";
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection.toLowerCase() == "scissors"
  ) {
    playerScore += 1;
    return "You win! Rock beats scissors!";
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection.toLowerCase() == "rock"
  ) {
    playerScore += 1;
    return "You win! Paper beats rock!";
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection.toLowerCase() == "paper"
  ) {
    playerScore += 1;
    return "You win! Scissors beats paper!";
  } else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    return "Tie!";
  } else if (
    playerSelection.toLowerCase != "rock" ||
    playerSelection.toLowerCase != "paper" ||
    playerSelection.toLowerCase != "scissors"
  ) {
    return "Undefined player input!";
  }
}

let computerScore = 0;
let playerScore = 0;
let roundCount = 1;


const buttons = document.querySelectorAll("button");

const computerElement = document.getElementById("computerScore");

const playerElement = document.getElementById("playerScore");

const roundElement = document.getElementById("round");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let playerSelection = button.value;
    console.log(playerSelection)
    let computerSelection = getComputerChoice();
    roundCount +=1;
    playRound(playerSelection, computerSelection);
    if (roundCount === 6) {
        proclaimWinner();
    } 

    roundElement.innerHTML = roundCount;
    computerElement.innerHTML = computerScore;
    playerElement.innerHTML = playerScore;
  });
});

const winner = document.getElementById("winner");


function proclaimWinner() {
    if (playerScore > computerScore) {
        winner.textContent = "Player wins";
        console.log("Player wins");
      } else if (computerScore > playerScore) {
        winner.textContent = "Computer wins";
        console.log("Computer wins!");
      } else winner.textContent = "Tie game";
      console.log("Tie game!");
      playerScore = 0;
      computerScore = 0;
      roundCount =1;
}

function game() {
  /*  console.log(playRound(playerSelection,computerSelection));
    console.log("Player score: "+playerScore);
    console.log("Computer score: "+computerScore);
    playerSelection = prompt();
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection,computerSelection));
    console.log("Player score: "+playerScore);
    console.log("Computer score: "+computerScore);
    playerSelection = prompt();
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection,computerSelection));
    console.log("Player score: "+playerScore);
    console.log("Computer score: "+computerScore);
    playerSelection = prompt();
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection,computerSelection));
    console.log("Player score: "+playerScore);
    console.log("Computer score: "+computerScore);
    playerSelection = prompt();
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection,computerSelection));
    console.log("Player score: "+playerScore);
    console.log("Computer score: "+computerScore);
 */
}

game();
