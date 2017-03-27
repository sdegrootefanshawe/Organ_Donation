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
			$message = "Please select a level for the user.";
		}else if(empty($email)){
			$message = "Please add an Email.";
		}else{
			//echo "all good";
			$result = createUser($fname,$lname,$username,$level,$email);
			$message = $result;
		}
	}
?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Create New User</title>
</head>
<body>
	<h1>Create User</h1>
	<h2>A password will be created and sent automatically.</h2>

	<?php
		if(!empty($message)){

			echo $message;
		}
	?>

	<form action="admin_createuser.php" method="post">

		<label>First Name:</label>
		<input type="text" name="fname" value="<?php
			if(!empty($fname)){
				echo $fname;
			}
		?>"
		>

		<label>Last Name:</label>
		<input type="text" name="lname" value="<?php
			if(!empty($lname)){
				echo $lname;
			}
		?>"
		>

		<label>Username:</label>
		<input type="text" name="username" value="<?php
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
		<label>Email:</label>
		<input type="text" name="email" value="<?php
			if(!empty($email)){
				echo $email;
			}
		?>"
		>

		<select name="lvllist">
			<option value="">Please select a user level...</option>
			<option value="admin">Web Admin</option>
			<option value="master">Web Master</option>
		</select>
		<br><br>
		<input type="submit" name="submit" value="Create User">

	</form>

	<a href="admin_index.php">Back to login page</a>

</body>
</html>