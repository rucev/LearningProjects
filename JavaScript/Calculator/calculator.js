const getNumbers = (numbers = []) => {
  let userInput = prompt("Please, enter a number (for example: 0.42).\n- If you don't want to add more numbers: Leave it empty or cancel.");
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
  const userInput = prompt("Do maths again?\n- Write 'yes' if you want to keep going!\n- Write 'no', leave it empty or cancel if you want to leave.");
  let answer = userInput;
  if (userInput === null || userInput === "") {
    answer = "no";
  };
  if (answer.toLowerCase() !== "yes" && answer.toLowerCase() !== "no"){
    alert("I don't understand, answer a valid option, pretty please.");
    answer = getContinue();
  }
  return answer.toLowerCase();
};

const calculator = (finalResults = []) => {
  let stringNumbers = getNumbers();
  if (stringNumbers.length > 0) {
    const numbers = stringNumbers.map(Number);
    if (numbers.length === 1) {
      finalResults.push("Square root = " + Math.sqrt(numbers[0]).toFixed(3));
      alert("Result: " + finalResults);
      console.log(finalResults);
    } else {
      finalResults.push("Addition = " + addition(numbers));
      finalResults.push("Subtraction = " + subtraction(numbers));
      finalResults.push("Multiplication = " + multiplication(numbers));
      finalResults.push("Division = " + division(numbers));
      alert("Results:\n" + finalResults.join('\r\n'));
      console.log(finalResults);
    }
  }
  let again = getContinue();
  if (again === "yes") {
    finalResults = [];
    calculator(finalResults);
  } else {
    alert("Bye! See you soon!");
  } 
};
  
calculator();
