<?php
include("mk/lianjie.php");
$usearname=$_POST['usearname'];
$pwd=md5($_POST['password']);//获取到数据
if(!$usearname==''||!$pwd==''){
	$sql="select * from admin where usearname='$usearname' and password='$pwd'";
	$result=mysqli_query($con,$sql);//执行MySQL语句
	$row=mysqli_fetch_assoc($result);
	if($result->num_rows>0){
		setcookie("aaa",$row['usearname'],time()+68400);
		header("location:rzone.php");
	}else{
		echo "<script>;alert('账号密码错误');location.href='logoin.php';</script>";
	}
}