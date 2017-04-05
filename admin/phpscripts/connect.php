<?php
	// Set up connection credentials
	$user = "jeanp162_main";
	$pass = "jphasaps3";
	$url = "76.74.235.220";
	$db = "jeanp162_organ_donation";

	//$link = mysqli_connect($url, $user, $pass, $db, "8889"); //Mac
	$link = mysqli_connect($url, $user, $pass, $db); //PC

	/* check connection */ 
	if(mysqli_connect_errno()) {
		printf("Connect failed: %s\n", mysqli_connect_error());
		exit();
	}
?>