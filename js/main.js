'use strict';

// fullpage
$(document).ready(function () {
	$('#fullpage').fullpage({
		//options here
		autoScrolling: true,
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'forthpage', 'fifthpage'],
		afterLoad: function (origin, destination, direction, trigger) {
			// 색인 사용

			if (destination > 1) {
				$('.fixed-nav').fadeIn();
				$('.header nav').addClass('active');
				$('.logo img').attr('src', './images/logo-dark.png');
				$('.toggle-btn img').attr('src', './images/menu_icon-dark.png');
			} else {
				// $('.fixed-nav').fadeOut();
				$('.header nav').removeClass('active');
				$('.logo img').attr('src', './images/logo.png');
				$('.toggle-btn img').attr('src', './images/menu_icon.png');
			}
			if (destination === 6) {
				$('.back_to_top').addClass('active');
				$('.fixed-nav').fadeOut();
			} else {
				$('.back_to_top').removeClass('active');
			}
			$('.fixed-nav').find('a').removeClass('active');
			$('.fixed-nav')
				.find('a')
				.eq(destination - 1)
				.addClass('active');
		},
	});
	//methods
	$.fn.fullpage.setAllowScrolling(true);
});

// swiper
const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

// toggle menu
$('.toggle-btn').click(function () {
	$('.toggle_menu').addClass('active');
});
$('.toggle_menu .close').click(function () {
	$('.toggle_menu').removeClass('active');
});
