function hiddenFormContainer() {
  document.getElementById("inputFormContainer").style.display = "none";
}
function showWhiteBoard() {
  document.getElementById("whiteboardContainer").style.display = "block";
}
function hideFormShowWhiteBoard() {
  hiddenFormContainer();
  showWhiteBoard();
}

function submitForm() {
  document.getElementById("animateForm").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    const formData = new FormData(e.target);
    const data = {
      title: formData.get("title"),
      paragraph: formData.get("paragraph"),
    };

    hideFormShowWhiteBoard();
    screenRecorderFunc(data);
  });
}


