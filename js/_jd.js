$(function(){
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

	var c=0;
	function autoRun(){

	c++;
	c=(c==6)?0:c;
	// 让c号图片显示，兄弟图片隐藏
	// //c号li变红，兄弟li变灰
	$('#middle .logo1 img').eq(c).fadeIn(500).siblings('img').hide();
	$('#middle .logo1 ul li').eq(c).css({'background':'#E4393C'}).siblings('li').css({'background':'#999'});			
	}
	 var re=setInterval(autoRun,2000);//设置一个定时器，每秒运行一次
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

	// 左侧耳机菜单区域
	$('#middle .left .l').hover(function() {
		$(this).find('.box_hide').show();
		$(this).find('p').addClass('cur');
		
	}, function() {
		$(this).find('.box_hide').hide();
		$(this).find('p').removeClass('cur')
	});

})