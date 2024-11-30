var modal = document.getElementById("cover");
var btn = document.getElementById("mybutt");
var mus = document.getElementById("audio");

btn.onclick = function() {
  modal.style.top = "-110lvh";
  document.getElementById("hero").classList.remove("fixed");
  document.getElementById("content").classList.remove("fixed");
  mus.play()
}
