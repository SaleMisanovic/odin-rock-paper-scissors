function getComputerChoice() {
    const choices = ["rock","paper","scissors"]
    let randomChoice = choices[Math.floor(Math.random()*choices.length)]
    
    return randomChoice.toString();
}

getComputerChoice();

function playRound(playerSelection,computerSelection) {
    if (playerSelection.toLowerCase()=="rock" && computerSelection.toLowerCase() == "paper"){
        computerScore +=1;
        return "You lose! Paper beats rock!"
    }
    else if (playerSelection.toLowerCase()=="paper" && computerSelection.toLowerCase() == "scissors"){
        computerScore +=1;
        return "You lose! Scissors beats paper!"
    }
    else if (playerSelection.toLowerCase()=="scissors" && computerSelection.toLowerCase() == "rock"){
        computerScore +=1;
        return "You lose! Rock beats scissors!"
    }
    else if (playerSelection.toLowerCase()=="rock" && computerSelection.toLowerCase() == "scissors"){
        playerScore +=1;
        return "You win! Rock beats scissors!"
    }
    else if (playerSelection.toLowerCase()=="paper" && computerSelection.toLowerCase() == "rock"){
        playerScore +=1;
        return "You win! Paper beats rock!"
    }
    else if (playerSelection.toLowerCase()=="scissors" && computerSelection.toLowerCase() == "paper"){
        playerScore +=1;
        return "You win! Scissors beats paper!"
    }else if(playerSelection.toLowerCase()==computerSelection.toLowerCase()){
        return "Tie!"
    }else if(playerSelection.toLowerCase!="rock" || playerSelection.toLowerCase!="paper" || playerSelection.toLowerCase!="scissors"){
        return "Undefined player input!"
    }
}

let computerScore = 0;
let playerScore = 0;

let playerSelection = prompt();
let computerSelection = getComputerChoice();


function game() {

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
    playerSelection = prompt();
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection,computerSelection));
    console.log("Player score: "+playerScore);
    console.log("Computer score: "+computerScore);

    if (playerScore>computerScore) {
        console.log("Player wins")
    } else if(computerScore>playerScore){
        console.log("Computer wins!")
    }else console.log("Tie game!")
}

game();