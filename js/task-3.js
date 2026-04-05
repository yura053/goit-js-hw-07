const inputEl = document.querySelector(`#name-input`);
const inputOut = document.querySelector(`#name-output`);

function updateGreeting() {
  const inputValue = inputEl.value.trim();
  if (inputValue === ``) {
    inputOut.textContent = `Anonymous`;
  } else {
    inputOut.textContent = inputValue;
  }
}

inputEl.addEventListener(`input`, updateGreeting);
