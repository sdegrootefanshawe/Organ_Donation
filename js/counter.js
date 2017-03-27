var left = document.querySelector("#left");
var right = document.querySelector("#right");
var plural = document.querySelector("#plural");
var tick = 0;
var rVal = 0;
var lVal = 0;


window.setInterval(function(){
  tick++;
  if (tick>119) {
    tick = 0;
    rVal++;
    right.innerHTML = rVal;
    if (rVal>9) {
      rVal = 0;
      right.innerHTML = rVal;
      lVal++;
      left.innerHTML = lVal;
    }
  }
  if (rVal>1) {
    plural.innerHTML = "times since you've<br>been here";
  }
}, 1000);
