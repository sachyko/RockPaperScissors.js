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
    console.log("Choose from rock, paper, scissors only");
  }
};

// getUserChoice("rock");
// console.log(getUserChoice("rock"));

// getUserChoice("sand");
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
};

// const computerChoice = getComputerChoice(2);
// console.log(computerChoice);

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie.";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "I'm sorry the computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "I'm sorry the computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "I'm sorry the computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "bomb") {
    return "Congratulations you won!";
  } else {
    return "Congratulations you won!";
  }
};

// const winner = determineWinner("paper", "scissors");
// console.log(winner);

const playGame = () => {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();
  console.log(`You choose ${userChoice}.`);
  console.log(`The computer chooses ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
