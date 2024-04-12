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
  result.textContent = "";
  input.value = "";
});

const validate = (str) => {
  const regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm;
  result.classList.remove("hiden");

  if (regex.test(str)) {
    result.classList.remove("invalid");
    result.textContent = `Valid US number: ${str}`;
  } else {
    result.classList.add("invalid");
    result.textContent = `Invalid US number: ${str}`;
  }
};
