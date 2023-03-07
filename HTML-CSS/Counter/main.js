let count = document.getElementById("counter");

const increment = () => {
  count >= 99 ? (count = 99) : (count += 1);
  document.getElementById("counter").innerText = count;
};

const decrement = () => {
  count <= 0 ? (count = 0) : (count -= 1);
  document.getElementById("counter").innerText = count;
};

const reset = () => {
  count = 0;
  document.getElementById("counter").innerText = count;
};
