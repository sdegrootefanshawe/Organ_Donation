var panel = document.querySelector("#panel");
var panelClick = document.querySelector("#panel-click");
// var body = document.querySelector(body);


function panelscroll() {
  tl = new TimelineLite();
  tl.to(panel, 1.5, {top: "-150%"});
}

panelClick.addEventListener('click', panelscroll, false);
