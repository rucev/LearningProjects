let flights = [
  { id: 00, to: "New York", from: "Barcelona", cost: 700, layover: false },
  { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, layover: true },
  { id: 02, to: "Paris", from: "Barcelona", cost: 210, layover: false },
  { id: 03, to: "Roma", from: "Barcelona", cost: 150, layover: false },
  { id: 04, to: "London", from: "Madrid", cost: 200, layover: false },
  { id: 05, to: "Madrid", from: "Barcelona", cost: 90, layover: false },
  { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, layover: true },
  { id: 07, to: "Shangai", from: "Barcelona", cost: 800, layover: true },
  { id: 08, to: "Sydney", from: "Barcelona", cost: 150, layover: true },
  { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, layover: false },
];

const welcome = (userName = "") => {
  let userInput = prompt("Hello, what's your name?\nPress cancel to exit.");
  if (userInput !== null && userInput !== "") {
    userName = userInput;
    alert("Welcome, " + userName + "!");
    console.log("Welcome, " + userName + "!");
  } else if (userInput === null) {
    return null;
  } else {
    alert("Please, enter a name");
    return welcome();
  }
};

const getRole = () => {
  let userInput = prompt(
    "Select your role (admin / user)\nPress cancel to exit."
  );
  if (userInput === null) {
    return null;
  } else if (
    userInput === "" ||
    (userInput.toLowerCase() !== "admin" && userInput.toLowerCase() !== "user")
  ) {
    alert("ERROR: Invalid role!\nPlease, write admin or user.");
    return getRole();
  }
  return userInput.toLowerCase();
};

const getFlightInfo = (flight) => {
  let message = "";
  if (flight.layover === true) {
    message =
      "\n-> The flight with origin: " +
      flight.from +
      ", " +
      "and destination: " +
      flight.to +
      " has a cost of " +
      flight.cost +
      "€ and makes a layover.";
  } else {
    message =
      "\n-> The flight with origin: " +
      flight.from +
      ", " +
      "and destination: " +
      flight.to +
      " has a cost of " +
      flight.cost +
      "€ and does not make any layover.";
  }
  return message;
};

const showFlightsInfo = (flights, initialMessage) => {
  let flightsInfo = initialMessage;
  flights.forEach((flight) => (flightsInfo += getFlightInfo(flight)));
  alert(flightsInfo);
  console.log(flightsInfo);
};

const showAverageCost = (flights) => {
  let totalCost = flights[0].cost;
  for (let i = 1; i < flights.length; i++) totalCost += flights[i].cost;
  const average = (totalCost / flights.length).toFixed(2);
  alert("Average flight cost: " + average + "€");
  console.log("Average flight cost: " + average + "€");
};

const showNumberLayoverFlights = (flights) => {
  let totalLayoverFlights = 0;
  flights.forEach((flight) => {
    if (flight.layover === true) {
      totalLayoverFlights += 1;
    }
  });
  alert("Number of flights with layover: " + totalLayoverFlights);
  console.log("Number of flights with layover: " + totalLayoverFlights);
};

const showDestinationLastFlights = (flights) => {
  let flightsDestination = [];
  for (let i = flights.length - 1; i > flights.length - 6; i--)
    flightsDestination.push(flights[i].to);
  alert(
    "The last 5 flights of the day destinations are:\n" +
      flightsDestination.join("\r\n")
  );
  console.log(
    "The last 5 flights of the day destinations are:\n" +
      flightsDestination.join("\r\n")
  );
};

const setId = (flights) => {
  const usedIds = Array.from(Object.values(flights), (flight) => flight.id);
  const id = checkId(usedIds);
  return id;
};

const checkId = (usedIds, id = 0) => {
  if (usedIds.includes(id)) {
    id += 1;
    return checkId(usedIds, id);
  }
  return id;
};

const setCity = (goal) => {
  let userInput = prompt(
    "Enter the " +
      goal +
      " city (ex: Barcelona)\nPress cancel to go back to the main menu."
  );
  if (userInput === null) {
    return "exit";
  } else if (userInput === "" || !isNaN(userInput)) {
    alert(
      "ERROR: Invalid name!\nPlease, write something.\nRemember that a city's name should be text"
    );
    return setCity(goal);
  } else {
    return userInput;
  }
};

const isFligthOriginAndDestinationValid = (destination, origin) => {
  return destination.toLowerCase() !== origin.toLowerCase();
};

const setCost = () => {
  let userInput = prompt(
    "Enter the cost (ex: 150)\nPress cancel to go back to the main menu."
  );
  cost = Number(userInput);
  if (userInput === null) {
    return "exit";
  } else if (userInput === "" || isNaN(userInput) || cost <= 0) {
    alert("ERROR: value is not valid!\nPlease, enter just a positive number.");
    return setCost();
  } else {
    return cost;
  }
};

const getLayoverInfo = () => {
  let userInput = prompt("Will this flight have a layover? (yes / no)");
  if (userInput === null) {
    return null;
  } else if (
    userInput.toLowerCase() === "yes" ||
    userInput.toLowerCase() === "no"
  ) {
    return userInput.toLowerCase();
  } else {
    alert("ERROR: answer is not valid!\nPlease, enter yes or no.");
    return setLayover();
  }
};

const setLayover = () => {
  let answer = getLayoverInfo();
  if (answer === null) {
    return "exit";
  } else if (answer === "yes") {
    return true;
  } else {
    return false;
  }
};

