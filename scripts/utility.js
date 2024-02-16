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
function backgroundColor(elementId) {
  const displayElement = document.getElementById("display-alpha");
  const displayText = displayElement.innerText;
  const display = displayText.toLowerCase();
  const element = document.getElementById(display);
  element.classList.add("bg-purple-500");
}
