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
import {
    reveal,
    makeNavbarFixed,
    assignProductColorsVariants, 
    updateProductColorVariant,
    convertNumberWithCommas,
} from './helpers/helpers'

import { 
    updateProductColor,
    updateProductSize
} from './helpers/product-details'

$(function () {
    // setTimeout(function () {
    //     $('#preloader').addClass('hidden');
    //     // $('body').removeClass('overflow-hidden');
        
    // }, 1000);

    // init bootstrap modals
    Array.from(document.querySelectorAll('.custom-modal')).forEach(modalNode => {
        new Modal(modalNode)
    })

    // convert product's price to be seperated with commas
    $('.convert-price').each((index, ele) => {
        $(ele).text(convertNumberWithCommas($(ele).text()));
    })

    // show tatris modal
    if($('#tatrizProductModal').length) {
        const tatrizModal = new Modal(document.getElementById('tatrizProductModal'));

        $('#embroidery').on('change', () => {
            if($('#embroidery').is(':checked')) {
                tatrizModal.show();
            }
        })

        // document.getElementById('tatrizProductModal')
        // .addEventListener('hidden.bs.modal', function () {
        //     $('#embroidery').click();
        // })
    }

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

    window.addEventListener("scroll", function () {
        reveal();
        makeNavbarFixed();
    });

    makeNavbarFixed();

    function addProductToFavorite(url, data) {
        $.ajax({
          url,
          type: "POST",
          data,
          success: function(){
            Swal.fire({
              icon: "success",
              title: "تمت الإضافة إلى المفضلة",
              confirmButtonColor: "#00A9A7",
              confirmButtonText: "نعم، موافق"
            });
          },
          error: function(xhr, status, error){
            console.error("Error:", error);
            Swal.fire({
              icon: "error",
              title: "حدث خطأ غير متوقع",
              confirmButtonColor: "#00A9A7",
              confirmButtonText: "نعم، موافق"
            });
          }
        });
    }

    // make addProductToFavorite func as a GLOBAL FUNCTION
    window.addProductToFavorite = addProductToFavorite;

    // toggle navbar sub menus
    $('.link-with-menu').on('mouseenter', function () {
        $(this).addClass('active')
    })

    $('.link-with-menu').on('mouseleave', function () {
        $(this).removeClass('active')
    })

    // assign colors variants to elements
    assignProductColorsVariants();

    // update product color
    $('.product-card__variants').on('mouseenter touchstart', '.btn', function () {
        updateProductColorVariant(this);
    })

    // show filters
    $('#btnFilters').on('click', function () {
        $('#filterSidebar').addClass('show');
        $('#filterSidebarOverlay').addClass('show');
    })

    $('#btnCloseFilters').on('click', function () {
        $('#filterSidebar').removeClass('show');
        $('#filterSidebarOverlay').removeClass('show');
    })

    // product quantity counter
    $('.product-counter .btn-increase').on('click', function () {
        let quantity = $(this).parent().find('input').val();
        quantity++;

        $(this).parent().find('input').val(quantity);
        $(this).parent().find('span').text(quantity);
    })

    $('.product-counter .btn-decrease').on('click', function () {
        let quantity = $(this).parent().find('input').val();
        if(quantity > 1) {
            quantity--;
    
            $(this).parent().find('input').val(quantity);
            $(this).parent().find('span').text(quantity);
        }
    })

    updateProductColor();
    updateProductSize();

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

    // testimonial slider
    if($('.testimonial__slider').length) {
        let initialSlide = 2

        if(window.innerWidth < 500) {
            initialSlide = 0
        }

        $('.testimonial__slider').slick({
            rtl: document.dir == 'rtl',
            lazyLoad: 'ondemand',
            arrows: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 3,
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
                    breakpoint: 992,
                        settings: {
                        slidesToShow: 2,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 600,
                        settings: {
                        slidesToShow: 1,
                        centerMode: true,
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

    // $('.services-slider .service-card__content').each(function (index, item) {
    //     $(this).css({ 
    //         'bottom': `-${$(this).find('.service-card__footer').height()}px`,
    //     })
    // });


    // $('.serviceCardBtn').on('click', function () {
    //     $('.serviceCardBtn').removeClass('active');
    //     $('.service-details-container').removeClass('active');
    //     $(this).addClass('active');
    //     $(`.service-details-container[data-index="${$(this).attr('data-target')}"]`).addClass('active');
    // });

   
    // $('.projects-grid__slider .btn').on('click', function () {
    //     $('.projects-grid__slider .btn').removeClass('active');
    //     $(this).addClass('active');
    // });

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

