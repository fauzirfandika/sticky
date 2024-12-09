var modal = document.getElementById("cover");
var mdlopen = document.getElementById("modal-open");
var btnstop = document.getElementById("audio-stop");
var bgaud = document.getElementById("audio");

function togglePlay() {
  return bgaud.paused ? bgaud.play() : bgaud.pause();
};

mdlopen.onclick = function() {
  window.scrollTo(0,0);
  document.getElementById("content-container").classList.remove("hidden");
  modal.style.top = "-110lvh";
  bgaud.play();
}

btnstop.onclick = function () {
  togglePlay()
}

