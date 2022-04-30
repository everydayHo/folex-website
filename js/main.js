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

// 포트폴리오 메뉴 엑티브

const filtersBtn = document.querySelectorAll('.filters button');
const highLight = document.querySelector('.highlight');

for (let i = 0; i < filtersBtn.length; i++) {
	filtersBtn[i].addEventListener('click', function (e) {
		let targetLeft = this.offsetLeft;
		let targetWidth = this.offsetWidth;
		highLight.style.left = targetLeft + 'px';
		highLight.style.width = targetWidth + 'px';
		e.target.classList.add('active');
		for (let k = 0; k < filtersBtn.length; k++) {
			if (filtersBtn[k] !== e.target) {
				filtersBtn[k].classList.remove('active');
			}
		}
	});
}

//  contact form 라벨 올리기
if ($('.contact-contents').length > 0) {
	var formInput = $('.contact-contents form input');
	var textMessage = $('.contact-contents form textarea');
	formInput.click(function () {
		$(this).prev().addClass('active');
		$(this).attr('placeholder', '');
	});
	textMessage.click(function () {
		$(this).prev().addClass('active');
		$(this).attr('placeholder', '');
	});
}

function initMap() {
	const Ottav = { lat: 45.431998, lng: -75.6942784 };
	const map = new google.maps.Map(document.querySelector('.map'), {
		zoom: 14,
		center: Ottav,
	});
	const contentString =
		'<div id="map-content">' +
		'<h2 class="title_bar center">adress</h2>' +
		'<p>Canada, 1050 Back Street, Ottava<br/>' +
		'Phone:  (123) 45 67 890</br>' +
		'hr.folex@gmail.com</p>' +
		'</div>';
	const infowindow = new google.maps.InfoWindow({
		content: contentString,
	});
	const marker = new google.maps.Marker({
		position: Ottav,
		map,
		title: 'Folex',
	});

	marker.addListener('click', () => {
		infowindow.open({
			anchor: marker,
			map,
			shouldFocus: false,
		});
	});
}

window.initMap = initMap;
