let operationQueue = [];
let stringQueue = "";
let value = "";

const clearScreen = () => {
  value = "";
  operationQueue = [];
  stringQueue = "";
  document.getElementById("operation").innerText = "for using this app...";
  document.getElementById("total").innerText = "thanks!";
};

const setValue = (stringNumber) => {
  value += stringNumber;
  document.getElementById("total").innerText = value;
};

const setSymbolValue = () => {
  if (value.includes("-")) {
    value = value.replace("-", "");
  } else {
    value = "-" + value;
  }
  document.getElementById("total").innerText = value;
};

const setComa = () => {
  if (!value.includes(".")) {
    value += ".";
  }
  document.getElementById("total").innerText = value;
};

const setNumber = (valueString) => {
  let number = Number(valueString);
  return number;
};

const isInputValid = (input) => {
  return (input.length > 0 && input !== "-" && input !== "." && input !== "-." && input !== ".-");
};

const addNumberToQueue = (number) => {
  if (isInputValid(value)) {
    Number.isInteger(value) ? (value = Number(value)) : (value = Math.round(value * 100) / 100);
    if (value < 0) {
      stringQueue += "(" + value + ")";
    } else {
      stringQueue += value;
    }
    value = "";
    operationQueue.push(number);
  }
};

const uploadQueue = (stringOperator) => {
  stringQueue += stringOperator;
  operationQueue.push(stringOperator);
  document.getElementById("operation").innerText = stringQueue;
  document.getElementById("total").innerText = value;
};

const setOperator = (stringOperator) => {
  if (operationQueue.length === 1) {
    stringQueue = operationQueue[0].toString();
    value = "";
    uploadQueue(stringOperator);
  } else {
    let number = setNumber(value);
    if (!isNaN(number)) {
      addNumberToQueue(number);
      document.getElementById("operation").innerText = stringQueue;
      document.getElementById("total").innerText = value;
    }
    if (
      !isNaN(operationQueue[operationQueue.length - 1]) &&
      stringOperator !== "="
    ) {
      uploadQueue(stringOperator);
    }
  }
};

const uploadOperationQueue = (total, operatorPosition, queue) => {
  let uploadedOperationQueue = [];
  uploadedOperationQueue = queue;
  uploadedOperationQueue[operatorPosition] = total;
  uploadedOperationQueue.splice(operatorPosition - 1, 1);
  uploadedOperationQueue.splice(operatorPosition, 1);
  return uploadedOperationQueue;
};

const calculateMultiplicationsAndDivisions = (queue) => {
  for (let i = 0; i < queue.length; i++) {
    if (queue[i] === "x") {
      let total = queue[i - 1] * queue[i + 1];
      queue = uploadOperationQueue(total, i, queue);
      return calculateMultiplicationsAndDivisions(queue);
    }
    if (queue[i] === "/") {
      if (queue[i + 1] !== 0) {
        let total = queue[i - 1] / queue[i + 1];
        queue = uploadOperationQueue(total, i, queue);
        return calculateMultiplicationsAndDivisions(queue);
      } else {
        queue = [];
        return queue;
      }
    }
  }
  return queue;
};

const calculateAdditionAndSubtraction = (queue) => {
  for (let i = 0; i < queue.length; i++) {
    if (queue[i] === "+") {
      let total = queue[i - 1] + queue[i + 1];
      queue = uploadOperationQueue(total, i, queue);
      return calculateAdditionAndSubtraction(queue);
    }
    if (queue[i] === "-") {
      let total = queue[i - 1] - queue[i + 1];
      queue = uploadOperationQueue(total, i, queue);
      return calculateAdditionAndSubtraction(queue);
    }
  }
  return queue;
};

const isQueueValid = () => {
  return !isNaN(operationQueue[operationQueue.length - 1]);
};

const calculateOperationQueue = () => {
  addNumberToQueue(setNumber(value));
  if (isQueueValid()) {
    let total = [];
    if (operationQueue.length >= 3) {
      total = calculateAdditionAndSubtraction(
        calculateMultiplicationsAndDivisions(operationQueue)
      );
      if (total.length === 0) {
        document.getElementById("operation").innerText = stringQueue;
        document.getElementById("total").innerText = "oh, no! error";
      } else {
        total = total[0];
        Number.isInteger(total)
          ? total
          : (total = Math.round(total * 100) / 100);
        document.getElementById("operation").innerText = stringQueue;
        document.getElementById("total").innerText = total;
      }
    } else {
      total = operationQueue[0];
      Number.isInteger(total) ? total : (total = Math.round(total * 100) / 100);
      document.getElementById("operation").innerText = stringQueue;
      document.getElementById("total").innerText = total;
    }
    operationQueue = [];
    stringQueue = "";
    value = total.toString();
    addNumberToQueue(total);
    total = [];
  } else {
    if (operationQueue[length - 1] === undefined) {
      operationQueue.pop();
    }
  }
};

const calculate = () => {
  if (operationQueue.length === 1 && isInputValid(value)) {
    operationQueue = [];
    stringQueue = "";
    addNumberToQueue(setNumber(value));
    document.getElementById("operation").innerText = stringQueue;
    document.getElementById("total").innerText = value;
  } else {
    calculateOperationQueue();
  }
};
