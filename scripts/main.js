$(function () {

    /*Change the navbar style when scrolled */
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 100) {
            $('.navbar-custom').addClass('orange');
        } else {
            $('.navbar-custom').removeClass('orange');
        }
    });

    /* Smooth scrolling function */
    $('.nav-link').on('click', function (e) {
        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        }, 'slow');

        e.preventDefault();
    });
});