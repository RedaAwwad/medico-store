// Import Base file
// import 'virtual:svg-icons-register';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/css/style.css';
import '@/assets/scss/main.scss';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import * as bootstrap from 'bootstrap'
import { Modal } from 'bootstrap';
// import scrollIntoView from 'scroll-into-view';
import { assignProductColorsVariants, updateProductColorVariant } from './helpers/helpers'

$(function () {
    // setTimeout(function () {
    //     $('#preloader').addClass('hidden');
    //     // $('body').removeClass('overflow-hidden');
        
    // }, 1000);

    // init bootstrap modals
    Array.from(document.querySelectorAll('.custom-modal')).forEach(modalNode => {
        new Modal(modalNode)
    }) 

    // navbar menu navigation
    $('#openMenu').on('click', function () {
        $('#navbarMenu').addClass('active');
        $('.navbar-menu__overlay').addClass('active');
    })

    $('#closeMenu').on('click', function () {
        $('#navbarMenu').removeClass('active');
        $('.navbar-menu__overlay').removeClass('active');
    })

    $('#menuMore').on('click', function () {
        $('#navbarMenu').toggleClass('active');
        $('.navbar-menu__overlay').toggleClass('active');
    })

    function reveal(elementClass = '.reveal') {
        const reveals = document.querySelectorAll(elementClass);

        for (let i = 0; i < reveals.length; i++) {
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 50;

        if (elementTop < window.innerHeight - elementVisible) {
            reveals[i].classList.add("slide-up");
        }
        }
    }

    function makeNavbarFixed () {
        if (window.scrollY < 100) {
            $('.navbar__inner').removeClass('navbar__inner--fixed');
            $('.navbar__inner .logo').attr('src', $('.navbar__inner .logo').attr('data-logo-src'));
            return;
        }

        if (window.scrollY < 100) {
            $('.navbar__inner').removeClass('navbar__inner--fixed');
            $('.navbar__inner .logo').attr('src', $('.navbar__inner .logo').attr('data-logo-src'));
        } else {
            $('.navbar__inner').addClass('navbar__inner--fixed');
            $('.navbar__inner .logo').attr('src', $('.navbar__inner .logo').attr('data-colored-logo-src'));
        }
    }

    window.addEventListener("scroll", function () {
        reveal();
        makeNavbarFixed();
    });

    makeNavbarFixed();

    // toggle navbar sub menus
    $('.link-with-menu').on('mouseenter touchstart', function () {
        $(this).addClass('active')
    })

    $('.link-with-menu').on('mouseleave touchend', function () {
        $(this).removeClass('active')
    })

    // assign colors variants to elements
    assignProductColorsVariants();

    // update product color
    $('.product-card__variants').on('mouseenter touchstart', '.btn', function () {
        updateProductColorVariant(this);
    })

    // hero slider
    if($('.hero-slider').length) {
        $('.hero-slider').slick({
            rtl: document.dir == 'rtl',
            lazyLoad: 'ondemand',
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            // dots: true,
        });
    }

    // latest products slider
    if($('.latest-products-slider').length) {
        let initialSlide = 2

        if(window.innerWidth < 500) {
            initialSlide = 0
        }

        $('.latest-products-slider').slick({
            rtl: document.dir == 'rtl',
            lazyLoad: 'ondemand',
            // dots: true,
            infinite: true,
            speed: 300,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 1380,
                    settings: {
                        slidesToShow: 3,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 2,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 740,
                        settings: {
                        slidesToShow: 2,
                        centerMode: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                    }
                }
            ]
        });
    }

    // brands section slider
    if($('.brands-section__slider').length) {
        let initialSlide = 2

        if(window.innerWidth < 500) {
            initialSlide = 0
        }

        $('.brands-section__slider').slick({
            rtl: document.dir == 'rtl',
            lazyLoad: 'ondemand',
            arrows: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 3,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 740,
                        settings: {
                        slidesToShow: 2,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        centerMode: true,
                    }
                }
            ]
        });
    }

    // by-category-name-slider
    if($('.by-category-name__slider').length) {
        $('.by-category-name__slider').slick({
            rtl: document.dir == 'rtl',
            lazyLoad: 'ondemand',
            arrows: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 2,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 740,
                        settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                    }
                }
            ]
        });
    }

    if($('.services-slider').length) {
        new Swiper(".services-slider", {
            modules: [Navigation, Pagination],
            slidesPerView: 1,
            spaceBetween: 15,
            // centeredSlides: true,
            // loop: true,
            pagination: {
                el: ".services-slider__pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".services-slider__next",
                prevEl: ".services-slider__prev",
            },
            breakpoints: {
                '@0.75': {
                  slidesPerView: 2,
                  centeredSlides: false,
                },
                '@1.00': {
                  slidesPerView: 3,
                },
                '@1.50': {
                  slidesPerView: 4,
                },
            }
        });
    }

    if($('.projects-slider').length) {
        new Swiper(".projects-slider", {
            modules: [Pagination],
            slidesPerView: 2,
            // centeredSlides: true,
            spaceBetween: 10,
            // loop: true,
            pagination: {
                el: ".projects-slider__pagination",
                clickable: true,
            },
            breakpoints: {
                '@0.75': {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                '@1.00': {
                  slidesPerView: 4,
                },
                '@1.25': {
                    slidesPerView: 5,
                  },
                '@1.50': {
                  slidesPerView: 6,
                },
            }
        });
    }

    // smooth scrolling
    // $(".scroll-link").on("click", function (event) {
    //     const target = $(this).attr("data-href");

    //     if(!$(target).length) return true;

    //     event.preventDefault();

    //     $('.nav-link').removeClass('active');
    //     $(this).addClass('active');
    //     $("html, body").animate({
    //         scrollTop: ($(target).offset().top - 75)
    //     }, 300);
    // });

    $('.services-slider .service-card__content').each(function (index, item) {
        $(this).css({ 
            'bottom': `-${$(this).find('.service-card__footer').height()}px`,
        })
    });


    $('.serviceCardBtn').on('click', function () {
        $('.serviceCardBtn').removeClass('active');
        $('.service-details-container').removeClass('active');
        $(this).addClass('active');
        $(`.service-details-container[data-index="${$(this).attr('data-target')}"]`).addClass('active');
    });

   
    $('.projects-grid__slider .btn').on('click', function () {
        $('.projects-grid__slider .btn').removeClass('active');
        $(this).addClass('active');
    });

    // // click outside = close mobile menu
    // $(window).on('click', function() {
    //     $('.dropdown-menu').removeClass('opacity-100 translate-y-0');
    //     $('.dropdown-menu').addClass('invisible opacity-0 translate-y-1');
    //     $('.dropdown-menu-controller').find('svg').removeClass('rotate-180');
    // });
    
    // $('.dropdown-menu-container').on('click', function(event){
    //     event.stopPropagation();
    // });

    // $('.scroll-down').on('click', function() {
    //     $('html, body').animate({
    //     scrollTop: ($($(this).data('scroll-target')).offset().top - 50)
    //     }, 1000);
    // });

});

