

// JavaScript Document

(function() {
	"use strict";
	console.log("SEAF Fired");
	//variables

	var ekg = document.querySelector('#line');
	var flatline = document.querySelector('#flatline');

	//functions

	function ekgPump(){
		console.log("ekgPump");

		TweenLite.to("#flatline",0.1,{css:{opacity:"0"}});
		TweenLite.fromTo(ekg,1,{css:{opacity:"0.0000001"}},{css:{opacity:"1"}});
		TweenLite.fromTo(ekg,0.5,{drawSVG:"0%"},{drawSVG:"30% 100%"});
		TweenLite.fromTo(ekg,1,{css:{opacity:"1"}},{css:{opacity:"0",delay:1}});

		setTimeout(ekgPump2,2000);
	}

	function ekgPump2(){
		console.log("ekgPump2");

		TweenLite.fromTo(ekg,1,{css:{opacity:"0.0000001"}},{css:{opacity:"1"}});
		TweenLite.fromTo(ekg,0.5,{drawSVG:"0%"},{drawSVG:"30% 100%"});
		TweenLite.fromTo(ekg,1,{css:{opacity:"1"}},{css:{opacity:"0",delay:1}});

		setTimeout(ekgPump3,2000);
	}

	function ekgPump3(){
		console.log("ekgPump3");

		TweenLite.fromTo(ekg,1,{css:{opacity:"0.0000001"}},{css:{opacity:"1"}});
		TweenLite.fromTo(ekg,0.5,{drawSVG:"0%"},{drawSVG:"30% 100%"});
		TweenLite.fromTo(ekg,1,{css:{opacity:"1"}},{css:{opacity:"0",delay:1}});

		setTimeout(ekgPump4,2000);
	}

	function ekgPump4(){
		console.log("ekgPump4");

		TweenLite.fromTo("#flatline",2,{css:{opacity:"0.0000001"}},{css:{opacity:"1"}});
		TweenLite.fromTo("#flatline",1,{drawSVG:"0%"},{drawSVG:"30% 100%"});
		TweenLite.fromTo("#flatline",1,{css:{opacity:"1"}},{css:{opacity:"0",delay:2}});

		setTimeout(ekgPump,2000);

	}

	//listeners
	window.addEventListener("DOMContentLoaded",ekgPump, false);
})();
