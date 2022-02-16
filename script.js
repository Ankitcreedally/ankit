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

    jQuery('.toggle-nav').click(function (e) {
        jQuery(this).toggleClass('active');
        jQuery('.menu ul').toggleClass('active');

        e.preventDefault();
    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    $(window).scroll(function () {
        var bn = $('#floating_search');
        if ($(window).scrollTop() > 300) {
            bn.css({ position: 'fixed', bottom: '20px' , display: 'block'});
        }
        else {
            bn.css('position', 'static');
        }
    });
    var bn = $('#floating_search');
    bn.css( 'display', 'none' );

    jQuery('#floating_search').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0});
        return false;
    })

});

function toggelnav(x) {
    x.classList.toggle("change");
    $('.mobilenav').toggle("show");
}

