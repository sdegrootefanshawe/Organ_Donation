// JavaScript Document
(function() {
  "use strict";
  console.log("it works");

  var editUsersH2 = document.querySelectorAll(".editUsersH2");
  var form = document.querySelectorAll(form);
  var i = 0;

  function expand(){
  		//console.log('expand');
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        	TweenLite.fromTo(panel,0.5,{css:{display:"block",opacity:"1",bottom:"0%"}},{css:{display:"none",opacity:"0",bottom:"100%"}});
        } else {
        	TweenLite.fromTo(panel,1,{css:{display:"none",opacity:"0.00000000001",bottom:"100%"}},{css:{display:"block",opacity:"1",bottom:"0%"}});
        }

  }

for(i=0 ; i<editUsersH2.length ; i++){
  editUsersH2[i].addEventListener("click", expand, false);
}



})();
