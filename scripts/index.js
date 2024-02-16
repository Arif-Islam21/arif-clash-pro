document.getElementById("play-now").addEventListener("click", function () {
  startGame();
});

document.addEventListener("keyup", function (e) {
  if (e.key === displayElementAlpha()) {
    startGame();
    removeBackgroundColor(e.key);

    buttonValueIncrement("score-value");
  }
});
