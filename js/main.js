'use strict';

// fullpage
$(document).ready(function () {
	if ($('#fullpage').length > 0) {
		$('#fullpage').fullpage({
			//options here
			autoScrolling: true,
			css3: true,
			anchors: [
				'firstPage',
				'secondPage',
				'thirdPage',
				'forthpage',
				'fifthpage',
			],
			easing: 'easeInOutCubic',
			easingcss3: 'ease-out',
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
	}
});

// swiper
if ($('.main-slides').length > 0) {
	new Swiper('.main-slides', {
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
}

//about review slider
if ($('.testimonial-slides').length > 0) {
	new Swiper('.testimonial-slides', {
		// Optional parameters
		loop: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}

// toggle menu
$('.toggle-btn').click(function () {
	$('.toggle_menu').addClass('active');
});
$('.toggle_menu .close').click(function () {
	$('.toggle_menu').removeClass('active');
});

// subpage header fixed

$(window).scroll(function () {
	if ($(this).scrollTop() > 120) {
		$('.subpage nav').addClass('active');
		$('.logo img').attr('src', './images/logo-dark.png');
	} else {
		$('.subpage nav').removeClass('active');
		$('.logo img').attr('src', './images/logo.png');
	}
	// about top arrow
	var footerOst = $('.footer').offset().top - 800;
	if ($(this).scrollTop() > footerOst) {
		$('.back_to_top').addClass('active');
	} else {
		$('.back_to_top').removeClass('active');
	}
});
const arrowUp = document.querySelector('.about_btt');
arrowUp.addEventListener('click', (event) => {
	document.body.scrollIntoView({ behavior: 'smooth' });
});

// about animate

const animateTarget = document.querySelectorAll('[data-move]');

const eventHandler = () => {
	animateTarget.forEach((item, index) => {
		let targetOst = item.offsetTop - 300;
		let targetClass = item.getAttribute('data-move');
		if (window.scrollY > targetOst) {
			item.classList.add(targetClass);
		}
	});
};

document.addEventListener('scroll', eventHandler);
