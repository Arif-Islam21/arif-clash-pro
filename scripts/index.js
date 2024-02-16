document.getElementById("play-now").addEventListener("click", function () {
  startGame();
});

document.addEventListener("keyup", function (e) {
  if (e.key === displayElementAlpha()) {
    startGame();
    removeBackgroundColor(e.key);

    buttonValueIncrement("score-value");
  } else if (e.key === "Escape") {
    showElementById("home-section");
    hideElementById("playground-section");
  } else {
    btnValueDecrement("life-value");
    const lifeValue = textToNumber("life-value");
    if (lifeValue === 0) {
      showElementById("score-card");
      hideElementById("playground-section");
      const lastScore = document.getElementById("score-value");
      const lastScoreValue = lastScore.innerText;
      document.getElementById("your-score").innerText = lastScoreValue;

      const currentAlphabate = document.getElementById("display-alpha");
      const currentAlpha = currentAlphabate.innerText;
      removeBackgroundColor(currentAlpha);
    }
  }
});

document.getElementById("play-again").addEventListener("click", function (e) {
  startGame();

  document.getElementById("life-value").innerText = 5;
  document.getElementById("score-value").innerText = 0;
});
