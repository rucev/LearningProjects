const saySomething = (message) => {
  //console.log(message);
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

const uploadCard = (card, number, isLineDone) => {
  card.forEach((line) => {
    if (line.includes(number)) {
      const index = line.indexOf(number);
      line[index] = "XX";
      if (isLineDone === true) {
        saySomething("\nYou've got a LINE!"+printCard(card));
      } else {
        saySomething("\nYou've got a match!"+printCard(card));
      }
    }
  });
  return card;
};

const isLineComplete = (card) => {
  let isLineDone = false;
  card.forEach((line) => {
    if (line.every((value) => value === "XX")) {
      isLineDone = true;
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
    alert("Please, enter yes if you want to keep playing. Press cancel to leave.");
    return isGameStillOn();
  } else {
    return true;
  }
};

const playTurn = (card, score = 115, isLineDone = false, raffleNumbers = new Array(99 + 1 - 1).fill().map((d, i) => i + 1)) => {
  let number = runRaffle(raffleNumbers);
  saySomething("Number is... " + number);
  raffleNumbers = uploadRaffle(raffleNumbers, number);
  if (isLineDone === false) {
    isLineDone = isLineComplete(card);
  }
  card = uploadCard(card, number, isLineDone);
  if (isGameOver(card)) {
    return saySomething("\nBINGO\nYour score is: " + score + "/100");
  } else {
    return isGameStillOn() ? playTurn(card, score - 1, isLineDone, raffleNumbers) : saySomething("Now we'll never know your score...");
  }
}; 

const isCardSelected = (card) => {
    let userInput = prompt("Let's see this card...\n" + printCard(card)+"\nKeep this card?", "yes");
    if (userInput === null) {
      return false;
    } else if (userInput.toLowerCase() !== "yes") {
      alert("Please, enter yes if you want to keep this card. Press cancel to change it.");
      return isCardSelected(card);
    } else {
      return true;
    }
  };

const startGame = () => {
  let card = setNewCard();
  return isCardSelected(card) ? card : startGame();
};

const bingo = (username = "") => {
    username = sayWelcome();
    let card = startGame();
    playTurn(card);
};

bingo();

//TODO: check line, explain puntuation system, save puntuation, keep playin with same user or change user