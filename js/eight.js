var guy = document.querySelectorAll(".guy");

function check8() {
  var map = document.querySelector(".eight-lives");
  var height = window.scrollY;
  var mapoff = map.offsetTop;

  if (mapoff < height) {
    runanim8();
  }
}

function runanim8() {
  var tl = new TimelineLite();

  tl.to(guy9, 2, {left: "86.5%"});
  tl.to(guy1, 1, {opacity: 1}, "-=2");
  tl.to(guy2, 1, {opacity: 1}, "-=1.8");
  tl.to(guy3, 1, {opacity: 1}, "-=1.6");
  tl.to(guy4, 1, {opacity: 1}, "-=1.4");
  tl.to(guy5, 1, {opacity: 1}, "-=1.2");
  tl.to(guy6, 1, {opacity: 1}, "-=1.0");
  tl.to(guy7, 1, {opacity: 1}, "-=0.8");
}

window.addEventListener('scroll', check8, false);
