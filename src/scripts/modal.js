var modal = document.getElementById("cover");
var mdlopen = document.getElementById("modal-open");
var btnstop = document.getElementById("audio-stop");
var bgaud = document.getElementById("audio");

function togglePlay() {
  return bgaud.paused ? bgaud.play() : bgaud.pause();
};

mdlopen.onclick = function() {
  modal.style.top = "-110lvh";
  document.getElementById("hero").classList.remove("fixed");
  document.getElementById("content").classList.remove("fixed");
  bgaud.play()
}

btnstop.onclick = function () {
  togglePlay()
}


