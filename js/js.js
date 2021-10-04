window.onload = function() {
	$(".fhtop").hide();
	$(".e-two").addClass("d-one");
	var OriginTitile = document.title;
	var titleTime;
	document.addEventListener('visibilitychange', function() {
		if (document.hidden) {
			document.title = '(●—●)喔哟，崩溃啦';
			clearTimeout(titleTime);
		} else {
			document.title = '(/≧▽≦/)咦！又好了！' + OriginTitile;
			titleTime = setTimeout(function() {
				document.title = OriginTitile;
			}, 2000);
		}
	});
}
$(window).scroll(function() {
	var xx = $(document).scrollTop();
	if (xx > 200) {
		$(".job").css({
			"top": "20px"
		})
	}
	if (xx > 74) {
		$(".top").addClass("topdw");
	} else {
		$(".top").removeClass("topdw");
	}
	if (xx > 70) {
		$(".fhtop").show();
	} else {
		$(".fhtop").hide();
	}
})
$(".fhtop").click(function() {
	$('html,body').animate({
		scrollTop: 0
	}, 300)
})




$(".evening").click(function() {
	if ($(".e-one").hasClass("d-one")) {
		$(".e-one").removeClass("d-one");
		$(".e-two").addClass("d-one");

	} else {
		$(".e-one").addClass("d-one");
		$(".e-two").removeClass("d-one");
	}
	if ($(".e-one").hasClass("d-one")) {
		$("body").css({
			"background": "#002661"
		})
		$(".evening").css({
			"background": ""
		})
		$(".job").css({
			"background": "#002661",
			"color": "white",
			"box-shadow": "0 0 25px #000"
		})
		$("#lx").css({
			"color": "white"
		})
		$(".banne").css({
			"background": "#002661",
			"color": "white"
		})
	} else {
		$("body").css({
			"background": ""
		})
		$(".evening").css({
			"background": ""
		})
		$(".job").css({
			"background": "",
			"color": "black",
			"box-shadow": "0 0 25px #fff"
		})
		$("#lx").css({
			"color": "black"
		})
		$(".banne").css({
			"background": "",
			"color": "black"
		})
	}
})
//.d-one
$(".ckgd").click(function() {
	if ($(".ycrz").hasClass("d-none")) {
		$(".ycrz").removeClass("d-none");
		$(".ckgd").text("Put it away");
	} else {
		$(".ycrz").addClass("d-none");
		$(".ckgd").text("MORE");
	}
})

/* 点击烟花 */
function clickEffect() {
	let balls = [];
	let longPressed = false;
	let longPress;
	let multiplier = 0;
	let width, height;
	let origin;
	let normal;
	let ctx;
	const colours = ["#223A6C", "#14FFEC", "#00E0FF", "#0F447A"];
	const canvas = document.createElement("canvas");
	document.body.appendChild(canvas);
	canvas.setAttribute("style",
		"width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; position: fixed; pointer-events: none;");
	const pointer = document.createElement("span");
	pointer.classList.add("pointer");
	document.body.appendChild(pointer);

	if (canvas.getContext && window.addEventListener) {
		ctx = canvas.getContext("2d");
		updateSize();
		window.addEventListener('resize', updateSize, false);
		loop();
		window.addEventListener("mousedown", function(e) {
			pushBalls(randBetween(10, 20), e.clientX, e.clientY);
			document.body.classList.add("is-pressed");
			longPress = setTimeout(function() {
				document.body.classList.add("is-longpress");
				longPressed = true;
			}, 500);
		}, false);
		window.addEventListener("mouseup", function(e) {
			clearInterval(longPress);
			if (longPressed == true) {
				document.body.classList.remove("is-longpress");
				pushBalls(randBetween(50 + Math.ceil(multiplier), 100 + Math.ceil(multiplier)), e.clientX, e
					.clientY);
				longPressed = false;
			}
			document.body.classList.remove("is-pressed");
		}, false);
		window.addEventListener("mousemove", function(e) {
			let x = e.clientX;
			let y = e.clientY;
			pointer.style.top = y + "px";
			pointer.style.left = x + "px";
		}, false);
	} else {
		console.log("canvas or addEventListener is unsupported!");
	}


	function updateSize() {
		canvas.width = window.innerWidth * 2;
		canvas.height = window.innerHeight * 2;
		canvas.style.width = window.innerWidth + 'px';
		canvas.style.height = window.innerHeight + 'px';
		ctx.scale(2, 2);
		width = (canvas.width = window.innerWidth);
		height = (canvas.height = window.innerHeight);
		origin = {
			x: width / 2,
			y: height / 2
		};
		normal = {
			x: width / 2,
			y: height / 2
		};
	}
	class Ball {
		constructor(x = origin.x, y = origin.y) {
			this.x = x;
			this.y = y;
			this.angle = Math.PI * 2 * Math.random();
			if (longPressed == true) {
				this.multiplier = randBetween(14 + multiplier, 15 + multiplier);
			} else {
				this.multiplier = randBetween(6, 12);
			}
			this.vx = (this.multiplier + Math.random() * 0.5) * Math.cos(this.angle);
			this.vy = (this.multiplier + Math.random() * 0.5) * Math.sin(this.angle);
			this.r = randBetween(8, 12) + 3 * Math.random();
			this.color = colours[Math.floor(Math.random() * colours.length)];
		}
		update() {
			this.x += this.vx - normal.x;
			this.y += this.vy - normal.y;
			normal.x = -2 / window.innerWidth * Math.sin(this.angle);
			normal.y = -2 / window.innerHeight * Math.cos(this.angle);
			this.r -= 0.3;
			this.vx *= 0.9;
			this.vy *= 0.9;
		}
	}

	function pushBalls(count = 1, x = origin.x, y = origin.y) {
		for (let i = 0; i < count; i++) {
			balls.push(new Ball(x, y));
		}
	}

	function randBetween(min, max) {
		return Math.floor(Math.random() * max) + min;
	}

	function loop() {
		ctx.fillStyle = "rgba(255, 255, 255, 0)";
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for (let i = 0; i < balls.length; i++) {
			let b = balls[i];
			if (b.r < 0) continue;
			ctx.fillStyle = b.color;
			ctx.beginPath();
			ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
			ctx.fill();
			b.update();
		}
		if (longPressed == true) {
			multiplier += 0.2;
		} else if (!longPressed && multiplier >= 0) {
			multiplier -= 0.4;
		}
		removeBall();
		requestAnimationFrame(loop);
	}

	function removeBall() {
		for (let i = 0; i < balls.length; i++) {
			let b = balls[i];
			if (b.x + b.r < 0 || b.x - b.r > width || b.y + b.r < 0 || b.y - b.r > height || b.r < 0) {
				balls.splice(i, 1);
			}
		}
	}
}
clickEffect(); //调用特效函数



