const countElement = document.getElementById("count");
const statusElement = document.getElementById("status");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");

let count = 0;

function renderCount(message = "Ready when you are") {
  countElement.textContent = count;
  statusElement.textContent = message;

  countElement.classList.remove("pop");
  // Restart the small number animation after each update.
  void countElement.offsetWidth;
  countElement.classList.add("pop");
}

increaseButton.addEventListener("click", () => {
  count += 1;
  renderCount("Nice! You increased the count.");
});

decreaseButton.addEventListener("click", () => {
  if (count > 0) {
    count -= 1;
    renderCount(count === 0 ? "Back to zero." : "Count decreased by one.");
  } else {
    renderCount("The counter can't go below zero.");
  }
});

resetButton.addEventListener("click", () => {
  count = 0;
  renderCount("Counter has been reset.");
});
