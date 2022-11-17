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
// remove this invocation on production
hideFormShowWhiteBoard();
const data = {
  title: "Paragraph a English Language Course Secondary",
  paragraph: `
(123) 456-7890
NO_REPLY@EXAMPLE.COM
YOUR CITY, ST 12345
September 04, 20XX
Dear Ms. Reader,
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`,
};
startTyping(data);
