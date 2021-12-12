let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9);
};

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  if (humanGuess < 0 || humanGuess > 9) {
    alert('Out of range');
    return;
  }

  let humanGuessFactor = getAbsoluteDistance(secretTarget - humanGuess);
  let computerGuessFactor = getAbsoluteDistance(secretTarget - computerGuess);
  if (humanGuessFactor === computerGuessFactor) {
    console.log(`Tie, humanGuess = ${humanGuess}, computerGuess = ${computerGuess}, secretTarget = ${secretTarget}`);
    return true;
  } else if (humanGuessFactor < computerGuessFactor) {
    console.log(`Human win, humanGuess = ${humanGuess}, computerGuess = ${computerGuess}, secretTarget = ${secretTarget}`);
    return true;
  } else {
    console.log(`Computer win, humanGuess = ${humanGuess}, computerGuess = ${computerGuess}, secretTarget = ${secretTarget}`);
    return false;
  }
};

const getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1, num2);
};

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
};

const advanceRound = () => currentRoundNumber++;