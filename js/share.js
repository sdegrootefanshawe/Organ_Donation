var share = document.querySelector("#share");
var sharables = document.querySelector("#sharables");
var close = document.querySelector("#closeit");

function open() {
  tl = new TimelineLite();
  tl.to(sharables, 0, {display: "block"});
  tl.to(sharables, 0.5, {opacity: 1});
}

function closed() {
  tl.to(sharables, 0.5, {opacity: 0});
  tl.to(sharables, 0, {display: "none"});
}

share.addEventListener("click", open, false);
close.addEventListener("click", closed, false);
