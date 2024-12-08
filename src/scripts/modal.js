var modal = document.getElementById("cover");
var mdlopen = document.getElementById("modal-open");
var btnstop = document.getElementById("audio-stop");
var bgaud = document.getElementById("audio");

function togglePlay() {
  return bgaud.paused ? bgaud.play() : bgaud.pause();
};

mdlopen.onclick = function() {
  window.scrollTo(0,0);
  document.getElementById("hero").classList.remove("hidden");
  document.getElementById("petals-container").classList.remove("hidden");
  document.getElementById("c-mempelai").classList.remove("hidden");
  document.getElementById("c-waktu").classList.remove("hidden");
  document.getElementById("c-gallery").classList.remove("hidden");
  document.getElementById("c-tempat").classList.remove("hidden");
  document.getElementById("c-penutup").classList.remove("hidden");
  document.getElementById("c-ucapan").classList.remove("hidden");
  document.getElementById("c-rsvp").classList.remove("hidden");
  modal.style.top = "-110lvh";
  bgaud.play();
}

btnstop.onclick = function () {
  togglePlay()
}

