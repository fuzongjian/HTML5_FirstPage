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





	
})