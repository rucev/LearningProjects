/*



Si eres ADMIN, la función debería permitir:

Poder crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos, si se intenta introducir uno más, saltará un alert().
Poder eliminar vuelos mediante el ID.
Si eres USER la función debería permitir:

El usuario debe poder buscar por precio. Cuando el usuario ponga el precio, debera mostrar los vuelos que tengan ese precio o mas baratos.
*/

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
    let userInput = prompt("Hello, what's your name?");
    if (userInput !== null && userInput !== "") {
      userName = userInput;
      alert("Welcome, "+ userName)
      console.log("Welcome, "+ userName)
    } else {
      alert("Please, enter a name");
      welcome();
    };
  };
  
  
  
  const getFlightInfo = (flight) => {
    let message = "";
    if(flight.layover === true){
      message = "\n-> The flight with origin: " + flight.from +", " + "and destination: " + flight.to + " has a cost of " + flight.cost + "€ and makes a layover."
    } else {
      message = "\n-> The flight with origin: " + flight.from +", " + "and destination: " + flight.to + " has a cost of " + flight.cost + "€ and does not make any layover."
    }
    return message
  }
  
  const showFlightsInfo = (flights) => {
    let flightsInfo =  "All flights:";
    flights.forEach(flight => flightsInfo += getFlightInfo(flight));
    alert(flightsInfo);
    console.log(flightsInfo)
  };
  
  const showAverageCost = (flights) => {
    let totalCost = flights[0].cost;
    for (let i = 1; i < flights.length; i++) totalCost += flights[i].cost;
    const average = (totalCost / flights.length).toFixed(2);
    alert("Average flight cost: " + average + "€");
    console.log("Average flight cost: " + average + "€")
  };
  
  const showNumberLayoverFlights = (flights) => {
    let totalLayoverFlights = 0;
    flights.forEach(flight => {
      if (flight.layover === true){
        totalLayoverFlights += 1;
      };
    });
    alert("Number of flights with layover: " + totalLayoverFlights);
    console.log("Number of flights with layover: " + totalLayoverFlights);
  };
  
  const showDestinationLastFlights = (flights) => {
    let flightsDestination = [];
    for (let i = flights.length-1; i > flights.length-6; i--) flightsDestination.push(flights[i].to);
    alert("The last 5 flights of the day destinations are:\n"+flightsDestination.join('\r\n'));
    console.log("The last 5 flights of the day destinations are:\n"+flightsDestination.join('\r\n'));
  };
  
  /*
  Poder crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos, si se intenta introducir uno más, saltará un alert().
  Poder eliminar vuelos mediante el ID.
  */
  
  const setFlight = (flights) => {
    if(flights.length >= 15){
      alert("ERROR: Limit reached\nSorry, you can not add more flights. Delete one first.");
    };
    
  };
  
  const setFlightId = (flights, newId = 0) => {
    let userInput = prompt("Enter an ID number (ex: 10)");
    if (userInput === null || userInput === "" || isNaN(userInput)) {
      alert("Please, enter a number.");
      setFlightId();
    };
    newId += userInput;
    isIdAvailable = true
    flights.forEach(flight => {
      if (flight.Id == newId) isIdAvailable = false;
    });
    if(isIdAvailable === false) {
      alert("Error: This ID is already in use.\nSet a new ID, please.")
      setFlightId()
    }
    console.log(isIdAvailable, newId)     
  }
  
  
  setFlightId(flights)
  