function animateParagraph(paragraph, speed) {
  const txtElement = document.getElementById("paragraphBox");
  const typingElement = document.querySelector("#paragraphPen");
  const handWritingContainer = document.getElementById("handWritingContainer");
  const whiteboardContainer = document.getElementById("whiteboardContainer");

  const words = paragraph + " ";

  let txt = "";
  function type() {
    txt = words.substring(0, txt.length + 1);

    if (txt.length < words.length) {
      txtElement.innerHTML = txt;

      setTimeout(() => type(), speed);
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

function animateTitle(title, paragraph, speed) {
  const txtElement = document.getElementById("titleBox");
  const typingElement = document.querySelector("#titlePen");
  const titleContainer = document.getElementById("titleContainer");

  const words = title + " ";

  let txt = "";
  function type() {
    txt = words.substring(0, txt.length + 1);

    if (txt.length < words.length) {
      txtElement.innerHTML = txt;

      setTimeout(() => type(), speed);
    }
    if (txt.length === words.length) {
      typingElement.className = "hidden";
      animateParagraph(paragraph, speed);
    }
  }
  type();
  titleContainer.style.display = "block";
}

function startTyping(formData) {
  // distructure
  const { title, paragraph } = formData;

  const speed = formData.speed || 200;

  if (title && paragraph) {
    animateTitle(title, paragraph, speed);
  } else {
    alert("Empty input is not allowed.");
  }

  // fullScreen();
  window.scrollTo(0, 0);
}
