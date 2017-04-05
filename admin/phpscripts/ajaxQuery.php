<?php
	include 'connect.php';

	// set some post stuff up here

	$section = $_GET["section"];

	$myQuery = "SELECT $section FROM tbl_content ORDER BY content_id DESC LIMIT 1";
	$result = mysqli_query($link, $myQuery);
	$row = mysqli_fetch_assoc($result);

	echo json_encode($row);
	//echo mysqli_num_rows($result);
?>