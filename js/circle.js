

// JavaScript Document

(function() {
	"use strict";
	console.log("SEAF Fired");
	//variables

	var st0000 = document.querySelectorAll(".st0000");
	var st1111 = document.querySelectorAll(".st1111");
	var million = document.querySelector("#million");
	var firstText = document.querySelector("#firstText");
	var secondText = document.querySelector("#secondText");
	var thirdText = document.querySelector("#thirdText");
	var firstPerc = document.querySelector("#firstPerc");
	var percent = document.querySelector("#percent");
	var secondCirclNum = document.querySelector("#secondCirclNum");
	var fourthText = document.querySelector("#fourthText");
	var secondCirclNum2 = document.querySelector("#secondCirclNum2");
	var fifthText = document.querySelector("#fifthText");
	var secondCirclNum3 = document.querySelector("#secondCirclNum3");

	//functions

	//TweenLite.to(number1, 1, {scrambleText:{text:"THIS IS NEW TEXT", chars:"XO", revealDelay:0.5, speed:0.3}});
	//TweenLite.to(million, 1, {scrambleText:"THIS IS NEW TEXT"});

	function draw(){
			console.log("draw");
			TweenLite.to(st1111,0.3,{css:{opacity:"1",stroke:"#42d4b6"}});
			TweenLite.to(st0000,0.3,{css:{opacity:"1"}});
			TweenLite.fromTo(firstText, 0.5, {css:{opacity:"0.0000001"}},{css:{opacity:"1"}});
			TweenLite.to(million, 1, {scrambleText:{text:"13.6", chars:"0123456789", speed:0.3}});
			TweenLite.to(firstText, 0.5, {css:{opacity:"0"}, delay:2});

			TweenLite.fromTo(st1111,1,{drawSVG:"0%"},{drawSVG:"85%",delay:3});
			TweenLite.to(firstPerc, 1, {scrambleText:{text:"85", chars:"0123456789", speed:0.3},delay:3});
			TweenLite.fromTo(secondText, 1, {css:{opacity:"0.000000001"}},{css:{opacity:"1"}, delay:3});
			TweenLite.to(secondText, 0.5, {css:{opacity:"0"}, delay:5});

			TweenLite.fromTo(thirdText, 1, {css:{opacity:"0.0000001"}},{css:{opacity:"1"}, delay:6});
			TweenLite.to(percent, 1, {scrambleText:{text:"30", chars:"0123456789", speed:0.3},delay:6});
			TweenLite.fromTo(st0000,1,{drawSVG:"0%"},{drawSVG:"0% 30%",delay:6});
			TweenLite.to(thirdText, 1, {css:{opacity:"0"}, delay:8});
			TweenLite.to(st0000,1,{drawSVG:"100% 100%",delay:8});
			TweenLite.to(st1111,1,{drawSVG:"100% 100%",delay:8});
			TweenLite.to(st0000,0.3,{css:{opacity:"0"},delay:8.5});
			TweenLite.to(st1111,0.3,{css:{opacity:"0"},delay:8.5});

			TweenLite.to(secondCirclNum, 1, {scrambleText:{text:"270", chars:"0123456789", speed:0.3},delay:10});
			TweenLite.fromTo(fourthText, 0.5, {css:{opacity:"0.0000001"}},{css:{opacity:"1"}, delay:10});
			TweenLite.to(fourthText, 0.5, {css:{opacity:"0"}, delay:12});

			TweenLite.fromTo(fifthText,0.5,{css:{opacity:"0.0000001"}},{css:{opacity:"1"},delay:13});
			TweenLite.to(secondCirclNum2,1,{scrambleText:{text:"70", chars:"0123456789", speed:0.3},delay:13});
			TweenLite.to(st1111,0.3,{css:{opacity:"1",stroke:"#eeba05"},delay:13});
			TweenLite.fromTo(st1111,1,{drawSVG:"0%"},{drawSVG:"0% 70%",delay:13});
			TweenLite.to(fifthText, 0.5, {css:{opacity:"0"}, delay:15});

			TweenLite.fromTo(sixthText, 0.5, {css:{opacity:"0.0000001"}},{css:{opacity:"1"}, delay:16});
			TweenLite.to(secondCirclNum3, 1, {scrambleText:{text:"35", chars:"0123456789", speed:0.3},delay:16});
			TweenLite.to(st0000,0.3,{css:{opacity:"1",stroke:"#ed1c24"},delay:16});
			TweenLite.fromTo(st0000,1,{drawSVG:"0%"},{drawSVG:"0% 35%",delay:16});
			TweenLite.to(sixthText, 0.5, {css:{opacity:"0"}, delay:18});
			TweenLite.to(st0000,1,{drawSVG:"100% 100%",delay:18});
			TweenLite.to(st1111,1,{drawSVG:"100% 100%",delay:18});
			TweenLite.to(st0000,0.3,{css:{opacity:"0"},delay:18.5});
			TweenLite.to(st1111,0.3,{css:{opacity:"0"},delay:18.5});

			setTimeout(draw,20000);

		}

	//listeners
	window.addEventListener("DOMContentLoaded",draw, false);
})();
