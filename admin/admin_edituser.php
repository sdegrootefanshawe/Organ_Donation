<?php


	require_once('phpscripts/init.php');
	confirm_logged_in();//can be commented out when checking css and stuff. Uncomment when it goes live!!!

	ini_set('display_errors',1);
	error_reporting(E_ALL);

	$id = $_SESSION['users_creds'];
	$popForm = getUser($id);

	if(isset($_POST['submit'])){
		//echo "works";
		$fname = trim($_POST['fname']);
		$lname = trim($_POST['lname']);
		$username = trim($_POST['username']);
		$password = trim($_POST['password']);
		$email = trim($_POST['email']);

		$result = editUser($id,$fname,$lname,$username,$password,$email);
		$message = $result;
	}
?>
<html>
<head>
<meta charset="UTF-8">
<title>Create New User</title>
<link href="../css/reset.css" rel="stylesheet" type="text/css" media="screen">
<link href="../css/style.css" rel="stylesheet" type="text/css" media="screen">
<link rel="stylesheet" href="../css/foundation.css" />
<script src="../greensock/src/minified/TweenMax.min.js"></script>
<script src="../js/ScrollToPlugin.min.js"></script>
<script src="../js/DrawSVGPlugin.min.js"></script>
<script src="../js/ScrambleTextPlugin.min.js"></script>
<script src="../js/MorphSVGPlugin.min.js"></script>
<script src="../js/CSSPlugin.min.js"></script>
</head>
<body>
<h1 class="hidden">Edit User</h1>
	<section class="half-half">
	<div class="row expanded">

	<div class="red-bg editUserH3 small-12 medium-6 large-6 column">
	<h3>Edit your account</h3>
	</div>

	<div class="white-bg small-12 medium-6 large-6 column crcl">
	<?php
		if(!empty($message)){

			echo $message;
		}
	?>

	<form action="admin_edituser.php" method="post">

		<label>First Name:</label>
		<input type="text" name="fname" value="<?php
			echo $popForm['user_fname'];
			?>"
		>

		<label>Last Name:</label>
		<input type="text" name="lname" value="<?php
			echo $popForm['user_lname'];
		?>"
		>

		<label>Username:</label>
		<input type="text" name="username" value="<?php
			echo $popForm['user_uname'];
		?>"
		>
		<label>Password:</label>
		<input type="text" name="password" value="<?php
			echo $popForm['user_password'];
		?>"
		>
		<label>Email:</label>
		<input type="text" name="email" value="<?php
			echo $popForm['user_email'];
		?>"
		>

		<br><br>
		<input class="button small-12 column" type="submit" name="submit" value="Edit User">
		<a class="button small-12 column" href="admin_index.php">Back to login page</a>

	</form>
	</div>

	</div>

	</section>

</body>
</html>