'use strict'
// SideNav
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
});

// Floating Button
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
    });
});

// Slider Banner Principal
var mySwiper = new Swiper('.swiper-container_header', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
});




// Slider Tajetas Objetivos
var swiper = new Swiper('.swiper-container-mb', {
    slidesPerView: 1,
    spaceBetween: 0,
    // init: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: false,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
    }
});


// Slider Embajadores
var swiper = new Swiper('.swiper-container_embajadores', { 
    slidesPerView: 1,
    spaceBetween: 0,
    
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
    }
    
});

// Slider Fichas
var swiper = new Swiper('.swiper-recomendaciones', {
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
    }
});


 

// Segundo Menu
// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        document.getElementById("navbar-mb").style.top = "64px";
    } else {
        document.getElementById("navbar-mb").style.top = "0px";
    }
} 



// with jQuery
$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy({
            scrollOffset:0
    });
    $('.fixed-action-btn').floatingActionButton({
        hoverEnabled: false
    });
    $('.modal').modal();
    // lazy load
    $('.lazy').Lazy();
    // Scroll to Top 
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top, #logo-top').click(function () {      // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0                       // Scroll to top of body
        }, 500);
    });
    
});


