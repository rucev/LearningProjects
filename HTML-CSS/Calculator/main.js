let operationQueue = [];
let stringQueue = ""
let value = ""

const clearScreen = () => {
    value = ""
    operationQueue = [];
    stringQueue = ""
    document.getElementById("operation").innerText = ""
    document.getElementById("result").innerText = ""
}

const setValue = (stringNumber) => {
    value += stringNumber
    document.getElementById("result").innerText = value
}

const setSymbolValue = () =>{
    if(value.includes("-")){
        value = value.replace("-", "")
    } else {
        value = "-" + value
    }
    document.getElementById("result").innerText = value
}

const setComa = () =>{
    if(!value.includes(",")){
        value += ","
    }
    document.getElementById("result").innerText = value
}

const setNumber = (valueString) => {
    if(value.length > 0 || value === "-" || value === "," || value === "-," || value === ",-"){
        if(valueString.includes(",")){
            valueString = valueString.replace(",", ".")
        }
        let number = Number(valueString)
        return number
    }
}

const addNumberToQueue = (number) => {
    if(value[0]===","){
        stringQueue += 0 + value
    } else if(value[0]==="-" && value.includes(",")){
        value = value.replace("-", "")
        stringQueue += "(-" + "0" + value + ")";
    } else if(value[0]==="-"){
        stringQueue += "(" + value + ")"
    } else {
        stringQueue += value
    }
    value = ""
    operationQueue.push(number)
    document.getElementById("operation").innerText = stringQueue
    document.getElementById("result").innerText = value

}

const setOperator = (stringOperator) =>{
    let number = setNumber(value)
    if(!isNaN(number)){
        addNumberToQueue(number);
    }
    if(!isNaN(operationQueue[operationQueue.length-1])){
        stringQueue += stringOperator;
        operationQueue.push(stringOperator)
        document.getElementById("operation").innerText = stringQueue
        document.getElementById("result").innerText = value
    } 
}