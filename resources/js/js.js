$(document).ready(function(){
	// puxar o menu com efeito .on monitora algo
	$('.nav-bar').on('click', function(){
	// adicionar a class para puxar menu modo antigo
	 	// if($('.menu-lateral'). hasClass('active')){
		// 	$('.menu-lateral').removeClass('active');
		// }else{
		// 	$('.menu-lateral').addClass('active');
		// }

		//forma nova de usar o se
		$('.menu-lateral').toggleClass('active');
		//mudar a navbar para x quando ativado
		$('.nav-bar i').toggleClass('fa-xmark fa-bars-staggered');
	});
   // carrocel de videos
	$('.videos .itens').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
	});

	// EFEITO PARA FUNÇOES DO MENU rolagem
	$('a').on('click', function(){
		if ($(this).is('[href]')){
			var link = $(this).attr('href');
			if(link.indexOf('#') > -1){
				event.preventDefault();

					$('.menu-lateral').removeClass('active');
					$('.nav-bar i.fa-xmark').toggleClass('fa-xmark fa-bars-staggered');
					$('html, body').animate({scrollTop: $(link).offset().top - 50}, 1500);
			}
		}
	});	
});