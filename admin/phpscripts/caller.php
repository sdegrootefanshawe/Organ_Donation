<<<<<<< HEAD
<<<<<<< HEAD
<?php
	require_once('init.php');

	if(isset($_GET['caller_id'])){

		$dir = $_GET['caller_id'];

		if($dir == "logout"){
			logged_out();
		}else{
			echo "Caller id was passed incorrectly. Unable to Logout.";
		}
	}else{
		echo "Caller id not set.";
	}

=======
<?php
	require_once('init.php');

	if(isset($_GET['caller_id'])){

		$dir = $_GET['caller_id'];

		if($dir == "logout"){
			logged_out();
		}else{
			echo "Caller id was passed incorrectly. Unable to Logout.";
		}
	}else{
		echo "Caller id not set.";
	}

>>>>>>> e12c2beaa8b09d404cb02a1d50230bdc3c4ba56c
=======
<?php
	require_once('init.php');

	if(isset($_GET['caller_id'])){

		$dir = $_GET['caller_id'];

		if($dir == "logout"){
			logged_out();
		}else{
			echo "Caller id was passed incorrectly. Unable to Logout.";
		}
	}else{
		echo "Caller id not set.";
	}

>>>>>>> bf5bb820613830fa1c8e969b2a9c8cf35b137955
?>