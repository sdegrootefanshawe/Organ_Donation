<?php

	function editContent($circle1,$circle2,$circle3,$circle4,$circle5,$circle6,$section1,$version){
		include("connect.php");

		$getOGString = "SELECT content_section_one, content_circle1_text1, content_circle1_stat, content_circle1_text2 ,content_circle2_text1, content_circle2_stat, content_circle2_text2, content_circle3_text1, content_circle3_stat, content_circle3_text2, content_circle4_text1, content_circle4_stat, content_circle4_text2, content_circle5_text1, content_circle5_stat, content_circle5_text2, content_circle6_text1, content_circle6_stat, content_circle6_text2 FROM tbl_content ORDER BY content_id ASC LIMIT 1";
		$updateOGString = mysqli_query($link,$getOGString);
		$ogString = mysqli_fetch_array($updateOGString, MYSQLI_ASSOC);

		$getPrevString = "SELECT content_section_one, content_circle1_text1, content_circle1_stat, content_circle1_text2 ,content_circle2_text1, content_circle2_stat, content_circle2_text2, content_circle3_text1, content_circle3_stat, content_circle3_text2, content_circle4_text1, content_circle4_stat, content_circle4_text2, content_circle5_text1, content_circle5_stat, content_circle5_text2, content_circle6_text1, content_circle6_stat, content_circle6_text2 FROM tbl_content ORDER BY content_id DESC LIMIT 1,1";
		$updatePrevString = mysqli_query($link,$getPrevString);
		$prevString = mysqli_fetch_array($updatePrevString, MYSQLI_ASSOC);

		if($version === 'original'){

			$sectionOne = $ogString['content_section_one'];
			$circle1Text1 = $ogString['content_circle1_text1'];
			$circle1STat = $ogString['content_circle1_stat'];
			$circle1Text2 = $ogString['content_circle1_text2'];

			$circle2Text1 = $ogString['content_circle2_text1'];
			$circle2STat = $ogString['content_circle2_stat'];
			$circle2Text2 = $ogString['content_circle2_text2'];

			$circle3Text1 = $ogString['content_circle3_text1'];
			$circle3STat = $ogString['content_circle3_stat'];
			$circle3Text2 = $ogString['content_circle3_text2'];

			$circle4Text1 = $ogString['content_circle4_text1'];
			$circle4STat = $ogString['content_circle4_stat'];
			$circle4Text2 = $ogString['content_circle4_text2'];

			$circle5Text1 = $ogString['content_circle5_text1'];
			$circle5STat = $ogString['content_circle5_stat'];
			$circle5Text2 = $ogString['content_circle5_text2'];

			$circle6Text1 = $ogString['content_circle6_text1'];
			$circle6STat = $ogString['content_circle6_stat'];
			$circle6Text2 = $ogString['content_circle6_text2'];

			$contentstring = "INSERT INTO tbl_content VALUES (NULL,'$sectionOne','$circle1Text1','$circle1STat','$circle1Text2','$circle2Text1','$circle2STat','$circle2Text2','$circle3Text1','$circle3STat','$circle3Text2','$circle4Text1','$circle4STat','$circle4Text2','$circle5Text1','$circle5STat','$circle5Text2','$circle6Text1','$circle6STat','$circle6Text2')";
			$updateQuery = mysqli_query($link,$contentstring);
		}else if($version === 'previous'){

			$sectionOnePrev = $prevString['content_section_one'];
			$circle1Text1Prev = $prevString['content_circle1_text1'];
			$circle1STatPrev = $prevString['content_circle1_stat'];
			$circle1Text2Prev = $prevString['content_circle1_text2'];

			$circle2Text1Prev = $prevString['content_circle2_text1'];
			$circle2STatPrev = $prevString['content_circle2_stat'];
			$circle2Text2Prev = $prevString['content_circle2_text2'];

			$circle3Text1Prev = $prevString['content_circle3_text1'];
			$circle3STatPrev = $prevString['content_circle3_stat'];
			$circle3Text2Prev = $prevString['content_circle3_text2'];

			$circle4Text1Prev = $prevString['content_circle4_text1'];
			$circle4STatPrev = $prevString['content_circle4_stat'];
			$circle4Text2Prev = $prevString['content_circle4_text2'];

			$circle5Text1Prev = $prevString['content_circle5_text1'];
			$circle5STatPrev = $prevString['content_circle5_stat'];
			$circle5Text2Prev = $prevString['content_circle5_text2'];

			$circle6Text1Prev = $prevString['content_circle6_text1'];
			$circle6STatPrev = $prevString['content_circle6_stat'];
			$circle6Text2Prev = $prevString['content_circle6_text2'];

			$contentstring = "INSERT INTO tbl_content VALUES (NULL,'$sectionOnePrev','$circle1Text1Prev','$circle1STatPrev','$circle1Text2Prev','$circle2Text1Prev','$circle2STatPrev','$circle2Text2Prev','$circle3Text1Prev','$circle3STatPrev','$circle3Text2Prev','$circle4Text1Prev','$circle4STatPrev','$circle4Text2Prev','$circle5Text1Prev','$circle5STatPrev','$circle5Text2Prev','$circle6Text1Prev','$circle6STatPrev','$circle6Text2Prev')";
			$updateQuery = mysqli_query($link,$contentstring);
		}else{
			$contentstring = "INSERT INTO tbl_content VALUES (NULL,'{$section1}','of <span id=\"scramble\">','{$circle1}','</span> million<br><span class=\"roboto\">total ontarians</span>','<span id=\"scramble\">','{$circle2}','</span>&#37; <span class=\"roboto\">are in<br>favour of</span><br>organ donation','<span id=\"scramble\">','{$circle3}','</span>&#37;<span class=\"roboto\"> are registered</span><br>organ donors','<span id=\"scramble\">','{$circle4}','</span> Ontarians<br><span class=\"roboto\">die everyday</span>','<span id=\"scramble\">','{$circle5}','</span>&#37; <span class=\"roboto\">would have<br> their organs</span><br> buried with them','<span id=\"scramble\">','{$circle6}','</span>&#37; of family&apos;s<br>choose to<br><span class=\"roboto\">not donate</span>')";
			$updateQuery = mysqli_query($link,$contentstring);
		}

		if($updateQuery){
			$message = "Your changes have been successfully saved.";
			redirect_to('admin_editcontent.php');
		}else{
			$message = "Not gonna happen";
			return $message;
		}

		mysqli_close($link);
	}
?>