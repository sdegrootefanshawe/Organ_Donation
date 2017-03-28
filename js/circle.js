

// JavaScript Document

(function() {
	"use strict";
	console.log("SEAF Fired");
	//variables

	var httpRequest;
	var textContent = document.querySelector('#text-content');

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
    		httpRequest.open('GET','admin/phpscripts/ajaxQuery.php'+ '?section=content_crclinfo_one');
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
    		httpRequest.open('GET','admin/phpscripts/ajaxQuery.php'+ '?section=content_crclinfo_two');
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
    		httpRequest.open('GET','admin/phpscripts/ajaxQuery.php'+ '?section=content_crclinfo_three');
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
    		httpRequest.open('GET','admin/phpscripts/ajaxQuery.php'+ '?section=content_crclinfo_four');
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
    		httpRequest.open('GET','admin/phpscripts/ajaxQuery.php'+ '?section=content_crclinfo_five');
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
    		httpRequest.open('GET','admin/phpscripts/ajaxQuery.php'+ '?section=content_crclinfo_6');
    		httpRequest.send();

		setTimeout(circleTextOne,3000);
	}

	// content Pop functions

	function popContent1(){

		if (httpRequest.readyState === XMLHttpRequest.DONE) {
      		if (httpRequest.status === 200) {
      			var content = JSON.parse(httpRequest.responseText);
        		//console.log(content.content_crclinfo_one);

        		textContent.innerHTML = content.content_crclinfo_one;

        		var scramble = document.querySelector("#scramble");

        		TweenLite.fromTo(textContent, 0.5, {css:{opacity:"0.0000001"}},{css:{opacity:"1"}});
				TweenLite.to(scramble, 1, {scrambleText:{text:"13.6", chars:"0123456789", speed:0.3}});
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

        		textContent.innerHTML = content.content_crclinfo_two;

        		var scramble = document.querySelector("#scramble");

        		TweenLite.fromTo(textContent, 0.5, {css:{opacity:"0.0000001"}},{css:{opacity:"1"}});
				TweenLite.to(scramble, 1, {scrambleText:{text:"85", chars:"0123456789", speed:0.3}});
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

        		textContent.innerHTML = content.content_crclinfo_three;

        		var scramble = document.querySelector("#scramble");

        		TweenLite.fromTo(textContent, 0.5, {css:{opacity:"0.0000001"}},{css:{opacity:"1"}});
				TweenLite.to(scramble, 1, {scrambleText:{text:"30", chars:"0123456789", speed:0.3}});
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

        		textContent.innerHTML = content.content_crclinfo_four;

        		var scramble = document.querySelector("#scramble");

        		TweenLite.fromTo(textContent, 0.5, {css:{opacity:"0.0000001"}},{css:{opacity:"1"}});
				TweenLite.to(scramble, 1, {scrambleText:{text:"270", chars:"0123456789", speed:0.3}});
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

        		textContent.innerHTML = content.content_crclinfo_five;

        		var scramble = document.querySelector("#scramble");

        		TweenLite.fromTo(textContent, 0.5, {css:{opacity:"0.0000001"}},{css:{opacity:"1"}});
				TweenLite.to(scramble, 1, {scrambleText:{text:"70", chars:"0123456789", speed:0.3}});
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

        		textContent.innerHTML = content.content_crclinfo_6;

        		var scramble = document.querySelector("#scramble");

        		TweenLite.fromTo(textContent, 0.5, {css:{opacity:"0.0000001"}},{css:{opacity:"1"}});
				TweenLite.to(scramble, 1, {scrambleText:{text:"35", chars:"0123456789", speed:0.3}});
				TweenLite.to(textContent, 0.5, {css:{opacity:"0"}, delay:2});
      		} else {
        		alert('There was a problem with the request.');
      		}
    	}

	}

	//listeners
	window.addEventListener("DOMContentLoaded",circleTextOne,false);
})();
