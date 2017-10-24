$(document).ready(function() {

	link         = $('.menu-open');
	link__active = $('.menu-open--active');
	openMenu     = $('.open-nav')
	nav_link     = $('.open-nav a')
	link.click(function() {
		link.toggleClass('menu-open--active');
		openMenu.toggleClass('open-nav--active');
	});
	nav_link.click(function() {
		link.toggleClass('menu-open--active');
		openMenu.toggleClass('open-nav--active');
	});

	//$('.main-nav a, .sub-nav a').mPageScroll2id({
	//	scrollSpeed: 500
	//});
	$(".main-menu, .sub-menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});


	$(window).scroll(function(){
		if($(window).scrollTop() > 500){
			$('.scroll-top').addClass('active');
		}
		else{
			$('.scroll-top').removeClass('active');
		}
	});

	$('.scroll-top').click(function() {
    $('html, body').animate({scrollTop: 0},500);
    return false;
  });

	$('.slick').slick({
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		infinite: true
	});

	$('.staff__item-link').on('click', function() {
	active  = $(this).closest('.staff__item').find('.staff-read-more');
	sibling = $(this).siblings('.staff-read--active');
   	$('.staff-read-more').not(sibling).removeClass('staff-read--active');
    $(active).toggleClass('staff-read--active');
    return false;
  });

	$(".staff__item-link").on('click', function () {
	t = $(this).closest('.staff__item');
	s = $(this).closest('.staff-list').find('.clicked');
	k = $(this).parent('.staff__item');
		$(s).not(k).removeClass('clicked');
    $(t).toggleClass('clicked');
    });

});
