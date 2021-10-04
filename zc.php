<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link href="css/bootstrap.css" rel="stylesheet">
		<link rel="shortcut icon" href="images/2.jpg">
		<link rel="stylesheet" type="text/css" href="css/demo.css">
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<link rel="stylesheet" type="text/css" href="css/iconfont.css">
		<title>ALLNE</title>
		<style type="text/css">
			@media (min-width: 768px) and (max-width:992px) {
				.slid {
					padding: 10rem;
				}
			
				.slid h1 {
					font-size: 40px;
				}
			
				.slid p {
					font-size: 20px;
				}
				.banner .carousel-item img{
					width: 200px !important;
					height: 200px !important;
					border-radius: 10px;
				}
				.header .nav-login {
					color: white;
					margin-left: 10px;
				}
				.dlym{
					width: 200px;
					height: 300px;
					margin: -450px auto;
					border-radius: 20px;
				}
			}
			
			@media (max-width : 760px) {
				.slid {
					padding: 5rem;
				}
			
				.slid h1 {
					font-size: 22px;
				}
			
				.slid p {
					font-size: 16px;
				}
				.banner .carousel-item img{
					width: 100px !important;
					height: 100px !important;
					border-radius: 10px;
				}
				.header .nav-login {
					color: white;
					margin-left: 10px;
				}
				.dlym{
					width: 250px;
					height: 250px;
					margin: -400px auto;
					border-radius: 20px;
				}
			}
			.job {
				opacity: .0;
				transition: .5s;
				padding: 4rem 3rem;
				background-color: #fff;
				position: relative;
				top: -50px;
				box-shadow: 0 0 25px #fff;
				border-radius: 30px;
			}
			.header .navbar-brand {
				font-weight: 600;
				font-size: 1.5rem;
				color: white;
			}
			.header .navbar-brand:hover{
					color: #0B5ED7;
			}
			.header .navbar-light .navbar-nav .nav-link {
				color: #fff;
				font-weight: bold;
				transition: .8s;
				transform: rotateX(0deg);
			}
			.header .navbar-light .navbar-nav .nav-link:hover{
				transform: rotateX(360deg);
				color: #0B5ED7;
			}
		</style>
	</head>
	<body>
		<div class="header">
			<div class="container top">
				<nav class="navbar navbar-expand-lg navbar-light">
					<div class="container-fluid">
						<a class="navbar-brand" href="index.html">ALLNE</a>
						<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span style="background-color: gray; opacity: .5;border-radius: 5px;" class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="navbar-nav  ms-auto">
								<li class="nav-item">
									<a class="nav-link active" aria-current="page" href="index.html" target="_blank">首页</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="index.html">返回</a>
								</li>
								
								<li class="nav-item dropdown">
									<a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
										博客
									</a>
									<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
										<li><a class="dropdown-item" href="start.html">ALLNE</a></li>
										<li><a class="dropdown-item" href="#">ALPX</a></li>
									</ul>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#lx">联系</a>
								</li>
							</ul>
						</div>

					</div>
				</nav>
			</div>
		</div>
	<div class="slid" style="height: 100vh; background: url(images/08.jpg) no-repeat center/cover !important;">
		
	</div>
	<div class="dlym row">
		<div class="text-center">
			<h1 style="font-size: 16px;" class="mt-5 text-light">欢迎注册
					<a href="logoin.php">
						<button type="button" style="line-height: 20px;" class="btn btn-info text-light mx-2">取消注册</button>
					</a>
			</h1>
			<form action="" method="post" class="dengluyem">
				<div style="text-align: left;">
					<label style="color: white;">账号</label>
					<input  style="height: 50px;" required class="mb-5  w-100" required type="text" name="zhanghao" />
				</div>
				<div style="text-align: left;">
					<label style="color: white;">密码</label>
					<input style="height: 50px;" required class="mb-5  w-100" required type="text" name="mima" />
				</div>
				<a href="logoin.html">
					<button style="height: 50px;" type="submit" class="w-100 btn btn-primary">继续 ✔</button>
				</a>
			</form>
			
		</div>
	</div>
	</body>
	<script src="js/jq.js"></script>
	<script src="js/js.js"></script>
	<script src="js/popper.js"></script>
	<script src="js/bootstrap.min.js"></script>
</html>

		
	
<?php
	include("mk/lianjie.php");
	if(isset($_POST['zhanghao'])){//是否被点击
		$zh=$_POST['zhanghao'];
		$mima=md5($_POST['mima']);//获取输入的值
		
		$sqll="select * from admin where usearname='$zh'";//查询库里面是否有输入的值
		
		$row=mysqli_query($con,$sqll);//获取数据库里面的数据 执行查询语句

		if($row->num_rows>0){
			echo "<script>alert('用户名存在，不可以注册')</script>";
		}else{
			$sql="insert into admin(usearname, password) values('$zh','$mima')";//添加到库里
			$result=mysqli_query($con,$sql);//获取数据库里面的数据 执行语句
			if($result){
				echo "<script>;alert('注册成功');location.href='logoin.php';</script>";
			}
		}
	}	
?>