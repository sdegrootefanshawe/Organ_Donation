<?php

  require_once("phpscripts/init.php");

  if(isset($_POST['submit'])){
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    if($username !="" && $password !=""){
        $result = logIn($username, $password);
        $message = $result;
    }else{
      $message = "Please fill out the required field.";
    }
  }

?>

<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CMS</title>
    <link rel="stylesheet" href="css/foundation.css" />
    <link rel="stylesheet" href="css/app.css" />
  </head>
  <body>

	<?php if(!empty($message)){echo $message;} ?>

		<h1>Please Login</h1>
		<form action="index.php" method="post">
			<label>Username:</label>
			<input type="text" Name="username" value="">
			<label>Password:</label>
			<input type="password" name="password" value="">
			<input type="submit" name="submit" value="Login">

		</form>

    <a href="../index.php">Return to Website</a>

    <script src="js/vendor/jquery.min.js"></script>
    <script src="js/vendor/what-input.min.js"></script>
    <script src="js/foundation.min.js"></script>
    <script src="js/app.js"></script>
  </body>
</html>