const setFlight = (flights) => {
  if (flights.length >= 15) {
    alert(
      "ERROR: Limit reached!\nSorry, you can not add more flights. Delete one first."
    );
    return flights;
  }
  alert(
    "REMEMBER: If you have deleted a flight, the id will correspond to that one.\nIf you haven't delete flights, the id will be automatically set to the next available id."
  );
  let newFlight = {};
  newFlight.id = setId(flights);
  newFlight.to = setCity("destination");
  if (newFlight.to === "exit") {
    return;
  }
  newFlight.from = setCity("origin");
  if (newFlight.from === "exit") {
    return;
  }
  while (
    isFligthOriginAndDestinationValid(newFlight.to, newFlight.from) === false
  ) {
    alert(
      "ERROR: destination and origin can not be the same city!\nPlease, set new ones"
    );
    newFlight.to = setCity("destination");
    newFlight.from = setCity("origin");
  }
  newFlight.cost = setCost();
  if (newFlight.cost === "exit") {
    return;
  }
  newFlight.layover = setLayover();
  if (newFlight.layover === "exit") {
    return;
  }
  flights.push(newFlight);
  flights.sort((a, b) => a.id - b.id);
  showFlightsInfo(flights, "The list of flights is now:");
  return flights;
};

const getId = (flights) => {
  let userInput = prompt(
    "Enter the ID number of the flight you want to delete (ex: 10)\nPress cancel to go back to the main menu."
  );
  let id = Number(userInput);
  if (userInput === null) {
    return "exit";
  } else if (userInput === "" || isNaN(userInput) || id < 0) {
    alert("ERROR: value is not valid!\nPlease, enter an ID number.");
    return getId(flights);
  } else {
    idExists = false;
    flights.forEach((flight) => {
      if (flight.id === id) idExists = true;
    });
    if (idExists === false) {
      alert("ERROR: There's no flight with this ID!\nSet a new ID, please.");
      return getId(flights);
    }
    return id;
  }
};

const deleteFlight = (flights) => {
  const id = getId(flights);
  if (id === "exit") {
    return;
  }
  flightToDelete = flights.findIndex((flight) => flight.id === id);
  if (flightToDelete > -1) {
    flights.splice(flightToDelete, 1);
  }
  showFlightsInfo(flights, "The list of flights is now:");
  return flights;
};

const findFlights = (flights) => {
  const cost = setCost();
  if (cost === "exit") {
    return;
  }
  let cheaperFlights = [];
  flights.forEach((flight) => {
    if (flight.cost <= cost) cheaperFlights.push(flight);
  });
  const message = "Flights with a cost below " + cost + "€:";
  cheaperFlights.length === 0
    ? alert("Sorry, no flights available for less than " + cost + "€.")
    : showFlightsInfo(cheaperFlights, message);
};

const generalMenu = [
  {
    id: 0,
    description: "exit",
    function: () => alert("Thanks for using this service!"),
  },
  {
    id: 1,
    description: "See info of all the available flights.",
    function: () => showFlightsInfo(flights, "The available flights are:"),
  },
  {
    id: 2,
    description: "See average flight cost.",
    function: () => showAverageCost(flights),
  },
  {
    id: 3,
    description: "See number of flights with layover.",
    function: () => showNumberLayoverFlights(flights),
  },
  {
    id: 4,
    description: "See destination of the last 5 flights of the day.",
    function: () => showDestinationLastFlights(flights),
  },
];

const adminMenu = [
  {
    id: 5,
    description: "Add a new flight.",
    function: () => setFlight(flights),
  },
  {
    id: 6,
    description: "Delete a flight.",
    function: () => deleteFlight(flights),
  },
];

const userMenu = [
  {
    id: 5,
    description: "Search flights by a maximum cost.",
    function: () => findFlights(flights),
  },
];

const showMenu = (optionsAvailable) => {
  let menu = "";
  for (let i = 1; i < optionsAvailable.length; i++) {
    menu +=
      "\n" + optionsAvailable[i].id + "\t" + optionsAvailable[i].description;
  }
  return prompt(
    "Select the number of an operation or press cancel to exit." + menu
  );
};

const getContinue = () => {
  const userInput = prompt("Do another operation? (yes / no)");
  let answer = userInput;
  if (userInput === null) {
    answer = "no";
  }
  if (answer.toLowerCase() !== "yes" && answer.toLowerCase() !== "no") {
    alert("I don't understand, answer a valid option, pretty please.");
    answer = getContinue();
  }
  return answer.toLowerCase();
};

const changeUser = () => {
  const userInput = prompt("Change your user? (yes / no)");
  let answer = userInput;
  if (userInput === null) {
    answer = "no";
  }
  if (answer.toLowerCase() !== "yes" && answer.toLowerCase() !== "no") {
    alert("I don't understand, answer a valid option, pretty please.");
    answer = changeUser();
  }
  return answer.toLowerCase();
};

const getOption = (role) => {
  let optionsAvailable = [];
  optionsAvailable =
    role === "admin"
      ? generalMenu.concat(adminMenu)
      : generalMenu.concat(userMenu);
  let selectOption = showMenu(optionsAvailable);
  option = parseInt(selectOption);
  if (option > 0 && option < optionsAvailable.length) {
    optionsAvailable[option].function();
    let goAgain = getContinue();
    if (goAgain === "yes") {
      getOption(role);
    } else {
      let newUser = changeUser();
      newUser === "no" ? optionsAvailable[0].function() : startApp();
    }
  } else if (selectOption === null) {
    optionsAvailable[0].function();
  } else {
    alert("Please, chose the number of a valid option");
    getOption(role);
  }
};

const startApp = () => {
  const user = welcome();
  if (user === null) {
    return alert("Thanks for using this service!");
  } else {
    const role = getRole();
    role === null ? alert("Thanks for using this service!") : getOption(role);
  }
};

const setup = () => {
  startApp();
};

setup();
