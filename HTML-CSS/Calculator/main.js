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
        value += "."
    }
    document.getElementById("result").innerText = value
}

const setNumber = (valueString) => {
    if(value.length > 0 || value === "-" || value === "." || value === "-." || value === ".-"){
        let number = Number(valueString)
        return number
    }
}

const addNumberToQueue = (number) => {
    if(value[0]==="."){
        stringQueue += 0 + value
    } else if(value[0]==="-" && value.includes(".")){
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
    if(isNaN(operationQueue[operationQueue.length-1]) && stringOperator === "="){
        stringQueue = stringQueue.slice(0, -1);
        operationQueue.pop()
        document.getElementById("operation").innerText = stringQueue
    }
    if(!isNaN(operationQueue[operationQueue.length-1]) && stringOperator !== "="){
        stringQueue += stringOperator;
        operationQueue.push(stringOperator)
        document.getElementById("operation").innerText = stringQueue
        document.getElementById("result").innerText = value
    }
}

const cleanOperationQueue = (result, operatorPosition, queue) => {
    let newOperationQueue = [];
    newOperationQueue = queue
    newOperationQueue[operatorPosition] = result
    newOperationQueue.splice(operatorPosition-1, 1)
    newOperationQueue.splice(operatorPosition, 1)
    console.log(newOperationQueue)
    return newOperationQueue
}

const calculateMultiplicationsAndDivisions = (queue) => {
    for(let i = 0; i < queue.length; i++)  {
        if(queue[i]==="x"){
            let result =  queue[i-1]*queue[i+1];
            queue = cleanOperationQueue(result, i, queue);
            return calculateMultiplicationsAndDivisions(queue);
        }
        if(queue[i]==="/"){
            if(queue[i+1] !== 0){
                let result =  queue[i-1]/queue[i+1];
                queue = cleanOperationQueue(result, i, queue);
                return calculateMultiplicationsAndDivisions(queue);
            } else {
                queue = [];
                return queue
            }

        }
    }
    return queue
}

const calculateAdditionAndSubtraction = (queue) => {
    for(let i = 0; i < queue.length; i++) {
        if(queue[i]==="+"){
            let result =  queue[i-1]+queue[i+1];
            queue = cleanOperationQueue(result, i, queue);
            console.log(queue)
            return calculateAdditionAndSubtraction(queue);
        }
        if(queue[i]==="-"){
            let result =  queue[i-1]-queue[i+1];
            queue = cleanOperationQueue(result, i, queue);
            return calculateAdditionAndSubtraction(queue);
        }
    }
    return queue
}

const calculate = () =>{
    setOperator("=")
    if(operationQueue.length >=3){
        let result = calculateAdditionAndSubtraction(calculateMultiplicationsAndDivisions(operationQueue))
        if(result.length === 0){
            document.getElementById("result").innerText = "oh no, error"
        } else {
            document.getElementById("result").innerText = result[0]
        }
        value = ""
        operationQueue = [];
        stringQueue = ""
    } 
}


//TODO: check fallo raro postoperación