let playerScore = 0;
let compScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const container = document.querySelector('.container');
const outcome = document.querySelector('.outcome');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');



const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * arrOfChoices.length);
    return arrOfChoices[randomNum];
    
}

const playRound = (playerSelection, computerSelection) => {
    //const outcome = document.createElement('div');
    outcome.classList.add('outcome-div');

    //container.append(outcome)


    if (playerSelection === computerSelection) {
        const p = document.createElement('p');
        p.textContent = `You Tied! You both picked ${playerSelection}`;
        outcome.appendChild(p);
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++;
        const p = document.createElement('p');
        p.textContent = 'You lost! Rock Crushes Scissors';
        outcome.appendChild(p);
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        const p = document.createElement('p');
        p.textContent = 'You Won! Scissors Cuts paper';
        outcome.appendChild(p);
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++;
        const p = document.createElement('p');
        p.textContent = 'You lost! Paper Covers Rock';
        outcome.appendChild(p);
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        const p = document.createElement('p');
        p.textContent = 'You won! Rock crushes scissors';
        outcome.appendChild(p);
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++;
        const p = document.createElement('p');
        p.textContent = 'You Lost! Scissors Cuts Paper';
        outcome.appendChild(p);
    } 
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        const p = document.createElement('p');
        p.textContent = 'You Won! Paper Covers Rock';
        outcome.appendChild(p);
    }
} 

const checkForWinner = (playerScore, compScore) => {
    if (playerScore === 5) {
        const h2 = document.createElement('h2');
        h2.classList.add('player-won')
        h2.innerText = `You won ${playerScore} to ${compScore}, great job beating the computer`;
        outcome.append(h2);
    }

    if (compScore === 5) {
        const h2 = document.createElement('h2');
        h2.classList.add('computer-won')
        h2.innerText = `You lost ${playerScore} to ${compScore}, the computer beat you.`;
        outcome.append(h2);
    }
}

const updateScores = (playerScore, compScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}`;
    computerScoreSpan.innerText = `Computer Score: ${compScore}`;
}

rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, compScore);
    checkForWinner(playerScore, compScore);
})

paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, compScore);
    checkForWinner(playerScore, compScore);
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, compScore);
    checkForWinner(playerScore, compScore);
})

