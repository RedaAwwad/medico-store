export function assignProductColorsVariants() {
    $('[data-color]').each((index, element) => {
        $(element).css('background-color', $(element).attr('data-color'));
    })
}

export function updateProductColorVariant(element) {
    const img = $(element).attr('data-src');
    $($(element).parent().parent().find('.product-card__img')).attr('src', img);
}