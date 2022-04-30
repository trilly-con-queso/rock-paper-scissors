/* function generates random number and uses it to print either rock/paper/scissors */
function computerPlay() {
    let randomNum = Math.random();
    if (randomNum < .3) {
        return 'Rock';
    } else if (randomNum >= .3 && randomNum < .6) {
        return 'Paper';
    } else return 'Scissors';
}

/* function opens a dialogue box which allows the player to choose ONLY paper/rock/scissors)
pushes back if player doesn't choose any of the above */
function playerPlay() {
    let choice = window.prompt('Choose Rock, Paper, or Scissors.',)
    while (choice === null) {
        choice = window.prompt('YOU MUST MAKE A DECISION');
    } choice = (choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase());
    while (choice !== 'Rock' && choice !== 'Paper' && choice !== 'Scissors') {
        choice = window.prompt("YOU MUST CHOOSE ROCK, PAPER, OR SCISSORS",);
        choice = (choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase());
    } choice = (choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase());
    return choice;
}



function playRound(playerPlay, computerPlay) {
    if (playerPlay == computerPlay) {
        return 'It\'s a tie :(. Sad noises.'
    } else if (playerPlay === 'Rock' && computerPlay === 'Paper') {
        return 'You lose! Paper beats Rock.';
    } else if (playerPlay === 'Paper' && computerPlay === 'Scissors') {
        return 'You lose! Scissors beats Paper.';
    } else if (playerPlay === 'Scissors' && computerPlay === 'Rock') {
        return 'You lose! Rock beats Scissors';
    } return 'WINNING!!!';
}


function game() {
    let playerCount = 0
    let computerCount = 0
    while ((playerCount + computerCount) < 5) {
        let computerChoice = computerPlay()
        let playerChoice = playerPlay()
        playRound(playerChoice, computerChoice);
        if (playRound(playerChoice, computerChoice).charAt(0) == 'I') {
            playerCount += 0;
        } else if (playRound(playerChoice, computerChoice).charAt(0) == 'Y') {
            computerCount++;
        } else
            playerCount++;
    } if (playerCount > computerCount) {
        console.log('You win!!! Congrats!')
    } else console.log('You lose :(. plChoicericeisrightfail')
}

game();

