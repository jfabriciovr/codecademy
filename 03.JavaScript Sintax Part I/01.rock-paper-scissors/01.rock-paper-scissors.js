// Make sure the user input is correct
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log('Please choose only between "rock", "paper" or "scissors"');
    return;
  }
};

// generate a random computer choice
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

// compare both choices to determine a winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "You chose the secret wepon! User won!";
  }

  if (userChoice === computerChoice) {
    return "It is a tie!";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won!";
    } else {
      return "User won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won!";
    } else {
      return "User won!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won!";
    } else {
      return "User won!";
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice("rock");
  //const userChoice = getUserChoice(prompt("Choose rock, paper, or scissors: "));

  if (!userChoice) return; // if user choice is undefined, don't proceed with the game
  const computerChoice = getComputerChoice();

  console.log("User: " + userChoice);
  console.log("Computer: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
