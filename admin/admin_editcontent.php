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
		$circle1 = trim($_POST['circle1']);
		$circle2 = trim($_POST['circle2']);
		$circle3 = trim($_POST['circle3']);
		$circle4 = trim($_POST['circle4']);
		$circle5 = trim($_POST['circle5']);
		$circle6 = trim($_POST['circle6']);

		$version = $_POST['version'];

		$result = editContent($circle1,$circle2,$circle3,$circle4,$circle5,$circle6,$section1,$version);
		$message = $result;
	}
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
<body class="black-bg">
	<div class="row expanded small-12 column">

		<h1 class="small-12 end column"><?php 
				echo "Alright <span style=\"text-transform: capitalize;\">".$_SESSION['users_fname']."</span>, what needs to be updated?";
		?></h1>

		<div id="webPreview">



    <section class="grey-container map">
        <h2 class="hidden">life saving transplants</h2>
        <div class="row expanded collapse">
            <div class="small-12 float-left column">
            
                <h3 class="small-12 column">over <span> 
                <form action="admin_editcontent.php" method="post">
                <input class="inputContent1 small-12 end column" type="text" name="section1" value="<?php echo $populateContent['content_section_one']; ?>"></span>
                <br> ontarians are<br> waiting to receive<br> <span>life saving</span><br> organ transplants</h3>
            </div>
        </div>
    </section>

    <section class="half-half">
        <h2 class="hidden">Ontario needs organ donors</h2>
        <div class="row expanded collapse">
            <div class="red-bg small-12 medium-6 large-6 column">
                <h3>Ontario needs <span>organ donors</span></h3>
            </div>

            <div class="white-bg small-12 medium-6 large-6 column crcl">

                <div id="text-content" class="circle-text-container text-center float-center">

                <p><?php echo $populateContent['content_circle1_text1']; ?></p>
         		<input class="bebas" type="text" name="circle1" value="<?php echo $populateContent['content_circle1_stat']; ?>">
         		<p> <?php echo $populateContent['content_circle1_text2']; ?></p>

         		<p><?php echo $populateContent['content_circle2_text1']; ?></p>
         		<input class="bebas" type="text" name="circle2" value="<?php echo $populateContent['content_circle2_stat']; ?>">
         		<p><?php echo $populateContent['content_circle2_text2']; ?></p>

         		<p><?php echo $populateContent['content_circle3_text1']; ?></p>
         		<input class="bebas" type="text" name="circle3" value="<?php echo $populateContent['content_circle3_stat']; ?>">
         		<p><?php echo $populateContent['content_circle3_text2']; ?></p>

         		<p><?php echo $populateContent['content_circle4_text1']; ?></p>
         		<br><input class="bebas" type="text" name="circle4" value="<?php echo $populateContent['content_circle4_stat']; ?>">
         		<p> <?php echo $populateContent['content_circle4_text2']; ?></p>

         		<p><?php echo $populateContent['content_circle5_text1']; ?></p>
         		<input class="bebas" type="text" name="circle5" value="<?php echo $populateContent['content_circle5_stat']; ?>">
         		<p> <?php echo $populateContent['content_circle5_text2']; ?></p>

         		<p><?php echo $populateContent['content_circle6_text1']; ?></p>
         		<input class="bebas" type="text" name="circle6" value="<?php echo $populateContent['content_circle6_stat']; ?>">
         		<p><?php echo $populateContent['content_circle6_text2']; ?></p>
            	</div>

            </div>
        </div>
    </section>
    </div>

        <div class="bottomEditContent">

        <h3>Made a mistake? That's ok, just go to the <span>previous</span> or <span>original</span> version:</h3>
        <select class="roboto" name="version">
			<option value="">Select a version</option>
			<option value="previous">Previous</option>
			<option value="original">Original</option>
		</select>

        <br><input class="button small-12 column" type="submit" name="submit" value="Save Changes to Website">
        <a class="button small-12 column" href="admin_index.php">Back to login page</a>
        <a class="button small-12 column" id="signOut" href="phpscripts/caller.php?caller_id=logout">Sign Out</a>
         </form>

        </div>

	</div>

	
    <script src="../js/vendor/jquery.min.js"></script>
    <script src="../js/vendor/what-input.min.js"></script>
    <script src="../js/foundation.min.js"></script>
	
</body>
</html>