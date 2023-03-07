let counter = 0

document.getElementById("counter").innerText = counter;
  
//creation of increment function
const increment = () => {
    counter += 1;
    document.getElementById("counter").innerText = counter;
}
//creation of decrement function
const decrement = () => {
    counter -= 1;
    document.getElementById("counter").innerText = counter;
}

const reset = () => {
    counter = 0;
    document.getElementById("counter").innerText = counter;
}