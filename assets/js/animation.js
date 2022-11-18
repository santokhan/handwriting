function animateParagraph(paragraph) {
  const txtElement = document.getElementById("paragraphBox");
  const typingElement = document.querySelector("#paragraphPen");
  const handWritingContainer = document.getElementById("handWritingContainer");
  const whiteboardContainer = document.getElementById("whiteboardContainer");

  const words = paragraph;

  let txt = "";
  function type() {
    txt = words.substring(0, txt.length + 1);

    if (txt.length < words.length) {
      txtElement.innerHTML = txt;

      setTimeout(() => type(), 30);
      /**
       * MOST IMPORTANT
       * Scroll **whiteboardContainer** if **handWritingContainer.scrollHeight > window.innerheight**
       */
      if (window.innerHeight < handWritingContainer.scrollHeight + 200) {
        whiteboardContainer.scrollTop += 100;
      }
    }

    if (txt.length === words.length) {
      typingElement.className = "hidden";

      // Stop recording and download on animation end
      mediaRecorder.stop();
    }
  }
  type();
  handWritingContainer.style.display = "block";
}

function animateTitle(title, paragraph) {
  const txtElement = document.getElementById("titleBox");
  const typingElement = document.querySelector("#titlePen");
  const titleContainer = document.getElementById("titleContainer");

  const words = title;

  let txt = "";
  function type() {
    txt = words.substring(0, txt.length + 1);

    if (txt.length < words.length) {
      txtElement.innerHTML = txt;

      setTimeout(() => type(), 50);
    }

    if (txt.length === words.length) {
      typingElement.className = "hidden";
      animateParagraph(paragraph);
    }
  }
  type();
  titleContainer.style.display = "block";
}

function startTyping(formData) {
  // distructure
  const { title, paragraph } = formData;

  animateTitle(title, paragraph);

  fullScreen();
  window.scrollTo(0, 0);
}
