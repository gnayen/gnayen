$(document).ready(function(){
	$('#work ul li').on('click', function(){
		event.preventDefault();
		$(this).addClass('is_active').siblings().removeClass('is_active');
	});

	// #scroll_navbar
	// $(window).scroll(function(){
	// 	console.log($(window).scrollTop());
	// 	if($(window).scrollTop() < 405){
	// 		$('#scroll_navbar').fadeOut(400);
	// 	}
	// 	if($(window).scrollTop() > 406){
	// 		$('#scroll_navbar').fadeIn(400);
	// 	}
	// });

	$(window).scroll(function(){
		console.log($(window).scrollTop());
		if($(window).scrollTop() < $('#banner').height()){
			$('#scroll_navbar').fadeOut(400);
		}
		if($(window).scrollTop() > $('#banner').height()){
			$('#scroll_navbar').fadeIn(400);
		}
	});

	// $(window).scroll(function(){
	// 	console.log($(window).scrollTop());
	// 	if($(window).scrollTop() < 52){
	// 		$('#scroll_navbar_work').fadeOut(400);
	// 	}
	// 	if($(window).scrollTop() > 53){
	// 		$('#scroll_navbar_work').fadeIn(400);
	// 	}
	// });

	$(window).scroll(function(){
		console.log($(window).scrollTop());
		if($(window).scrollTop() < 100){
			$('.go_up').fadeOut(1000);
		}
		if($(window).scrollTop() > 101){
			$('.go_up').fadeIn(1000);
		}
	});


	// $(".intro_button").on('click',function(){
	// 	$("html, body").animate({scrollTop: 768}, "slow");
	// });

	$(".intro_button").on('click',function(){
		$("html, body").animate({scrollTop:$("#intro").offset().top}, "slow");
	});

	// $(".work_button").on('click',function(){
	// 	$("html, body").animate({scrollTop: 1432}, "slow");
	// });

	$(".work_button").on('click',function(){
		$("html, body").animate({scrollTop:$("#work").offset().top - $('#scroll_navbar').height() +'px'}, "slow");
	});

	// $(".contact_button").on('click',function(){
	// 	$("html, body").animate({scrollTop: 1885}, "slow");
	// });

	$(".contact_button").on('click',function(){
		$("html, body").animate({scrollTop:$("#contact").offset().top}, "slow");
	});


	$(".go_up").on('click',function(){
		$("html, body").animate({scrollTop: 0}, "slow");
	});

	// body
	$('body').fadeIn(1300);

	// enlarge
	$('#enlarge').hide();
	$('#ui-flow').mouseenter('on',function(){
		$('#enlarge').fadeIn();
	})

	$('#ui-flow').mouseout('on',function(){
		$('#enlarge').fadeOut();
	})

	$('#ui-flow img').click('on',function(){
		$('#enlarge-content').fadeIn();
	})

	// mobile navbar
	$('.menu-icon-content').hide();
	$('#menu-icon,#menu-icon-1').click('on', function(){
		$('.bg-img-mask').show();
		$('.menu-icon-content').slideToggle();
	})

	// mobile navbar slideup
	$('.intro_button').click('on', function(){
		$('.menu-icon-content').slideUp();
	})

	$('.work_button').click('on', function(){
		$('.menu-icon-content').slideUp();
	})

	$('.contact_button').click('on', function(){
		$('.menu-icon-content').slideUp();
	})

	$('.cv').click('on', function(){
		$('.menu-icon-content').slideUp();
	})
});


