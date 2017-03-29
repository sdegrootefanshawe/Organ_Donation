<?php

	function editContent($section1,$version){
		include("connect.php");

		$getOGString = "SELECT content_section_one, content_crclinfo_one, content_crclinfo_two, content_crclinfo_three, content_crclinfo_four, content_crclinfo_five, content_crclinfo_6 FROM tbl_content ORDER BY content_id ASC LIMIT 1";
		$updateOGString = mysqli_query($link,$getOGString);
		$ogString = mysqli_fetch_array($updateOGString, MYSQLI_ASSOC);

		$getPrevString = "SELECT content_section_one, content_crclinfo_one, content_crclinfo_two, content_crclinfo_three, content_crclinfo_four, content_crclinfo_five, content_crclinfo_6 FROM tbl_content ORDER BY content_id DESC LIMIT 1,1";
		$updatePrevString = mysqli_query($link,$getPrevString);
		$prevString = mysqli_fetch_array($updatePrevString, MYSQLI_ASSOC);

		if($version === 'original'){

			$sectionOne = $ogString['content_section_one'];
			$crclinfoOne = $ogString['content_crclinfo_one'];
			$crclinfoTwo = $ogString['content_crclinfo_two'];
			$crclinfoThree = $ogString['content_crclinfo_three'];
			$crclinfoFour = $ogString['content_crclinfo_four'];
			$crclinfoFive = $ogString['content_crclinfo_five'];
			$crclinfoSix = $ogString['content_crclinfo_6'];

			$contentstring = "INSERT INTO tbl_content VALUES (NULL,'$sectionOne','$crclinfoOne','$crclinfoTwo','$crclinfoThree','$crclinfoFour','$crclinfoFive','$crclinfoSix')";
			$updateQuery = mysqli_query($link,$contentstring);
		}else if($version === 'previous'){

			$sectionOnePrev = $prevString['content_section_one'];
			$crclinfoOnePrev = $prevString['content_crclinfo_one'];
			$crclinfoTwoPrev = $prevString['content_crclinfo_two'];
			$crclinfoThreePrev = $prevString['content_crclinfo_three'];
			$crclinfoFourPrev = $prevString['content_crclinfo_four'];
			$crclinfoFivePrev = $prevString['content_crclinfo_five'];
			$crclinfoSixPrev = $prevString['content_crclinfo_6'];

			$contentstring = "INSERT INTO tbl_content VALUES (NULL,'$sectionOnePrev','$crclinfoOnePrev','$crclinfoTwoPrev','$crclinfoThreePrev','$crclinfoFourPrev','$crclinfoFivePrev','$crclinfoSixPrev')";
			$updateQuery = mysqli_query($link,$contentstring);
		}else{
			$contentstring = "INSERT INTO tbl_content VALUES (NULL,'{$section1}','else','','','','','')";
			$updateQuery = mysqli_query($link,$contentstring);
		}

		if($updateQuery){
			$message = "Your changes have been successfully saved.";
			redirect_to('admin_index.php');
		}else{
			$message = "Not gonna happen";
			return $message;
		}

		mysqli_close($link);
	}
?>