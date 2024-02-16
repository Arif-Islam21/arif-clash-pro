function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function alphabateGenerator() {
  // get all the alpha
  const alphabate = "abcdefghijklmnopqrstuvwxyz";
  const alpha = alphabate.split("");
  // generate random number
  const randomNum = Math.random() * 25;
  const random = Math.round(randomNum);

  const randomAlpha = alpha[random];
  return randomAlpha;
}

// background color generator
function setBackgroundColor(elementId) {
  const element = document.getElementById(displayElementAlpha());
  element.classList.add("bg-purple-500");
}
function removeBackgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-purple-500");
}

function displayElementAlpha() {
  const displayElement = document.getElementById("display-alpha");
  const displayText = displayElement.innerText;
  const display = displayText.toLowerCase();
  return display;
}
function startGame() {
  showElementById("playground-section");
  hideElementById("home-section");

  const displayAlpha = document.getElementById("display-alpha");
  displayAlpha.innerText = alphabateGenerator();
  setBackgroundColor("display-alpha");
}
