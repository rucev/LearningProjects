const saySomething = (message) => {
  console.log(message);
  alert(message);
};

const sayWelcome = () => {
  let userInput = prompt("Hello, what's your name?");
  if (userInput === null) {
    return;
  } else if (userInput !== "") {
    saySomething("Welcome, " + userInput + "!\nLet's play bingo!");
    return userInput;
  } else {
    alert("Please, enter a name.");
    sayWelcome();
  }
};

const printCard = (card) => {
  let printableCard = "";
  card.forEach((line) => {
    let printableLine = "\n";
    line.forEach((value) => {
      if (isNaN(value)) {
        printableLine += "|" + value + "|";
      } else {
        printableLine += "|" + value.toString().padStart(2, "0") + "|";
      }
    });
    printableCard += printableLine;
  });
  return printableCard + "\n";
};

const getRandomNumber = () => {
  return Math.floor(Math.random() * 99 + 1);
};

const getCardNumbers = () => {
  let cardNumbers = [];
  for (let i = 15; i > 0; i--) {
    let randomNumber = getRandomNumber();
    while (cardNumbers.includes(randomNumber)) {
      randomNumber = getRandomNumber();
    }
    cardNumbers.push(randomNumber);
  }
  return cardNumbers.sort((a, b) => a - b);
};

const getCard = (cardNumbers) => {
  let lineLength = 5;
  let card = [];
  for (let i = 0; i < cardNumbers.length; i += lineLength) {
    card.push(cardNumbers.slice(i, i + lineLength));
  }
  return card;
};

const setNewCard = () => {
  const cardNumbers = getCardNumbers();
  return getCard(cardNumbers);
};

const uploadCard = (card, number) => {
  card.forEach((line) => {
    if (line.includes(number)) {
      const index = line.indexOf(number);
      line[index] = "XX";
      saySomething("\nYou've got a match!" + printCard(card));
    }
  });
  return card;
};

const isLineComplete = (card) => {
  let isLineDone = false;
  card.forEach((line) => {
    if (line.every((value) => value === "XX")) {
      isLineDone = true;
      saySomething("\nAnd you've got a LINE!" + printCard(card));
    }
  });
  return isLineDone;
};

const isGameOver = (card) => {
  return card.every((line) => line.every((value) => value === "XX"));
};

const getRaffleNumber = (raffleNumbers) => {
  return raffleNumbers[Math.floor(Math.random() * raffleNumbers.length)];
};

const runRaffle = (raffleNumbers) => {
  let number = getRaffleNumber(raffleNumbers);
  if (raffleNumbers.includes(number) === false) {
    number = getRaffleNumber(raffleNumbers);
  }
  return number;
};

const uploadRaffle = (raffleNumbers, number) => {
  const index = raffleNumbers.indexOf(number);
  if (index > -1) {
    raffleNumbers.splice(index, 1);
  }
  return raffleNumbers;
};

const isGameStillOn = () => {
  let userInput = prompt("Keep playing?", "yes");
  if (userInput === null) {
    return false;
  } else if (userInput.toLowerCase() !== "yes") {
    alert(
      "Please, enter yes if you want to keep playing. Press cancel to leave."
    );
    return isGameStillOn();
  } else {
    return true;
  }
};

const playTurn = (
  card,
  score = 115,
  isLineDone = false,
  raffleNumbers = new Array(99 + 1 - 1).fill().map((d, i) => i + 1)
) => {
  let number = runRaffle(raffleNumbers);
  saySomething("Number is... " + number);
  raffleNumbers = uploadRaffle(raffleNumbers, number);
  card = uploadCard(card, number);
  if (isLineDone === false) {
    isLineDone = isLineComplete(card);
  }
  if (isGameOver(card)) {
    saySomething("\nBINGO\nYour score is: " + score + "/100");
    return score;
  } else {
    return isGameStillOn()
      ? playTurn(card, score - 1, isLineDone, raffleNumbers)
      : saySomething("Now we'll never know your score...");
  }
};

const isCardSelected = (card) => {
  let userInput = prompt(
    "Let's see this card...\n" + printCard(card) + "\nKeep this card?",
    "yes"
  );
  if (userInput === null) {
    return false;
  } else if (userInput.toLowerCase() !== "yes") {
    alert(
      "Please, enter yes if you want to keep this card. Press cancel to change it."
    );
    return isCardSelected(card);
  } else {
    return true;
  }
};

const showMenu = (menu) => {
  for (let i = 1; i < menu.length; i++) {
    menu += "\n" + menu[i].id + "\t" + menu[i].description;
  }
  return prompt(
    "Select the number of an operation or press cancel to leave." + menu
  );
};

const getContinue = () => {
  const userInput = prompt("Do something else? (yes / no)");
  let answer = userInput;
  if (userInput === null) {
    answer = "no";
  }
  if (answer.toLowerCase() !== "yes" && answer.toLowerCase() !== "no") {
    alert("I don't understand, answer a valid option, pretty please.");
    answer = getContinue();
  }
  return answer.toLowerCase();
};

const getOption = () => {
  const menu = [
    {
      id: 0,
      description: "exit",
      function: () => alert("Thanks for playing!"),
    },
    {
      id: 1,
      description: "Start game!",
      function: () => startGame(),
    },
    {
      id: 2,
      description: "High scores ranking.",
      function: () => showHighScores(),
    },
    {
      id: 3,
      description: "How works the score system?",
      function: () => showScoreRules(),
    },
    {
      id: 4,
      description: "Change user.",
      function: () => startSession(),
    },
  ];
  let selectOption = showMenu(menu);
  option = parseInt(selectOption);
  if (option > 0 && option < optionsAvailable.length) {
    optionsAvailable[option].function();
    let again = getContinue();
    again === "yes" ? getOption() : optionsAvailable[0].function();
  } else if (selectOption === null) {
    optionsAvailable[0].function();
  } else {
    alert("Please, chose the number of a valid option");
    getOption();
  }
};

const setupGame = () => {
  let card = setNewCard();
  return isCardSelected(card) ? card : startGame();
};

const startGame = () => {
  let card = setupGame();
  const finalScore = playTurn(card);
  return finalScore
};

const startSession = () => {
    let username = sayWelcome();
    getOption()
}

const setup = () => {

};

bingo();

//TODO:  explain puntuation system, save puntuation, keep playin with same user or change user
