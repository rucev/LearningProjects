

const getRandomNumber = () => {
    return Math.floor(Math.random() * (99) + 1)
}

const getCardLine = (card) => {
    let line = [];
    for (let i = 5; i > 0; i--){
        let randomNumber = getRandomNumber();
        while(line.includes(randomNumber) || card.includes(randomNumber)){
            randomNumber = getRandomNumber()
        }
        line.push(randomNumber)
    }
    return line
}

const setCard = () => {
    let card = [];
    for (let i = 3; i > 0; i--){
        let line = getCardLine(card);
        card.push(line)
    }
    console.log(card)
    return card
}

const uploadCard = (card, number) => {
    card.forEach((line) => {
        if(line.includes(number)){
            const index = line.indexOf(number);
            line[index] = "X"
            console.log(card)
        }
    })
    return card
}

const isLineComplete = (card) => {
    let isLineDone = false
    card.forEach((line) => {
        if(line.every((value) => value === "X")){
            console.log("LINE!")
            isLineDone = true
        }
    })
    return isLineDone
}

const isGameOver = (card) => {
    return card.every((line) => line.every((value) => value === "X"));
}

const getRaffleNumber = (raffleNumbers) => {
    return raffleNumbers[Math.floor(Math.random()*raffleNumbers.length)];
}

const runRaffle = (raffleNumbers) => {
    let number = getRaffleNumber(raffleNumbers);
    if(raffleNumbers.includes(number) === false){
        number = getRaffleNumber(raffleNumbers)
    }
    return number
}

const uploadRaffle = (raffleNumbers, number) => {
    const index = raffleNumbers.indexOf(number);
    if (index > -1) { 
        raffleNumbers.splice(index, 1); 
    }
    return raffleNumbers
}

const playTurn = (card, isLineDone = false, raffleNumbers = new Array(100 - 1).fill().map((d, i) => i + 1)) => {
    let number = runRaffle(raffleNumbers);
    console.log("The next number is...", number);
    raffleNumbers = uploadRaffle(raffleNumbers, number)
    card = uploadCard(card, number)
    if(isLineDone === false){
        isLineDone = isLineComplete(card)
    }
    return isGameOver(card) ? console.log("BINGO") : playTurn(card, isLineDone, raffleNumbers)
}

const startBingo = () => {
    //Add welcome
    let card = setCard();
    console.log(card);
    playTurn(card)
}

startBingo()