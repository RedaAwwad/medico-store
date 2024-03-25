export function reveal(elementClass = '.reveal') {
    const reveals = document.querySelectorAll(elementClass);

    for (let i = 0; i < reveals.length; i++) {
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 50;

    if (elementTop < window.innerHeight - elementVisible) {
        reveals[i].classList.add("slide-up");
    }
    }
}

export function makeNavbarFixed() {
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

export function assignProductColorsVariants() {
    $('[data-color]').each((index, element) => {
        $(element).css('background-color', $(element).attr('data-color'));
    })
}

export function updateProductColorVariant(element) {
    const img = $(element).attr('data-src');
    $($(element).parent().parent().find('.product-card__img')).attr('src', img);
}