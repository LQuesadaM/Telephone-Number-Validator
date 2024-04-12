const input = document.querySelector("#user-input");
const clearButton = document.querySelector("#clear-btn");
const checkButton = document.querySelector("#check-btn");
const result = document.querySelector("#results-div");

checkButton.addEventListener("click", () => {
  if (input.value === "") {
    alert("Please provide a phone number");
    return;
  }

  validate(input.value);
});

clearButton.addEventListener("click", () => {
  result.classList.add("hiden");
  input.value = "";
});

const validate = (str) => {
  const regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm;
  result.classList.remove("hiden");
  result.textContent = regex.test(str)
    ? `Valid US number: ${str}`
    : `Invalid US number: ${str}`;
};
