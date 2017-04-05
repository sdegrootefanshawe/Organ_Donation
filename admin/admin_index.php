<?php
	require_once('phpscripts/init.php');
	confirm_logged_in();//can be commented out when checking css and stuff. Uncomment when it goes live!!!
	date_default_timezone_set('America/Detroit');
?>
<html>
<head>
<meta charset="UTF-8">
<title>Welcome to the Admin Panel</title>
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
<body <?php
	if(date('H')<4){
		echo "class=\"night black-bg row\"";
	}elseif(date('H')<11){
		echo "class=\"morning black-bg row\"";
	}elseif (date('H')<18) {
		echo "class=\"day black-bg row\"";
	}elseif(date('H')<20){
		echo "class=\"evening black-bg row\"";
	}else{
		echo "class=\"night black-bg row\"";
	}
	?>>

	<h1 class="hidden">Main Login Page</h1>

	<section class="half-half">

		<div class="row expanded">

			<div class="black-bg small-12 medium-6 large-6 column">

				<h2 class="small-12 end column"><?php 

			if(date('H')<4){

				echo "Goodmorning? <span class=\"greeting\" style=\"text-transform: capitalize;\">".$_SESSION['users_fname']."</span>, you're either getting up really early or staying up really late. Either way, we appreciate the dedication!";

			}elseif(date('H')<11){

				echo "Goodmorning <span class=\"greeting\" style=\"text-transform: capitalize;\">".$_SESSION['users_fname']."</span></span>, grab a coffee and let's get started!";

			}elseif (date('H')<18) {

				echo "Welcome <span class=\"greeting\" style=\"text-transform: capitalize;\">".$_SESSION['users_fname']."</span>, hope your energy is as high as the sun today!";

			}elseif(date('H')<20){

				echo "Hello <span class=\"greeting\" style=\"text-transform: capitalize;\">".$_SESSION['users_fname']."</span> ,hope you had a healthy supper!";

			}else{

				echo "Wow <span class=\"greeting\" style=\"text-transform: capitalize;\">".$_SESSION['users_fname']."</span>, you're pulling off an all nighter!";

			}
				?></h2> 

				<h2 class="small-12 column">The last time you logged in was:</br><span class="greeting"><?php 
				if($_SESSION['users_date'] === '1000-01-01 00:00:00'){
					echo 'OH! This is your first time!';
				}else{
					echo $_SESSION['users_date'];
					} ?></span></h2>

			</div>

			<div class="black-bg selection small-12 medium-6 large-6 column crcl">

				<?php
					if($_SESSION['users_level'] === 'master'){
						echo "<a class=\"large-6 large-offset-3 column\" href=\"admin_createuser.php\">Create New User</a><br>
						<a class=\"large-6 large-offset-3 column\" href=\"admin_editusers.php\">Edit Users</a><br>";
					}
				?>
				<a class="large-6 large-offset-3 column" href="admin_edituser.php">Edit Your Account</a><br>
				<a class="large-6 large-offset-3 column" id="signOut" href="phpscripts/caller.php?caller_id=logout">Sign Out</a><br>
				<a class="large-8 large-offset-2 editWebsiteContent end column" href="admin_editcontent.php">Edit Website Content</a><br>

			</div>

		</div>

	</section>
	
</body>
</html>