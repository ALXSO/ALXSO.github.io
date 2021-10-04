<?php
	/* include("lianjie.php");
	if(!isset($_COOKIE['aaa'])){//验证cookie没有
		exit("<script>alert('请登录后重试');location.href='logoin.php';</script>");
	}else{//有
		$name=$_COOKIE['aaa'];
		$sql="select * from admin where usearname='{$name}'";//验证里面是否有name
		if(!mysqli_query($con,$sql)){//没有就执行
			exit("<script>alert('非法操作');location.href='logoin.php'</script>");
		}
	} */
	if(isset($_GET['logout'])){//点击退出
		setcookie("aaa","",time()-68400);//清楚cook
		echo "<script>alert('退出成功！');location.href='index.html'</script>";
	}
?>
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
								<!-- <li class="nav-item">
									<span style="color: white;">
										<?php
											echo "欢迎";
											echo "&nbsp";
											echo $_COOKIE["aaa"];
											echo "&nbsp";
											echo "<a style='color: white;' href='?logout'>退出</a>"
										?>
									</span>
								</li> -->
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
								<span class="ms-lg-5 nav-login">
									<div class="evening clear">
										<div class="e-one"></div>
										<div class="e-two"></div>
									</div>
								</span>
							</ul>
						</div>

					</div>
				</nav>
			</div>
		</div>
		<!-- rz -->

		<div class="fhtop"><!-- 返回顶部的按钮 -->
			<span class="iconfont icon-up-circle-fill"></span>
		</div>


