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
			} else {
				$('.fixed-nav').fadeOut();
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
