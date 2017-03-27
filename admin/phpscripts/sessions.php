<<<<<<< HEAD
<<<<<<< HEAD
<?php
	session_start();
	function confirm_logged_in(){
		if(!isset($_SESSION['users_creds'])){
			redirect_to("admin_login.php");
		}
	}

	function logged_out(){
		session_destroy();

		redirect_to("../../index.php");
	}
=======
<?php
	session_start();
	function confirm_logged_in(){
		if(!isset($_SESSION['users_creds'])){
			redirect_to("admin_login.php");
		}
	}

	function logged_out(){
		session_destroy();

		redirect_to("../../index.php");
	}
>>>>>>> e12c2beaa8b09d404cb02a1d50230bdc3c4ba56c
=======
<?php
	session_start();
	function confirm_logged_in(){
		if(!isset($_SESSION['users_creds'])){
			redirect_to("admin_login.php");
		}
	}

	function logged_out(){
		session_destroy();

		redirect_to("../../index.php");
	}
>>>>>>> bf5bb820613830fa1c8e969b2a9c8cf35b137955
?>