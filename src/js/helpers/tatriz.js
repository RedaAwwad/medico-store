export default function handleTatriz() {
    $('[name="textPlace"]').on('change', function () {
        $('#tatrizMarker').each(function() {
            var classes = $(this).attr('class').split(' ');
            classes.forEach(function(className) {
                if (className.startsWith('tatriz__marker--')) {
                    $(this).removeClass(className);
                }
            }, this);
        });

        $('#tatrizMarker').addClass(`tatriz__marker--${$(this).val()}`)
    });


    // 
    $('#tatrizTextValue').on('input', function () {
        $('#tatrizPreviewer').text($(this).val());
    });

    $('#tatrizFontFamily').on('change', function () {
        $('#tatrizPreviewer').css({
            fontFamily: $(this).val()
        });
    });

    $('#tatrizFontSize').on('change', function () {
        $('#tatrizPreviewer').css({
            fontSize: $(this).val()
        });
    });

    $('.logos__wrapper').on('click', '.btn', function () {
        $('.logos__wrapper .btn').removeClass('active');
        $(this).addClass('active');

        $('#tatrizLogo').val($(this).attr('data-logo'));
    });
    
}