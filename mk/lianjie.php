<?php
$con=mysqli_connect('localhost','root','',"news");
	if(!$con){
		die('失败'.mysql_error());
	}