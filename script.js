const input = document.querySelector("#user-input");
const clearButton = document.querySelector("#clear-btn");
const checkButton = document.querySelector("#check-btn");
const result = document.querySelector("#results-div");

checkButton.addEventListener("click", () => {
  if (input.value === "") alert("Please provide a phone number");
});
