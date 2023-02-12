const getNumbers = (numbers = []) => {
  let userInput = prompt("Please, enter a number (ex: 0.42)");
  if (userInput !== null && userInput !== "") {
    if (isNaN(userInput)) {
      alert("Hey, that's not a number!");
    } else {
      numbers.push(userInput);
    }
    numbers = getNumbers(numbers);
  }
  return numbers;
};

const add = (numbers) => {
  let total = numbers[0];
  for (let i = 1; i < numbers.length; i++) total += numbers[i];
  return total.toFixed(3);
};

const sub = (numbers) => {
  let total = numbers[0];
  for (let i = 1; i < numbers.length; i++) total -= numbers[i];
  return total.toFixed(3);
};

const mult = (numbers) => {
  let total = numbers[0];
  for (let i = 1; i < numbers.length; i++) total = total * numbers[i];
  return total.toFixed(3);
};

const div = (numbers) => {
  let total = numbers[0];
  for (let i = 1; i < numbers.length; i++) total = total / numbers[i];
  return total.toFixed(3);
};

const getContinue = () => {
  const userInput = prompt("Do maths again? yes/no").toLowerCase();
  let answer = userInput;
  if (userInput === null || userInput === "") {
    answer = "no";
  }
  return answer.toLowerCase();
};

const calculator = (finalResults = []) => {
  let stringNumbers = getNumbers();
  const numbers = stringNumbers.map(Number);
  if (numbers.length === 1) {
    finalResults.push("Square root = " + Math.sqrt(numbers[0]).toFixed(3));
  } else {
    finalResults.push("Addition = " + add(numbers));
    finalResults.push("Subtraction = " + sub(numbers));
    finalResults.push("Multiplication = " + mult(numbers));
    finalResults.push("Division = " + div(numbers));
  }
  let again = getContinue();
  if (again === "yes") {
    calculator(finalResults);
  } else if (again === "no") {
    alert("Bye! See you soon!");
    console.log(finalResults);
  } else {
    alert("I don't understand, answer yes or no, pretty please");
    again = getContinue();
  }
};

calculator();
