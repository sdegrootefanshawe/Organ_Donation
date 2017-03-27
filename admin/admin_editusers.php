<<<<<<< HEAD
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
		$attempts = ($_POST['attempts']);
		$id = ($_POST['id']);
		$delete = ($_POST['delete']);

		$result = editUsers($id,$fname,$lname,$username,$email,$level,$suspend,$attempts,$delete);
		$message = $result;
	}
?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="css/app.css"/>
<title>Create New User</title>
</head>
<body>
	<h1>Edit Users</h1>

	<?php
		if(!empty($message)){

			echo $message;
		}
	?>

	<?php
                if(! is_string($popForm)){
                    //echo "Object";
                    while($row = mysqli_fetch_array($popForm)){
                    	
                    	echo "

                    	<h2><span style=\"text-transform: capitalize;\">{$row['user_fname']}</span><span style=\"text-transform: capitalize;\"> {$row['user_lname']}</span></h2>

                    	<form action=\"admin_editusers.php\" method=\"post\">

						<label>First Name:</label>
						<input type=\"text\" name=\"fname\" value=\"{$row['user_fname']}\">

						<label>Last Name:</label>
						<input type=\"text\" name=\"lname\" value=\"{$row['user_lname']}\">

						<label>Username:</label>
						<input type=\"text\" name=\"username\" value=\"{$row['user_uname']}\">

						<label>Email:</label>
						<input type=\"text\" name=\"email\" value=\"{$row['user_email']}\">

						<input type=\"hidden\" name=\"suspend\" value=\"yes\" />

						<select name=\"lvllist\">
							<option value=\"admin\">Web Admin</option>
							<option value=\"master\">Web Master</option>
						</select>

						<input type=\"hidden\" name=\"id\" value=\"{$row['user_id']}\" />";

						if($row['user_attempts'] > 2){

						echo "<br><label>This user is locked out or suspended, would you like to release the user?</label>
						<input type=\"checkbox\" name=\"attempts\" value=\"2\">";

						}else if($row['user_suspend'] === 'yes'){
							echo "<br><label>This user is locked out or suspended, would you like to release the user?</label>
							<input type=\"checkbox\" name=\"suspend\" value=\"2\">";
						}

						echo "<br>
						<label>Would you like to delete this user?</label>
						<select name=\"delete\">
							<option value=\"no\">No</option>
							<option value=\"yes\">Yes</option>
						</select>
						<br><br>
						<input type=\"submit\" name=\"submit\" value=\"Save Changes to User\">

						</form>

						";
                    }
                }else{
                	echo "There was an error connecting to the database.";
                }

            ?>


	<a href="admin_index.php">Back to login page</a>

</body>
=======
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
		$attempts = ($_POST['attempts']);
		$id = ($_POST['id']);
		$delete = ($_POST['delete']);

		$result = editUsers($id,$fname,$lname,$username,$email,$level,$suspend,$attempts,$delete);
		$message = $result;
	}
?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="css/app.css"/>
<title>Create New User</title>
</head>
<body>
	<h1>Edit Users</h1>

	<?php
		if(!empty($message)){

			echo $message;
		}
	?>

	<?php
                if(! is_string($popForm)){
                    //echo "Object";
                    while($row = mysqli_fetch_array($popForm)){
                    	
                    	echo "

                    	<h2><span style=\"text-transform: capitalize;\">{$row['user_fname']}</span><span style=\"text-transform: capitalize;\"> {$row['user_lname']}</span></h2>

                    	<form action=\"admin_editusers.php\" method=\"post\">

						<label>First Name:</label>
						<input type=\"text\" name=\"fname\" value=\"{$row['user_fname']}\">

						<label>Last Name:</label>
						<input type=\"text\" name=\"lname\" value=\"{$row['user_lname']}\">

						<label>Username:</label>
						<input type=\"text\" name=\"username\" value=\"{$row['user_uname']}\">

						<label>Email:</label>
						<input type=\"text\" name=\"email\" value=\"{$row['user_email']}\">

						<input type=\"hidden\" name=\"suspend\" value=\"yes\" />

						<select name=\"lvllist\">
							<option value=\"admin\">Web Admin</option>
							<option value=\"master\">Web Master</option>
						</select>

						<input type=\"hidden\" name=\"id\" value=\"{$row['user_id']}\" />";

						if($row['user_attempts'] > 2){

						echo "<br><label>This user is locked out or suspended, would you like to release the user?</label>
						<input type=\"checkbox\" name=\"attempts\" value=\"2\">";

						}else if($row['user_suspend'] === 'yes'){
							echo "<br><label>This user is locked out or suspended, would you like to release the user?</label>
							<input type=\"checkbox\" name=\"suspend\" value=\"2\">";
						}

						echo "<br>
						<label>Would you like to delete this user?</label>
						<select name=\"delete\">
							<option value=\"no\">No</option>
							<option value=\"yes\">Yes</option>
						</select>
						<br><br>
						<input type=\"submit\" name=\"submit\" value=\"Save Changes to User\">

						</form>

						";
                    }
                }else{
                	echo "There was an error connecting to the database.";
                }

            ?>


	<a href="admin_index.php">Back to login page</a>

</body>
>>>>>>> e12c2beaa8b09d404cb02a1d50230bdc3c4ba56c
</html>