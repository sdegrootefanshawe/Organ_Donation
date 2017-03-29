<?php
	require_once('phpscripts/init.php');
	confirm_logged_in();//can be commented out when checking css and stuff. Uncomment when it goes live!!!
	date_default_timezone_set('America/toronto');

 	ini_set('display_errors',1);
  	error_reporting(E_ALL);

  	$populateContent = getInfo();

  	if(isset($_POST['submit'])){
		//echo "works";
		$section1 = trim($_POST['section1']);

		$version = $_POST['version'];

		$result = editContent($section1,$version);
		$message = $result;
	}
?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Welcome to the Admin Panel</title>
<link rel="stylesheet" href="css/foundation.css" />
<link rel="stylesheet" href="css/app.css" />
</head>
<body>
	<div id="loginInfo">

		<h1 class="small-12 end column"><?php 
				echo "Alright <span style=\"text-transform: capitalize;\">".$_SESSION['users_fname']."</span>, what needs to be updated?";
		?></h1>

		<?php

			echo $populateContent['content_section_one'];

		?>
         <h2>What should this be changed to?</h2>
         <form action="admin_editcontent.php" method="post">
         <br><input type="text" name="section1" value="">

         <h2>Made a mistake? That's ok, just go to the previous or original version:</h2>
        <select name="version">
			<option value="">Select a version you would like to revert to</option>
			<option value="previous">Previous</option>
			<option value="original">Original</option>
		</select>

         <br><input type="submit" name="submit" value="Save Changes to Website">
         </form>

		<a href="admin_index.php">Back to login page</a>
		<a id="signOut" href="phpscripts/caller.php?caller_id=logout">Sign Out</a>

	</div>
	
</body>
</html>