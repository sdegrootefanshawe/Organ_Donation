

// JavaScript Document

(function() {
	"use strict";
	console.log("SEAF Fired");
	//variables

	var httpRequest;
	var textContent = document.querySelector('#text-content');
  var firstCircleContent = document.querySelector('#firstCircleContent');
  var secondCircleContent = document.querySelector('#secondCircleContent');

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
    		httpRequest.open('GET','admin/phpscripts/ajaxQuery.php'+ '?section=content_circle1_text5,content_circle5_stat,content_circle5_text2');
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

        		firstCircleContent.innerHTML = content.content_circle1_text1;
            var scramble = document.querySelector("#scramble");
            scramble.innerHTML = content.content_circle1_stat
            secondCircleContent.innerHTML = content.content_circle1_text2;

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

        		firstCircleContent.innerHTML = content.content_circle2_text1;
            var scramble = document.querySelector("#scramble");
            secondCircleContent.innerHTML = content.content_circle2_text2;

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

        		firstCircleContent.innerHTML = content.content_circle3_text1;
            var scramble = document.querySelector("#scramble");
            secondCircleContent.innerHTML = content.content_circle3_text2;

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

        		firstCircleContent.innerHTML = content.content_circle5_text1;
            var scramble = document.querySelector("#scramble");
            secondCircleContent.innerHTML = content.content_circle5_text2;

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

        		firstCircleContent.innerHTML = content.content_circle6_text1;
            var scramble = document.querySelector("#scramble");
            secondCircleContent.innerHTML = content.content_circle6_text2;

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