/* 背景 */
$(function() {
	var canvas = document.querySelector('canvas'),
		ctx = canvas.getContext('2d')
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx.lineWidth = .3;
	ctx.strokeStyle = (new Color(150)).style;

	var mousePosition = {
		x: 30 * canvas.width / 100,
		y: 30 * canvas.height / 100
	};

	var dots = {
		nb: 550,
		distance: 50,
		d_radius: 100,
		array: []
	};

	function colorValue(min) {
		return Math.floor(Math.random() * 255 + min);
	}

	function createColorStyle(r, g, b) {
		return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)';
	}

	function mixComponents(comp1, weight1, comp2, weight2) {
		return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
	}

	function averageColorStyles(dot1, dot2) {
		var color1 = dot1.color,
			color2 = dot2.color;

		var r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
			g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
			b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
		return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
	}

	function Color(min) {
		min = min || 0;
		this.r = colorValue(min);
		this.g = colorValue(min);
		this.b = colorValue(min);
		this.style = createColorStyle(this.r, this.g, this.b);
	}

	function Dot() {
		this.x = Math.random() * canvas.width;
		this.y = Math.random() * canvas.height;

		this.vx = -.5 + Math.random();
		this.vy = -.5 + Math.random();

		this.radius = Math.random() * 2;

		this.color = new Color();
	}

	Dot.prototype = {
		draw: function() {
			ctx.beginPath();
			ctx.fillStyle = this.color.style;
			ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
			ctx.fill();
		}
	};

	function createDots() {
		for (i = 0; i < dots.nb; i++) {
			dots.array.push(new Dot());
		}
	}

	function moveDots() {
		for (i = 0; i < dots.nb; i++) {

			var dot = dots.array[i];

			if (dot.y < 0 || dot.y > canvas.height) {
				dot.vx = dot.vx;
				dot.vy = -dot.vy;
			} else if (dot.x < 0 || dot.x > canvas.width) {
				dot.vx = -dot.vx;
				dot.vy = dot.vy;
			}
			dot.x += dot.vx;
			dot.y += dot.vy;
		}
	}

	function connectDots() {
		for (i = 0; i < dots.nb; i++) {
			for (j = 0; j < dots.nb; j++) {
				i_dot = dots.array[i];
				j_dot = dots.array[j];

				if ((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x -
						j_dot.x) > -dots.distance && (i_dot.y - j_dot.y) > -dots.distance) {
					if ((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots
						.d_radius && (i_dot.x - mousePosition.x) > -dots.d_radius && (i_dot.y - mousePosition
							.y) > -dots.d_radius) {
						ctx.beginPath();
						ctx.strokeStyle = averageColorStyles(i_dot, j_dot);
						ctx.moveTo(i_dot.x, i_dot.y);
						ctx.lineTo(j_dot.x, j_dot.y);
						ctx.stroke();
						ctx.closePath();
					}
				}
			}
		}
	}

	function drawDots() {
		for (i = 0; i < dots.nb; i++) {
			var dot = dots.array[i];
			dot.draw();
		}
	}

	function animateDots() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		moveDots();
		connectDots();
		drawDots();

		requestAnimationFrame(animateDots);
	}

	$('canvas').on('mousemove', function(e) {
		mousePosition.x = e.pageX;
		mousePosition.y = e.pageY;
	});

	$('canvas').on('mouseleave', function(e) {
		mousePosition.x = canvas.width / 2;
		mousePosition.y = canvas.height / 2;
	});

	createDots();
	requestAnimationFrame(animateDots);
});
