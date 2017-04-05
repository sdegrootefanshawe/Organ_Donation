<?php

	require_once('phpscripts/init.php');
	confirm_logged_in();//can be commented out when checking css and stuff. Uncomment when it goes live!!!

	ini_set('display_errors',1);
	error_reporting(E_ALL);

	$popForm = getAllUsers();

	if(isset($_POST['submit'])){
		//echo "works";
		$fname = trim($_POST['fname']);
		$lname = trim($_POST['lname']);
		$username = trim($_POST['username']);
		$email = trim($_POST['email']);
		$level = ($_POST['lvllist']);
		$suspend = ($_POST['suspend']);
		$id = ($_POST['id']);
		$delete = ($_POST['delete']);

		$result = editUsers($id,$fname,$lname,$username,$email,$level,$suspend,$delete);
		$message = $result;
	}
?>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="css/app.css"/>
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
<body class="row black-bg">
	<h1 class="h1Header">Edit Users</h1>

	<?php
		if(!empty($message)){

			echo $message;
		}
	?>

	<div class="large-8 large-offset-2 accordion end column">

	<?php
                if(! is_string($popForm)){
                    //echo "Object";
                    while($row = mysqli_fetch_array($popForm)){
                    	
                    	echo "

                    	<h2 class=\"roboto blackH2 editUsersH2\"><span style=\"text-transform: capitalize;\">{$row['user_fname']}</span><span style=\"text-transform: capitalize;\"> {$row['user_lname']}</span></h2>

                    	<form action=\"admin_editusers.php\" method=\"post\">

						<label class=\"blackLabel\">First Name:</label>
						<input class=\"roboto\" type=\"text\" name=\"fname\" value=\"{$row['user_fname']}\">

						<label class=\"blackLabel\">Last Name:</label>
						<input class=\"roboto\" type=\"text\" name=\"lname\" value=\"{$row['user_lname']}\">

						<label class=\"blackLabel\">Username:</label>
						<input class=\"roboto\" type=\"text\" name=\"username\" value=\"{$row['user_uname']}\">

						<label class=\"blackLabel\">Email:</label>
						<input class=\"roboto\" type=\"text\" name=\"email\" value=\"{$row['user_email']}\">

						<input type=\"hidden\" name=\"suspend\" value=\"yes\" />

						<select class=\"roboto\" name=\"lvllist\">
							<option value=\"admin\">Web Admin</option>
							<option value=\"master\">Web Master</option>
						</select>

						<input type=\"hidden\" name=\"id\" value=\"{$row['user_id']}\" />";

						if($row['user_attempts'] > 2 || $row['user_suspend'] === 'yes'){

						echo "<br><label class=\"blackLabel\">This user is locked out or suspended, would you like to release the user?</label>
						<select class=\"roboto\" name=\"suspend\">
							<option value=\"1\">No</option>
							<option value=\"2\">Yes</option>
						</select>";

						}

						echo "<br>
						<label class=\"blackLabelRed\">Would you like to delete this user?</label>
						<select class=\"roboto\" name=\"delete\">
							<option value=\"no\">No</option>
							<option value=\"yes\">Yes</option>
						</select>
						<br><br>
						<input class=\"button medium-12 column\" type=\"submit\" name=\"submit\" value=\"Save Changes to User\">

						</form>

						";
                    }
                }else{
                	echo "There was an error connecting to the database.";
                }

            ?>

            <a class="button large-12 column" href="admin_index.php">Back to login page</a>

        </div>

        <script src="../js/main.js"></script>

</body>
</html>