function generateImage() {
  const btn = document.getElementById("generateImage");
  const generateImageContainer = document.getElementById(
    "generateImageContainer"
  );
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.querySelector("textarea#title");

    generateImageContainer.style.display = "block";
    generateImageContainer.scrollIntoView();
    document.getElementById("titleOutput").innerHTML = title.value;
    // alert(title.value);

    function changeColor() {
      const bgAndText = document.querySelectorAll(".change-color");
      document.querySelectorAll("button.image-colors").forEach((e) => {
        const ele = e;
        ele.onclick = () => {
          console.log(ele.getAttribute("data-color"));
          bgAndText[0].style.backgroundColor = ele.getAttribute("data-color");
          bgAndText[1].style.color = ele.getAttribute("data-color");
        };
      });
    }
    changeColor();

    function exportImage() {
      document.getElementById("exportImage").onclick = (e) => {
        e.preventDefault();
        const img = document.getElementById("imageContainer");
        let getCanvas;
        html2canvas(img).then((canvas) => {
          console.log(canvas);
          getCanvas = canvas;

          const a = document.createElement("a");
          a.href = getCanvas.toDataURL();
          a.download = title.value;
          a.click();
        });
      };
    }
    exportImage();
  });
}
