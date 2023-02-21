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

const addition = (numbers) => {
  let total = numbers[0];
  for (let i = 1; i < numbers.length; i++) total += numbers[i];
  return total.toFixed(3);
};

const subtraction = (numbers) => {
  let total = numbers[0];
  for (let i = 1; i < numbers.length; i++) total -= numbers[i];
  return total.toFixed(3);
};

const multiplication = (numbers) => {
  let total = numbers[0];
  for (let i = 1; i < numbers.length; i++) total = total * numbers[i];
  return total.toFixed(3);
};

const division = (numbers) => {
  let total = numbers[0];
  for (let i = 1; i < numbers.length; i++) total = total / numbers[i];
  return total.toFixed(3);
};

const getContinue = () => {
  const userInput = prompt("Do maths again? yes/no");
  let answer = userInput;
  if (userInput === null || userInput === "") {
    answer = "no";
  }
  return answer.toLowerCase();
};

const calculator = (finalResults = []) => {
  let stringNumbers = getNumbers();
  if (stringNumbers.length > 0) {
    const numbers = stringNumbers.map(Number);
    if (numbers.length === 1) {
      finalResults.push("Square root = " + Math.sqrt(numbers[0]).toFixed(3));
    } else {
      finalResults.push("Addition = " + addition(numbers));
      finalResults.push("Subtraction = " + subtraction(numbers));
      finalResults.push("Multiplication = " + multiplication(numbers));
      finalResults.push("Division = " + division(numbers));
      console.log(finalResults);
    }
  }
  let again = getContinue();
  if (again === "yes") {
    finalResults = [];
    calculator(finalResults);
  } else if (again === "no") {
    alert("Bye! See you soon!");
  } else {
    alert("I don't understand, answer yes or no, pretty please");
    again = getContinue();
  }
};

calculator();
