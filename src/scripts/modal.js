var modal = document.getElementById("cover");
var mdlopen = document.getElementById("modal-open");
var btnstop = document.getElementById("audio-stop");
var bgaud = document.getElementById("audio");

function togglePlay() {
  return bgaud.paused ? bgaud.play() : bgaud.pause();
};

mdlopen.onclick = function() {
  window.scrollTo(0,0);
  document.getElementById("hero").classList.remove("fixed");
  document.getElementById("petals-container").classList.remove("fixed");
  document.getElementById("c-mempelai").classList.remove("fixed");
  document.getElementById("c-waktu").classList.remove("fixed");
  document.getElementById("c-gallery").classList.remove("fixed");
  document.getElementById("c-tempat").classList.remove("fixed");
  document.getElementById("c-penutup").classList.remove("fixed");
  modal.style.top = "-110lvh";
}

btnstop.onclick = function () {
  togglePlay()
}


