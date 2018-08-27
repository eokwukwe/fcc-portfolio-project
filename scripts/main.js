$(function() {
  /*Change the navbar style when scrolled */
  $(window).on('scroll', function() {
    if ($(window).scrollTop() >= 100) {
      $('.navbar-custom').addClass('orange');
      $('.scroller').show('slow');
    } else {
      $('.navbar-custom').removeClass('orange');
      $('.scroller').hide('slow');
    }
  });

  /* Smooth scrolling function */
  $('.logo-link, .nav-link, .scroller-top').on('click', function(e) {
    var linkHref = $(this).attr('href');

    $('html, body').animate(
      {
        scrollTop: $(linkHref).offset().top
      },
      'slow'
    );

    e.preventDefault();
  });
});
