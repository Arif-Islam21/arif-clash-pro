document.getElementById("play-now").addEventListener("click", function () {
  startGame();
});

document.addEventListener("keyup", function (e) {
  if (e.key === displayElementAlpha()) {
    startGame();
    removeBackgroundColor(e.key);

    buttonValueIncrement("score-value");
  } else {
    btnValueDecrement("life-value");
    const lifeValue = textToNumber("life-value");
    if (lifeValue === 0) {
      showElementById("score-card");
      hideElementById("playground-section");
    }
  }
});
