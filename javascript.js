$(document).ready(function(){
	$('#work ul li').on('click', function(){
		event.preventDefault();
		$(this).addClass('is_active').siblings().removeClass('is_active');
	});

	// #scroll_navbar
	$(window).scroll(function(){
		console.log($(window).scrollTop());
		if($(window).scrollTop() < 766){
			$('#scroll_navbar').fadeOut(400);
		}
		if($(window).scrollTop() > 767){
			$('#scroll_navbar').fadeIn(400);
		}
	});

	$(window).scroll(function(){
		console.log($(window).scrollTop());
		if($(window).scrollTop() < 52){
			$('#scroll_navbar_work').fadeOut(400);
		}
		if($(window).scrollTop() > 53){
			$('#scroll_navbar_work').fadeIn(400);
		}
	});

	$(window).scroll(function(){
		console.log($(window).scrollTop());
		if($(window).scrollTop() < 100){
			$('.go_up').fadeOut(1000);
		}
		if($(window).scrollTop() > 101){
			$('.go_up').fadeIn(1000);
		}
	});


	$(".intro_button").on('click',function(){
		$("html, body").animate({scrollTop: 768}, "slow");
	});

	$(".work_button").on('click',function(){
		$("html, body").animate({scrollTop: 1432}, "slow");
	});

	$(".contact_button").on('click',function(){
		$("html, body").animate({scrollTop: 1885}, "slow");
	});

	$(".go_up").on('click',function(){
		$("html, body").animate({scrollTop: 0}, "slow");
	});

	// body
	$('body').fadeIn(1300);
});


