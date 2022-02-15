$(document).ready(function () {
    $('.sliksliderr').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $('.slick-prev').text('');
    $('.slick-next').text('');

    // testimonial 
    $('.testimonialslides').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $('.slick-prev').text('');
    $('.slick-next').text('');

    jQuery('.toggle-nav').click(function(e) {
		jQuery(this).toggleClass('active');
		jQuery('.menu ul').toggleClass('active');

		e.preventDefault();
	});

});

function toggelnav(x) {
    x.classList.toggle("change");
    $('.mobilenav').toggle("show");
  }
