// inisialize colors array
let numBox = 6;
let colorPicked;
let colors = [];
let boxs = document.querySelectorAll(".box");
let h1Display = document.querySelector("h1");
let spanElem = document.getElementById("rbgDesplay");
let messageDisplay = document.querySelector("#message");
let resetButton = document.querySelector("#reset");
let mode = document.querySelectorAll(".mode");

init();
// ******* functions *******//
// init function our main programe that works at first beginning
function init() {
  resetFunction();
  addListeners();
}
// resetFunction() reset everything after a click to button
function resetFunction() {
  colors = setRandomColors(numBox);
  colorPicked = pickColor();
  spanElem.textContent = colorPicked;
  for (let i = 0; i < boxs.length; i++) {
    if (colors[i]) {
      boxs[i].style.display = "block";
      boxs[i].style.backgroundColor = colors[i];
    } else boxs[i].style.display = "none";
  }
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
  h1Display.style.backgroundColor = "steelblue";
}
// function add Listeners
function addListeners() {
  resetButton.addEventListener("click", resetFunction);
  mode[0].addEventListener("click", level);
  mode[1].addEventListener("click", level);
  for (let i = 0; i < boxs.length; i++) {
    boxs[i].addEventListener("click", isCorrect);
  }
}
// setRandomColors(num) make an array of num colors
function setRandomColors(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(generateColor());
  }
  return arr;
}
// function to choose a random index to be the picked color
function pickColor() {
  let randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
// generateColor () make a rgb(r,g,b) random string
function generateColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let rgbColor = "rgb(" + red + ", " + green + ", " + blue + ")";

  return rgbColor;
}
// isCorrect :check if the color clicked on match the picked color
function isCorrect() {
  let clickedColor = this.style.backgroundColor;
  if (clickedColor === colorPicked) {
    messageDisplay.textContent = "Correct!!";
    h1Display.style.backgroundColor = colorPicked;
    toColorPicked(colorPicked);
    resetButton.textContent = "Play Again?";
  } else {
    messageDisplay.textContent = "Try Again.";
    this.style.backgroundColor = "#232323";
  }
}
// make all boxs color match to the picked one
function toColorPicked(color) {
  for (let i = 0; i < boxs.length; i++) {
    boxs[i].style.backgroundColor = color;
  }
}
// selected functions who changes the color of the button selected
function level() {
  mode[0].classList.remove("selected");
  mode[1].classList.remove("selected");
  this.classList.add("selected");
  this.textContent === "Easy" ? (numBox = 3) : (numBox = 6);
  resetFunction();
}
