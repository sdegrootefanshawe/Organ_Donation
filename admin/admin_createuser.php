<?php
	require_once('phpscripts/init.php');
	confirm_logged_in();//can be commented out when checking css and stuff. Uncomment when it goes live!!!

	if(isset($_POST['submit'])){
		//echo "works";
		$fname = trim($_POST['fname']);
		$lname = trim($_POST['lname']);
		$username = trim($_POST['username']);
		$level = ($_POST['lvllist']);
		$email = trim($_POST['email']);

		if(empty($level)){
			$message = "<h2 class=\"roboto blackH2Red\">Please select a level for the user.</h2>";
		}else if(empty($email)){
			$message = "<h2 class=\"roboto blackH2Red\">Please add an Email.</h2>";
		}else{
			//echo "all good";
			$result = createUser($fname,$lname,$username,$level,$email);
			$message = $result;
		}
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
<body class="black-bg createUser">
	<h1 class="h1Header">Create User</h1>
	<h2 class="roboto blackH2">A password will be created and sent automatically</h2>

	<?php
		if(!empty($message)){

			echo $message;
		}
	?>

	<form class="large-8 large-offset-2 end column" action="admin_createuser.php" method="post">

		<label class="blackLabel">First Name:</label>
		<input class="roboto" type="text" name="fname" value="<?php
			if(!empty($fname)){
				echo $fname;
			}
		?>"
		>

		<label class="blackLabel">Last Name:</label>
		<input class="roboto" type="text" name="lname" value="<?php
			if(!empty($lname)){
				echo $lname;
			}
		?>"
		>

		<label class="blackLabel">Username:</label>
		<input class="roboto" type="text" name="username" value="<?php
			if(!empty($username)){
				echo $username;
			}
		?>"
		>
		<!-- <label>Password:</label>
		<input type="text" name="password" value="<?php
			// if(!empty($password)){
			// 	echo $password;
			//}
		?>"
		> -->
		<label class="blackLabel">Email:</label>
		<input class="roboto" type="text" name="email" value="<?php
			if(!empty($email)){
				echo $email;
			}
		?>"
		>

		<select class="roboto" name="lvllist">
			<option class="roboto" value="">Please select a user level...</option>
			<option class="roboto" value="admin">Web Admin</option>
			<option class="roboto" value="master">Web Master</option>
		</select>
		<br><br>
		<input class="button large-2 large-push-2 column" type="submit" name="submit" value="Create User">
		<a class="button large-2 large-offset-6 large-pull-2 column" href="admin_index.php">Back to login page</a>

	</form>

</body>
</html>