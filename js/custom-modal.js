/**
 * Created by Stefan on 2/04/2017.
 */
(function ($) {
    jQuery(document).ready(function ($) {
        $('.conditions').click(function () {
            openModal();
        });

        $('.close-button').click(function () {
            closeModal();
        });

        $(window).keypress(function (event) {
            if (event.which == 27) {
                closeModal();
            }
        });

        $('.modal-container').click(function (event) {
            if (this == event.target) {
                closeModal();
            }
        });
    });
})(jQuery);

function openModal() {
    jQuery('.modal-container').addClass('modal-open');
}

function closeModal() {
    jQuery('.modal-container').removeClass('modal-open');
}
