

// JavaScript Document

(function() {
	"use strict";
	console.log("SEAF Fired");
	//variables

	var ekg = document.querySelector('#ekg');
	var flatline = document.querySelector('#flatline');
	var heart = document.querySelector('#heart');

	//functions


	function ekgPump(){
		console.log("ekgPump");

		TweenLite.to("#flatline",0.1,{css:{opacity:"0"}});
		TweenLite.fromTo(ekg,0.7,{css:{opacity:"0.0000001"}},{css:{opacity:"1"}});
		TweenLite.fromTo(ekg,0.5,{drawSVG:"0%"},{drawSVG:"0% 100%"});
		TweenLite.fromTo(ekg,0.5,{drawSVG:"100%"},{drawSVG:"98% 100%",delay:1.85});
		TweenLite.fromTo(ekg,0.7,{css:{opacity:"1"}},{css:{opacity:"0"},delay:1.85});

		TweenLite.fromTo(heart,0.3,{scale:1},{scale:0.99});

		setTimeout(ekgPump2,2000);
	}

	function ekgPump2(){
		console.log("ekgPump2");

		TweenLite.fromTo(ekg,0.7,{css:{opacity:"0.0000001"}},{css:{opacity:"1"}});
		TweenLite.fromTo(ekg,0.5,{drawSVG:"0%"},{drawSVG:"0% 100%"});
		TweenLite.fromTo(ekg,0.5,{drawSVG:"100%"},{drawSVG:"98% 100%",delay:1.85});
		TweenLite.fromTo(ekg,0.7,{css:{opacity:"1"}},{css:{opacity:"0"},delay:1.85});

		setTimeout(ekgPump3,2000);
	}

	function ekgPump3(){
		console.log("ekgPump3");

		TweenLite.fromTo(ekg,0.7,{css:{opacity:"0.0000001"}},{css:{opacity:"1"}});
		TweenLite.fromTo(ekg,0.5,{drawSVG:"0%"},{drawSVG:"0% 100%"});
		TweenLite.fromTo(ekg,0.5,{drawSVG:"100%"},{drawSVG:"98% 100%",delay:1.85});
		TweenLite.fromTo(ekg,0.7,{css:{opacity:"1"}},{css:{opacity:"0"},delay:1.85});

		setTimeout(ekgPump4,2000);
	}

	function ekgPump4(){
		console.log("ekgPump4");

		TweenLite.to(ekg,0.1,{css:{opacity:"0"}});
		TweenLite.fromTo(flatline,0.7,{css:{opacity:"0.0000001"}},{css:{opacity:"1"}});
		TweenLite.fromTo(flatline,0.5,{drawSVG:"0%"},{drawSVG:"0% 100%"});
		TweenLite.fromTo(flatline,0.5,{drawSVG:"100%"},{drawSVG:"98% 100%",delay:1.85});
		TweenLite.fromTo(flatline,0.7,{css:{opacity:"1"}},{css:{opacity:"0"},delay:1.7});

		setTimeout(ekgPump,2000);

	}

	//listeners
	window.addEventListener("DOMContentLoaded",ekgPump, false);
})();
