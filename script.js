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


});
