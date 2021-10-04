	setTimeout(function(){
		var shuiji=["08","11","3","14"];
		var rand = parseInt(Math.floor(Math.random() * 4+0));
		$(".slid").css({
		"background": "url(images/"+shuiji[rand]+".jpg) no-repeat center/cover"
		}) 
	})
	setInterval(function(){
		var shuiji=["08","11","3","14"];
		var rand = parseInt(Math.floor(Math.random() * 4+0));
		$(".slid").css({
		"background": "url(images/"+shuiji[rand]+".jpg) no-repeat center/cover"
		}) 
	},5000)