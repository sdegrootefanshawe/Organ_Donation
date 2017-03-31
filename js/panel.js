var panel = document.querySelector("#panel");
var panelClick = document.querySelector("#panel-click");
var bannerImg = document.querySelector("#banner-image");

var width = window.innerWidth;
console.log(width);

function panelscroll() {
  tl = new TimelineLite();
  tl.to(panel, 1.5, {top: "-150%"});
}

if (width>1024) {
bannerImg.src = "images/heart_text_click.jpg";
panelClick.addEventListener('click', panelscroll, false);
}else {
bannerImg.src = "images/heart_text.jpg";
}
