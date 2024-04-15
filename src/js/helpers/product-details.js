export function updateProductColor() {
    $('#productColorsContainer').on('click', '.btn', function () {
        $($(this).parent().find('#productColor')).val($(this).attr('data-color'));
        $('#productColorsContainer .btn').removeClass('selected');
        $(this).addClass('selected')
    });
}

export function updateProductSize() {
    $('#productSizeContainer').on('click', '.btn', function () {
        if($(this).hasClass('unavailable')) {
            return;
        }

        $($(this).parent().find('#productSize')).val($(this).find('input').val());
    });
}


