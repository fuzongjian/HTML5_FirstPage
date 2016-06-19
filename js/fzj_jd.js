$(function () {
	// 顶部区域加入移入事件
	$('.center .right .ss').hover(function() {
		$(this).find('.jj').css({'background':'white'});
		$(this).find('.inter').stop().animate({'top':'-22px'}, 200);
		$(this).find('.hide_box').show();
	}, function() {
		$(this).find('.jj').css({'background':'#F7F7F7'});
		$(this).find('.inter').stop().animate({'top':'0px'}, 200);
		$(this).find('.hide_box').hide();
	});
	
	// 会员区域
	$('#top .vip').hover(function() {
		$(this).css({'background':'#B5171A'});
	}, function() {
		$(this).css({'background':'#E4393C'});
	});

	// 关注京东
	$('#top .guanzhu').hover(function() {
		$('#top .tiaoma').css({'display':'block'});
	}, function() {
		$('#top .tiaoma').css({'display':'none'});
	});

	// 我的京东
	$('.as ').hover(function() {
		$(this).find('.dd').css({'background':'white'});
		$(this).find('.ss').show();
		$(this).find('.sanj').css({'background':'url(images/2.png) no-repeat -111px -17px'});
	}, function() {
		$(this).find('.dd').css({'background':'#F7F7F7'});
		$(this).find('.ss').hide();
		$(this).find('.sanj').css({'background':'url(images/2.png) no-repeat -112px 0px'});
	});

	$('#search .my_jd .zuo li').hover(function() {
		$(this).css({'background':'#F5F5F5'});
		$(this).find('a').css({'color':'#E4393C'});
	}, function() {
		$(this).css({'background':'white','color':'#005EA7'});
		$(this).find('a').css({'color':'#005EA7'})
	});

	// 定时器方法设置图片轮播
	var c =0;
	function autoRun() {
		console.log(c);
		c++;
		c=(c==6)?0:c;
		$('#middle .logo1 img').eq(c).fadeIn(500).siblings('img').hide();
		$('#middle .logo1 ul li').eq(c).css({'background':'#E4393C'}).siblings('li').css({'background':'#999'});
	}
	var re = setInterval(autoRun,2000);
	// 给鼠标加入移入事件
	$('#middle .logo1 ul li').mouseenter(function() {
		clearInterval(re);//清理定时器
		c = $(this).index();//获得鼠标移入的li的序号
		$('#middle .logo1 img').eq(c).fadeIn(500).siblings('img').hide();	// 让c号图片显示，兄弟图片隐藏
		$('#middle .logo1 ul li').eq(c).css({'background':'#E4393C'}).siblings('li').css({'background':'#999'});	//c号li变红，兄弟li变灰							
	});

	// 给鼠标加入移出事件
	$('#middle .logo1 ul li').mouseleave(function() {
		re=setInterval(autoRun,1000);
		/* Act on the event */
	});

	// 左侧二级菜单区域开始
	$('#middle .left .l').hover(function () {
		$(this).find('.box_hide').show();
		$(this).find('p').addClass('cur');
	},function () {
		$(this).find('.box_hide').hide();
		$(this).find('p').removeClass('cur');
	});
	// 左侧二级菜单区域结束

	// 图片轮播下面区域开始
	$('#middle .logo2 .left1').hover(function () {
		$(this).css({'background':'#EEEEEE'});//鼠标移入之后
		$('#middle .logo2 .zuo').css({'background':'url(images/15.png) no-repeat -6px -5px'});
	},function () {
		$(this).css({'background':'white'});//鼠标移开之后
		$('#middle .logo2 .zuo').css({'background':'url(images/1.png) no-repeat -91px -50px'})
	});

	$('#middle .logo2 .left2').hover(function() {
		$(this).css({'background':' #EEEEEE'});
		$('#middle .logo2 .you').css({'background':'url(images/15.png) no-repeat -6px -42px'});
	}, function() {
		$(this).css({'background':'white'});
		$('#middle .logo2 .you').css({'background':'url(images/1.png) no-repeat -60px -50px'});
	});

	// 鼠标添加点击事件让图片左右移动
	var l = 0;
	$('#middle .logo2 .left1').click(function () {
		l++;
		if (l==6) {
			l=0;
		}
		$('#middle .logo2 .b').stop().animate({'right':-606*l},600);
	});
	$('#middle .logo2 .left2').click(function () {
		l--;
		if (l==-1) {
			l=5;
		}
		$('#middle .logo2 .b').stop().animate({'right':-606*l},600);
	});

	// 生活区域开始
	// 给div加入移入事件
	$('#shenghuo div').mouseenter(function () {
		s = $(this).index();//获得当前div序号
		$('#shenghuo .move').eq(s).stop().animate({'left':'-10px'},400);//鼠标移入时图片向左移动
	});
	$('#shenghuo div').mouseleave(function () {
		$('#shenghuo .move').eq(s).stop().animate({'left':'0px'},400);
	});



})