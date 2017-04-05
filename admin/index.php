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
  <h1 class="hidden">Login Page</h1>

  <section class="half-half">
        <h2 class="hidden">Please Login</h2>
        <div class="row expanded">
            <div class="red-bg small-12 medium-6 large-6 column">
                <h3>ORGAN DONATION <span>ADMIN LOGIN</span></h3>
            </div>

            <div class="white-bg small-12 medium-6 large-6 column crcl">

              <form action="index.php" method="post">
              <label>Username:</label>
              <input class="roboto" type="text" Name="username" value="">
              <label>Password:</label>
              <input class="roboto" type="password" name="password" value="">
              <input class="button small-12 end column" type="submit" name="submit" value="Login">
              </form>
              
              <a class="button small-12 end column" href="../index.php">Return to Website</a>

              <h2 class="errorMessage"><?php if(!empty($message)){echo $message;} ?></h2>

            </div>
        </div>
    </section>

    <script src="../js/vendor/jquery.min.js"></script>
    <script src="../js/vendor/what-input.min.js"></script>
    <script src="../js/foundation.min.js"></script>
    <script src="js/app.js"></script>
  </body>
</html>
