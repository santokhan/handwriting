class TypeWriter {
  constructor(txtElement, words, typingElement) {
    this.txtElement = txtElement;
    this.words = words;
    this.typingElement = typingElement;

    // pre define
    this.txt = "";
    this.type();
  }
  type() {
    this.txt = this.words.substring(0, this.txt.length + 1);

    if (this.txt.length < this.words.length) {
      this.txtElement.innerHTML = this.txt;

      let typeSpeed = 300;

      // this.typingElement.className = "fas fa-pencil-alt writing-animation";

      setTimeout(() => this.type(), typeSpeed);
    }

    if (this.txt.length === this.words.length) {
      this.typingElement.className = "hidden";
    }
  }
}

function animateParagraph(paragraph) {
  const txtElement = document.getElementById("paragraphBox");
  const typingElement = document.querySelector("#paragraphPen");
  const handWritingContainer = document.getElementById("handWritingContainer");

  const words = paragraph;

  let txt = "";
  function type() {
    txt = words.substring(0, txt.length + 1);

    if (txt.length < words.length) {
      txtElement.innerHTML = txt;

      setTimeout(() => type(), 50);
    }

    if (txt.length === words.length) {
      typingElement.className = "hidden";
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
}
