document.getElementById("play-now").addEventListener("click", function () {
  showElementById("playground-section");
  hideElementById("home-section");

  const displayAlpha = document.getElementById("display-alpha");
  displayAlpha.innerText = alphabateGenerator();
  backgroundColor(alphabateGenerator());
});
