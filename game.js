let playerScore = 0;
let compScore = 0;

const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * arrOfChoices.length);
    return arrOfChoices[randomNum];
    
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return `You Tied! You both picked ${playerSelection}`;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++;
        return 'You lost! Rock Crushes Scissors';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return 'You Won! Scissors Cuts paper';
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++;
        return 'You lost! Paper Covers Rock';
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return 'You won! Rock crushes scissors';
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++;
        return 'You Lost! Scissors Cuts Paper';
    } 
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return 'You Won! Paper Covers Rock';
    }
} 

const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose your throw', 'rock, paper, scissors').toLowerCase() 
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }

    if (playerScore > compScore) {
        return 'You beat the computer! You are a genius';
    }
    else if (playerScore < compScore) {
        return 'You got beat by the computer! Practice More';
    } 
    else {
        return 'You tied with the computer! Not too shabby';
    }
}

console.log(game());