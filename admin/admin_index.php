<<<<<<< HEAD
<?php
	require_once('phpscripts/init.php');
	confirm_logged_in();//can be commented out when checking css and stuff. Uncomment when it goes live!!!
	date_default_timezone_set('America/toronto');
?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Welcome to the Admin Panel</title>
<link rel="stylesheet" href="css/foundation.css" />
<link rel="stylesheet" href="css/app.css" />
</head>
<body <?php 
	if(date('H')<4){
		echo "class=\"night row\"";
	}elseif(date('H')<11){
		echo "class=\"morning row\"";
	}elseif (date('H')<18) {
		echo "class=\"day row\"";
	}elseif(date('H')<20){
		echo "class=\"evening row\"";
	}else{
		echo "class=\"night row\"";
	}
	?>>
	<div id="loginInfo">

		<h1 class="small-12 end column"><?php 

			if(date('H')<4){

				echo "Goodmorning? <span style=\"text-transform: capitalize;\">".$_SESSION['users_fname']."</span>, you're either getting up really early or staying up really late. Either way, we appreciate the dedication!";

			}elseif(date('H')<11){

				echo "Goodmorning <span style=\"text-transform: capitalize;\">".$_SESSION['users_fname']."</span></span> grab a coffee and let's get started!";

			}elseif (date('H')<18) {

				echo "Welcome <span style=\"text-transform: capitalize;\">".$_SESSION['users_fname']."</span> hope your energy is as high as the sun today!";

			}elseif(date('H')<20){

				echo "Hello <span style=\"text-transform: capitalize;\">".$_SESSION['users_fname']."</span> ,hope you had a healthy supper!";

			}else{

				echo "Wow <span style=\"text-transform: capitalize;\">".$_SESSION['users_fname']."</span> you're pulling off an all nighter!";

			}
		?></h1> 

		<h2 class="small-12 column">The last time you logged in was:</br> <?php 
		if($_SESSION['users_date'] === '1000-01-01 00:00:00'){
			echo 'OH! This is your first time!';
		}else{
			echo $_SESSION['users_date'];
			} ?></h2>

		<?php
			if($_SESSION['users_level'] === 'master'){
				echo "<a href=\"admin_createuser.php\">Create New User</a><br>
				<a href=\"admin_editusers.php\">Edit Users</a><br>";
			}
		?>
		<a href="admin_edituser.php">Edit Your Account</a><br>
		<a id="signOut" href="phpscripts/caller.php?caller_id=logout">Sign Out</a>

	</div>
	
</body>
=======
<?php
	require_once('phpscripts/init.php');
	confirm_logged_in();//can be commented out when checking css and stuff. Uncomment when it goes live!!!
	date_default_timezone_set('America/toronto');
?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Welcome to the Admin Panel</title>
<link rel="stylesheet" href="css/foundation.css" />
<link rel="stylesheet" href="css/app.css" />
</head>
<body <?php 
	if(date('H')<4){
		echo "class=\"night row\"";
	}elseif(date('H')<11){
		echo "class=\"morning row\"";
	}elseif (date('H')<18) {
		echo "class=\"day row\"";
	}elseif(date('H')<20){
		echo "class=\"evening row\"";
	}else{
		echo "class=\"night row\"";
	}
	?>>
	<div id="loginInfo">

		<h1 class="small-12 end column"><?php 

			if(date('H')<4){

				echo "Goodmorning? <span style=\"text-transform: capitalize;\">".$_SESSION['users_fname']."</span>, you're either getting up really early or staying up really late. Either way, we appreciate the dedication!";

			}elseif(date('H')<11){

				echo "Goodmorning <span style=\"text-transform: capitalize;\">".$_SESSION['users_fname']."</span></span> grab a coffee and let's get started!";

			}elseif (date('H')<18) {

				echo "Welcome <span style=\"text-transform: capitalize;\">".$_SESSION['users_fname']."</span> hope your energy is as high as the sun today!";

			}elseif(date('H')<20){

				echo "Hello <span style=\"text-transform: capitalize;\">".$_SESSION['users_fname']."</span> ,hope you had a healthy supper!";

			}else{

				echo "Wow <span style=\"text-transform: capitalize;\">".$_SESSION['users_fname']."</span> you're pulling off an all nighter!";

			}
		?></h1> 

		<h2 class="small-12 column">The last time you logged in was:</br> <?php 
		if($_SESSION['users_date'] === '1000-01-01 00:00:00'){
			echo 'OH! This is your first time!';
		}else{
			echo $_SESSION['users_date'];
			} ?></h2>

		<?php
			if($_SESSION['users_level'] === 'master'){
				echo "<a href=\"admin_createuser.php\">Create New User</a><br>
				<a href=\"admin_editusers.php\">Edit Users</a><br>";
			}
		?>
		<a href="admin_edituser.php">Edit Your Account</a><br>
		<a id="signOut" href="phpscripts/caller.php?caller_id=logout">Sign Out</a>

	</div>
	
</body>
>>>>>>> e12c2beaa8b09d404cb02a1d50230bdc3c4ba56c
</html>