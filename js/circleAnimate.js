

// JavaScript Document

(function() {
	"use strict";
	console.log("SEAF Fired");
	//variables

	var httpRequest;
  var textContent = document.querySelector('#text-content');
	var textStyle = document.querySelector('head style');
  var firstCircleContent = document.querySelector('#firstCircleContent');
  var secondCircleContent = document.querySelector('#secondCircleContent');
  var st0 = document.querySelectorAll(".st0");
  var st1 = document.querySelectorAll(".st1");
  var whiteBG = document.querySelector(".white-bg");
  console.log(textStyle);

	//functions

	// httpRequest functions

	function circleTextOne(){
		//console.log('circleTextOne');

		 httpRequest = new XMLHttpRequest();

    		if (!httpRequest) {
      		alert('Giving up :( Cannot create an XMLHTTP instance');
      		return false;
    		}

    		httpRequest.onreadystatechange = popContent1;
    		httpRequest.open('GET','admin/phpscripts/ajaxQuery.php'+ '?section=content_circle1_text1,content_circle1_stat,content_circle1_text2');
    		httpRequest.send();

	   setTimeout(circleTextTwo,3000);
	}

	function circleTextTwo(){
		//console.log('circleTextTwo');

		httpRequest = new XMLHttpRequest();

    		if (!httpRequest) {
      		alert('Giving up :( Cannot create an XMLHTTP instance');
      		return false;
    		}

    		httpRequest.onreadystatechange = popContent2;
    		httpRequest.open('GET','admin/phpscripts/ajaxQuery.php'+ '?section=content_circle2_text1,content_circle2_stat,content_circle2_text2');
    		httpRequest.send();

		setTimeout(circleTextThree,3000);
	}

	function circleTextThree(){
		//console.log('circleTextThree');

		httpRequest = new XMLHttpRequest();

    		if (!httpRequest) {
      		alert('Giving up :( Cannot create an XMLHTTP instance');
      		return false;
    		}

    		httpRequest.onreadystatechange = popContent3;
    		httpRequest.open('GET','admin/phpscripts/ajaxQuery.php'+ '?section=content_circle3_text1,content_circle3_stat,content_circle3_text2');
    		httpRequest.send();

		setTimeout(circleTextFour,3000);
	}

	function circleTextFour(){
		//console.log('circleText4');

		httpRequest = new XMLHttpRequest();

    		if (!httpRequest) {
      		alert('Giving up :( Cannot create an XMLHTTP instance');
      		return false;
    		}

    		httpRequest.onreadystatechange = popContent4;
    		httpRequest.open('GET','admin/phpscripts/ajaxQuery.php'+ '?section=content_circle4_text1,content_circle4_stat,content_circle4_text2');
    		httpRequest.send();

		setTimeout(circleTextFive,3000);
	}

	function circleTextFive(){
		//console.log('circleText5');

		httpRequest = new XMLHttpRequest();

    		if (!httpRequest) {
      		alert('Giving up :( Cannot create an XMLHTTP instance');
      		return false;
    		}

    		httpRequest.onreadystatechange = popContent5;
    		httpRequest.open('GET','admin/phpscripts/ajaxQuery.php'+ '?section=content_circle5_text1,content_circle5_stat,content_circle5_text2');
    		httpRequest.send();

		setTimeout(circleTextSix,3000);
	}

	function circleTextSix(){
		//console.log('circleText6');

		httpRequest = new XMLHttpRequest();

    		if (!httpRequest) {
      		alert('Giving up :( Cannot create an XMLHTTP instance');
      		return false;
    		}

    		httpRequest.onreadystatechange = popContent6;
    		httpRequest.open('GET','admin/phpscripts/ajaxQuery.php'+ '?section=content_circle6_text1,content_circle6_stat,content_circle6_text2');
    		httpRequest.send();

		setTimeout(circleTextOne,3000);
	}

	// content Pop functions

	function popContent1(){

		if (httpRequest.readyState === XMLHttpRequest.DONE) {
      		if (httpRequest.status === 200) {
      			var content = JSON.parse(httpRequest.responseText);
        		//console.log(content.content_crclinfo_one);

            textStyle.innerHTML = ".white-bg{height:465px;} #text-content p{padding-top:49% !important;text-align:center;}@media (min-width: 375px){.white-bg{height:468px;}}@media (min-width: 425px){.white-bg{height:509px;} #text-content p{padding-top:51% !important;}}@media (min-width: 768px){.white-bg{height:445px;} #text-content p{padding-top:25% !important;}}@media (min-width: 1024px){.white-bg {margin-bottom:0%;margin-top:0%;margin-bottom:0%;} #text-content p{padding-top:40% !important;}}@media (min-width: 1440px){.white-bg{margin-bottom:0%;} #text-content p{padding-top:35% !important;font-size: 50px !important;}}";

            //textStyle.setAttribute("style", "padding-top:35% !important;text-align:center;media=(min-width: 425px){padding-top:31% !important;}media=(min-width: 768px){padding-top:10% !important;}media=(min-width: 1024px){padding-top:40% !important;}media=(min-width: 1440px){padding-top:34.5% !important;font-size: 50px !important;}");

        		firstCircleContent.innerHTML = content.content_circle1_text1;
            var scramble = document.querySelector("#scramble");
            scramble.innerHTML = content.content_circle1_stat
            secondCircleContent.innerHTML = content.content_circle1_text2;

            TweenLite.to(st1,0.3,{css:{opacity:"0",stroke:"#42d4b6"}});
            TweenLite.to(st0,0.3,{css:{opacity:"0"}});
        		TweenLite.fromTo(textContent, 0.5, {css:{opacity:"0.0000001"}},{css:{opacity:"1"}});
				    TweenLite.to(scramble, 1, {scrambleText:{text:content.content_circle1_stat, chars:"0123456789", speed:0.3}});
				    TweenLite.to(textContent, 0.5, {css:{opacity:"0"}, delay:2});
      		} else {
        		alert('There was a problem with the request.');
      		}
    	}

	}

	function popContent2(){

		if (httpRequest.readyState === XMLHttpRequest.DONE) {
      		if (httpRequest.status === 200) {
      			var content = JSON.parse(httpRequest.responseText);
        		//console.log(content.content_crclinfo_one);

            textStyle.innerHTML = ".white-bg{height:450px; !important;} .white-bg svg{padding-top:15%;} #text-content p{padding-top:48.5% !important;text-align:center;} @media (min-width:375px){.white-bg{margin-bottom:4.5%;}} @media (min-width: 425px){.white-bg{height:509px;margin-bottom:0%;} #text-content p{padding-top:50% !important;}}@media (min-width: 768px){.white-bg{margin-bottom:15%;} .white-bg{height:330px;}.white-bg svg {height:400px;margin-top:3%;padding-top:0%;} #text-content p{padding-top:24% !important;}}@media (min-width: 1024px){.white-bg{margin-bottom:0%;} .white-bg svg{padding-top:7%;} #text-content p{padding-top:36.5% !important;}}@media (min-width: 1440px){.white-bg svg {height:600px;padding-bottom:4.5%;}#text-content p{padding-top:33.5% !important;font-size: 50px !important;}}";

        		firstCircleContent.innerHTML = content.content_circle2_text1;
            var scramble = document.querySelector("#scramble");
            secondCircleContent.innerHTML = content.content_circle2_text2;
            var stat = "0% "+content.content_circle2_stat+"%"

            TweenLite.to(st1,0.3,{css:{opacity:"1",stroke:"#42d4b6"}});
            TweenLite.fromTo(st1,1,{drawSVG:"0%"},{drawSVG:stat});

        		TweenLite.fromTo(textContent, 0.5, {css:{opacity:"0.0000001"}},{css:{opacity:"1"}});
				    TweenLite.to(scramble, 1, {scrambleText:{text:content.content_circle2_stat, chars:"0123456789", speed:0.3}});
				    TweenLite.to(textContent, 0.5, {css:{opacity:"0"}, delay:2});
      		} else {
        		alert('There was a problem with the request.');
      		}
    	}

	}

	function popContent3(){

		if (httpRequest.readyState === XMLHttpRequest.DONE) {
      		if (httpRequest.status === 200) {
      			var content = JSON.parse(httpRequest.responseText);
        		//console.log(content.content_crclinfo_one);

            textStyle.innerHTML = ".white-bg svg{margin-top:15%;} #text-content p{padding-top:48% !important;text-align:center;} @media (min-width:375px){.white-bg{margin-bottom:15%;}} @media (min-width: 425px){.white-bg{margin-bottom:15%;} #text-content p{padding-top:49% !important;}}@media (min-width: 768px){.white-bg{height:330px;}.white-bg svg {height:400px;margin-top:3%;} #text-content p{padding-top:25% !important;}}@media (min-width: 1024px){.white-bg{margin-bottom:0%;} .white-bg svg{padding-top:7%;} #text-content p{padding-top:36.5% !important;}}@media (min-width: 1440px){#text-content p{padding-top:34.5% !important;font-size: 50px !important;}}@media (min-width: 1440px){.white-bg svg {height:600px;padding-bottom:4.5%;}#text-content p{padding-top:33.5% !important;font-size: 50px !important;}}";

        		firstCircleContent.innerHTML = content.content_circle3_text1;
            var scramble = document.querySelector("#scramble");
            secondCircleContent.innerHTML = content.content_circle3_text2;
            var stat = "0% "+content.content_circle3_stat+"%"

            TweenLite.to(st0,0.3,{css:{opacity:"1"}});
            TweenLite.fromTo(st0,1,{drawSVG:"0%"},{drawSVG:stat});
            TweenLite.to(st0,1,{drawSVG:"100% 100%",delay:2});
            TweenLite.to(st1,1,{drawSVG:"100% 100%",delay:2});
            TweenLite.to(st0,0.3,{css:{opacity:"0"},delay:2.1});
            TweenLite.to(st1,0.3,{css:{opacity:"0"},delay:2.1});

        		TweenLite.fromTo(textContent, 0.5, {css:{opacity:"0.0000001"}},{css:{opacity:"1"}});
				    TweenLite.to(scramble, 1, {scrambleText:{text:content.content_circle3_stat, chars:"0123456789", speed:0.3}});
				    TweenLite.to(textContent, 0.5, {css:{opacity:"0"}, delay:2});
      		} else {
        		alert('There was a problem with the request.');
      		}
    	}

	}

	function popContent4(){

		if (httpRequest.readyState === XMLHttpRequest.DONE) {
      		if (httpRequest.status === 200) {
      			var content = JSON.parse(httpRequest.responseText);
        		//console.log(content.content_crclinfo_one);

            textStyle.innerHTML = ".white-bg{height:467px; !important;} #text-content p{padding-top:53%;} @media (min-width: 425px){.white-bg{height:509px;}#text-content p{padding-top:53%;}}@media (min-width: 768px){.white-bg{height:445px;}#text-content p{padding-top:25% !important;}}@media (min-width: 1024px){.white-bg {margin-bottom:0%;margin-top:0%;margin-bottom:0%;} #text-content p{padding-top:39.5% !important;}}@media (min-width: 1440px){.white-bg{margin-bottom:0%;} #text-content p{padding-top:35% !important;font-size: 50px !important;}}";

        		firstCircleContent.innerHTML = content.content_circle4_text1;
            var scramble = document.querySelector("#scramble");
            secondCircleContent.innerHTML = content.content_circle4_text2;

        		TweenLite.fromTo(textContent, 0.5, {css:{opacity:"0.0000001"}},{css:{opacity:"1"}});
				TweenLite.to(scramble, 1, {scrambleText:{text:content.content_circle4_stat, chars:"0123456789", speed:0.3}});
				TweenLite.to(textContent, 0.5, {css:{opacity:"0"}, delay:2});
      		} else {
        		alert('There was a problem with the request.');
      		}
    	}

	}

	function popContent5(){

		if (httpRequest.readyState === XMLHttpRequest.DONE) {
      		if (httpRequest.status === 200) {
      			var content = JSON.parse(httpRequest.responseText);
        		//console.log(content.content_crclinfo_one);

            textStyle.innerHTML = ".white-bg{height:467px; !important;}.white-bg svg{padding-top:14.5%;} #text-content p{padding-top:42%;}@media (min-width: 425px){.white-bg{height:509px;}#text-content p{padding-top:47%;}}@media (min-width: 768px){.white-bg{margin-bottom:15%;} .white-bg{height:330px;}.white-bg svg {height:400px;margin-top:3%;padding-top:0%;} #text-content p{padding-top:23.5% !important;}}@media (min-width: 1024px){.white-bg{margin-bottom:0%;} .white-bg svg{padding-top:7%;} #text-content p{padding-top:36.5% !important;}}@media (min-width: 1440px){.white-bg svg {height:600px;padding-bottom:4.5%;}#text-content p{padding-top:32% !important;font-size: 50px !important;}}";

        		firstCircleContent.innerHTML = content.content_circle5_text1;
            var scramble = document.querySelector("#scramble");
            secondCircleContent.innerHTML = content.content_circle5_text2;
            var stat = "0% "+content.content_circle5_stat+"%"

            TweenLite.to(st1,0.3,{css:{opacity:"1",stroke:"#eeba05"}});
            TweenLite.fromTo(st1,1,{drawSVG:"0%"},{drawSVG:stat});

        		TweenLite.fromTo(textContent, 0.5, {css:{opacity:"0.0000001"}},{css:{opacity:"1"}});
				    TweenLite.to(scramble, 1, {scrambleText:{text:content.content_circle5_stat, chars:"0123456789", speed:0.3}});
				    TweenLite.to(textContent, 0.5, {css:{opacity:"0"}, delay:2});
      		} else {
        		alert('There was a problem with the request.');
      		}
    	}

	}

	function popContent6(){

		if (httpRequest.readyState === XMLHttpRequest.DONE) {
      		if (httpRequest.status === 200) {
      			var content = JSON.parse(httpRequest.responseText);
        		//console.log(content.content_crclinfo_one);

            textStyle.innerHTML = ".white-bg{height:467px; !important;}.white-bg svg{padding-top:14.5%;} #text-content p{padding-top:49%;}@media (min-width: 425px){.white-bg{height:509px;}#text-content p{padding-top:49%;}}@media (min-width: 768px){.white-bg{margin-bottom:15%;}.white-bg{height:330px;}.white-bg svg {height:400px;margin-top:3%;padding-top:0%;} #text-content p{padding-top:23% !important;}}@media (min-width: 1024px){.white-bg{margin-bottom:0%;} .white-bg svg{padding-top:7%;} #text-content p{padding-top:36.5% !important;}}@media (min-width: 1440px){.white-bg svg {height:600px;padding-bottom:4.5%;}#text-content p{padding-top:34% !important;font-size: 50px !important;}}";

        		firstCircleContent.innerHTML = content.content_circle6_text1;
            var scramble = document.querySelector("#scramble");
            secondCircleContent.innerHTML = content.content_circle6_text2;
            var stat = "0% "+content.content_circle6_stat+"%"

            TweenLite.to(st0,0.3,{css:{opacity:"1",stroke:"#ed1c24"}});
            TweenLite.fromTo(st0,1,{drawSVG:"0%"},{drawSVG:stat});
            TweenLite.to(st0,1,{drawSVG:"100% 100%",delay:2});
            TweenLite.to(st1,1,{drawSVG:"100% 100%",delay:2});
            TweenLite.to(st0,0.3,{css:{opacity:"0"},delay:2.1});
            TweenLite.to(st1,0.3,{css:{opacity:"0"},delay:2.1});

        		TweenLite.fromTo(textContent, 0.5, {css:{opacity:"0.0000001"}},{css:{opacity:"1"}});
				    TweenLite.to(scramble, 1, {scrambleText:{text:content.content_circle6_stat, chars:"0123456789", speed:0.3}});
				    TweenLite.to(textContent, 0.5, {css:{opacity:"0"}, delay:2});
      		} else {
        		alert('There was a problem with the request.');
      		}
    	}

	}

	//listeners
	window.addEventListener("DOMContentLoaded",circleTextOne,false);
})();
