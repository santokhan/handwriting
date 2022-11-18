function fullScreen() {
  const btnFScreen = document.getElementById("fullScreen");
  btnFScreen.addEventListener("click", function () {
    document.getElementById("whiteboardContainer").requestFullscreen();
  });
  btnFScreen.click();
}
function exitFullScreen() {
  if (document.fullscreenElement) {
    document
      .exitFullscreen()
      .then(() => console.log("Document Exited from Full screen mode"))
      .catch((err) => console.error(err));
  }
}
