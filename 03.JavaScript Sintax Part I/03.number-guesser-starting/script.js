let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//returns a random integer between 0 and 9
const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (targetNumber, guessNumber) =>
  Math.abs(targetNumber - guessNumber);

const compareGuesses = (userGuess, computerGuess, secretTargetNum) => {
  if (!(userGuess >= 0 && userGuess <= 9)) {
    alert("number has to be between 0 and 9");
    return false;
  } else {
    const userDifference = getAbsoluteDistance(secretTargetNum, userGuess);
    const computerDifference = getAbsoluteDistance(
      secretTargetNum,
      computerGuess
    );
    /*
  if (userDifference <= computerDifference)
    return true;
  else
    return false;
    */
    return userDifference <= computerDifference;
  }
};

const updateScore = (winner) => {
  if (winner === "human") humanScore++;
  else if (winner === "computer") computerScore++;
};

const advanceRound = () => currentRoundNumber++;
