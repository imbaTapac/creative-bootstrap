$(function() {

//menu portfolio
	$(".menu-portf").click(function() {
		$("nav ul").slideToggle();
	});


	//появление главного меню
	$('.main-head .fa-bars').click(function() {
		$(this).parents('.main-head').find('.main-nav').css('opacity','1')
		$(this).parents('.main-head').find('.main-nav').css('z-index','5')
	});
	$('.main-head .fa-times').click(function() {
		$(this).parents('.main-head').find('.main-nav').css('opacity','0')
		$(this).parents('.main-head').find('.main-nav').css('z-index','-5')
	});

//наведение на соц сети
	$('.sponsor, .soc-butt a').hover(function(){
		$(this).find('.nohover').hide();
		$(this).find('.hover').show();
	},
	function() {
		$(this).find('.nohover').show();
		$(this).find('.hover').hide();
	});



//
	$('.s-6 .item, .s-8 .item').hover(
function(){
	$(this).find('.item-text').show();
	$(this).find('.more').show();
	},
		function(){
	$(this).find('.item-text').hide();
	$(this).find('.more').hide();
	})

	$('.s-5 .wrap-img').hover(
	function(){
			$(this).css("background-color", "#ec6659");
	},
	function(){
		$(this).css("background-color", "transparent");
	})	;

	$('.s-3 .item-wrap a').hover(
		function(){
		$(this).parents(".item-wrap").find('.wrap-img').css("background-color", "#ec6659");
		$(this).parents('.item-wrap').find('.nohover').hide();
		$(this).parents('.item-wrap').find('.hover').show();
	},
	function(){
		$(this).parents(".item-wrap").find('.wrap-img').css("background-color", "#fff");
		$(this).parents('.item-wrap').find('.hover').hide();
		$(this).parents('.item-wrap').find('.nohover').show();
	});

//настройка слайдера
	var owl = $(".slider");
	owl.owlCarousel({
		loop: true,
		items: 1,
		itemClass: "slide-wrap",
		nav: true,
		navText: "",
	
		
	});
		$(".next").click(function(){
			owl.trigger('next.owl.carousel');
		});
		$(".prev").click(function(){
			owl.trigger('prev.owl.carousel');
		});


	$(".main-nav").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
				//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
		$('.main-nav').css("opacity","0");
		$('.main-nav').css("z-index","-5");
	});

});

 



