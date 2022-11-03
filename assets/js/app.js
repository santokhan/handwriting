const handWriting = {
  typing(props) {
    let { timer } = props;
    let increment = timer;
    let split = props.text.split("");
    let len = split.length;
    document.getElementById("typing").innerHTML = "";
    split.forEach((e, i) => {
      if (i + 1 === len) {
        //
      }
      setTimeout(() => {
        document.getElementById("typing").innerHTML += e;
      }, timer);
      timer = timer + increment;
    });
  },
  parseTextareaForCKEditor() {
    const val = document.querySelectorAll("textarea");
    if (val[0]) {
      console.log(val[0].value);
    }
  },
  stripe() {
    const space = 28;

    let total = Math.round(window.innerHeight / space);
    for (let i = 0; i <= total + total; i++) {
      document.getElementById(
        "stripe"
      ).innerHTML += `<hr style="margin-top:${space}px"/>`;
    }
  },
  recorder() {
    let btn = document.querySelector("#recordBtn");
    btn.addEventListener("click", async function () {
      let stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      //needed for better browser support
      const mime = MediaRecorder.isTypeSupported("video/webm; codecs=vp9")
        ? "video/webm; codecs=vp9"
        : "video/webm";
      let mediaRecorder = new MediaRecorder(stream, {
        mimeType: mime,
      });
      let chunks = [];
      mediaRecorder.addEventListener("dataavailable", function (e) {
        chunks.push(e.data);
      });
      mediaRecorder.addEventListener("stop", function () {
        let blob = new Blob(chunks, {
          type: chunks[0].type,
        });
        let url = URL.createObjectURL(blob);
        let video = document.querySelector("#renderVideo");
        video.src = url;
        let a = document.createElement("a");
        a.href = url;
        a.download = "video.webm";
        a.click();
      });
      //we have to start the recorder manually
      mediaRecorder.start();
    });
  },
  async screenRecorderFunc() {
    let stream = await navigator.mediaDevices.getDisplayMedia({
      audio: true,
      video: { mediaSource: "screen" },
    });
    //needed for better browser support
    const mime = MediaRecorder.isTypeSupported("video/webm; codecs=vp9")
      ? "video/webm; codecs=vp9"
      : "video/webm";
    let mediaRecorder = new MediaRecorder(stream, {
      mimeType: mime,
    });
    let chunks = [];
    mediaRecorder.addEventListener("dataavailable", function (e) {
      chunks.push(e.data);
    });
    mediaRecorder.addEventListener("start", function (e) {
      document.getElementById("typingBox").requestFullscreen();
    });
    mediaRecorder.addEventListener("stop", function () {
      document.exitFullscreen();

      let blob = new Blob(chunks, {
        type: chunks[0].type,
      });
      let url = URL.createObjectURL(blob);
      let video = document.querySelector("#renderVideo");
      video.src = url;
      let a = document.createElement("a");
      a.href = url;
      a.download = "video.webm";
      a.click();
    });
    //we have to start the recorder manually
    mediaRecorder.start();
  },
};

window.onload = () => {
  handWriting.stripe();

  document.getElementById("animateForm").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    const formData = new FormData(e.target);
    const writing = formData.get("writing");
    if (writing) {
      console.log(writing);
      document.getElementById("hand").classList.add("hand");
      handWriting.typing({
        text: writing,
        timer: 120,
      });
      handWriting.screenRecorderFunc();
    }
  });
};
