const getInput = () => {
    let numbers = [];
    let userInput = prompt("Please, enter a number");
    if(userInput !== null && userInput !== ""){
      if(isNaN(userInput)) {
        alert("Hey, that's not a number!");
      } else {
        numbers.push(userInput);
      }
      getNumbers();
    }
    return numbers
  };
  
  console.log(getNumbers())