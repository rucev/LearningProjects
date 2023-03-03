const saySomething = (message) => {
  console.log(message);
  alert(message);
};

const sayWelcome = () => {
  let userInput = prompt("Hello, what's your name?");
  if (userInput !== "" && userInput !== null) {
    saySomething("Welcome, " + userInput + "!\nLet's play bingo!");
    return userInput;
  } else {
    alert("Please, enter a name.");
    return sayWelcome();
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

const isGameStillOn = (card) => {
  console.log("This is your card right now:"+ printCard(card))
  let userInput = prompt("This is your card right now:"+ printCard(card) + "\nKeep playing?\nCancel will return you to the main menu.", "yes");
  if (userInput === null) {
    return false;
  } else if (userInput.toLowerCase() !== "yes") {
    alert(
      "Please, enter yes if you want to keep playing. Press cancel to leave."
    );
    return isGameStillOn(card);
  } else {
    return true;
  }
};

const playTurn = (card, score = 115, isLineDone = false, raffleNumbers = new Array(99 + 1 - 1).fill().map((d, i) => i + 1)) => {
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
    return isGameStillOn(card) ? playTurn(card, score - 1, isLineDone, raffleNumbers) : saySomething("Now we'll never know your score...");
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

const showMenu = () => {
  const menu =
    "\n1.\tStart game!\n" +
    "2.\tHigh scores ranking.\n" +
    "3.\tHow works the score system?\n" +
    "4.\tChange user.\n";
  return prompt(
    "Select the number of an operation or press cancel to leave." + menu
  );
};

const setupGame = () => {
  let card = setNewCard();
  return isCardSelected(card) ? card : setupGame();
};

const startGame = () => {
  let card = setupGame();
  const finalScore = playTurn(card);
  return finalScore;
};

const startSession = () => {
  let username = sayWelcome();
  return username;
};

const sayGoodbye = (username) => {
  saySomething("Thanks for playing " + username + "! Hope to see you again.");
};

const showHighScores = (scores) => {
  if (scores.length === 0) {
    saySomething(
      "We don't have any score saved yet. Play and setup the mark to beat!"
    );
  } else {
    scores.sort((a, b) => a - b);
    scores.sort((a, b) => b.score - a.score);
    let limit = scores.length < 5 ? scores.length : 5;
    let scoresTop5 = "TOP 5 Scores:";
    for (let i = 0; i < limit; i++) {
      scoresTop5 += "\n" + scores[i].score + " \t " + scores[i].user;
    }
    saySomething(scoresTop5);
  }
};

const showRules = () => {
  const rules =
    "In this bingo, you start with a score of 100 points." +
    "\nEvery time you don't get 'BINGO!' it will rest you 1 point :(" +
    "\nThough getting 'LINE!' will add 15 points to your punctuation!" +
    "\nIf you get a perfect score (100) it means you've got all the numbers in a row!" +
    "\nBut if you only get 15 it means you emptied the whole raffle drum...";
  saySomething(rules);
};

const startMenu = (username, scores) => {
  let selectOption = showMenu();
  if (selectOption !== null) {
    option = parseInt(selectOption);
    switch (option) {
      case 1:
        let newScore = startGame();
        if (newScore !== undefined) {
          let userScore = { user: username, score: newScore };
          scores.push(userScore);
        }
        return startMenu(username, scores);
      case 2:
        showHighScores(scores);
        return startMenu(username, scores);
      case 3:
        showRules();
        return startMenu(username, scores);
      case 4:
        sayGoodbye(username);
        username = sayWelcome();
        return startMenu(username, scores);
      default:
        alert("Please, chose the number of a valid option.");
        return startMenu(username, scores);
    }
  } else {
    sayGoodbye(username);
    return;
  }
};

const setup = () => {
  let username = sayWelcome();
  let scores = [];
  startMenu(username, scores);
};

setup();