var pop = document.querySelectorAll(".pop");

var time = 0.5;
var scale = 0.98;


function runanim() {
  var tl = new TimelineMax();
  tl.to(one, time, {scale: scale, opacity: 1});
  tl.to(two, time, {scale: scale, opacity: 1}, "-=0.27");
  tl.to(three, time, {scale: scale, opacity: 1}, "-=0.27");
  tl.to(four, time, {scale: scale, opacity: 1}, "-=0.27");
  tl.to(five, time, {scale: scale, opacity: 1}, "-=0.27");
  tl.to(six, time, {scale: scale, opacity: 1}, "-=0.27");
  tl.to(seven, time, {scale: scale, opacity: 1}, "-=0.27");
  tl.to(eight, time, {scale: scale, opacity: 1}, "-=0.27");
  tl.to(nine, time, {scale: scale, opacity: 1}, "-=0.27");
  tl.to(ten, time, {scale: scale, opacity: 1}, "-=0.27");
  tl.to(eleven, time, {scale: scale, opacity: 1}, "-=0.27");
  tl.to(twelve, time, {scale: scale, opacity: 1}, "-=0.27");
  tl.to(thirteen, time, {scale: scale, opacity: 1}, "-=0.27");
  tl.to(fourteen, time, {scale: scale, opacity: 1}, "-=0.27");
  tl.to(fifteen, time, {scale: scale, opacity: 1}, "-=0.27");
  tl.to(sixteen, time, {scale: scale, opacity: 1}, "-=0.27");
}

window.addEventListener('load', runanim, false);
