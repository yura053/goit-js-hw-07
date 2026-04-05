function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");
const spanColor = document.querySelector(".color");

const onBtnClick = () => {
  const newColor = getRandomHexColor(); //  один раз створили

  bodyColor.style.backgroundColor = newColor; // використали
  spanColor.textContent = newColor; // використали
};

btnEl.addEventListener("click", onBtnClick);
