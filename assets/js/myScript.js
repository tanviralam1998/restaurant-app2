$(document).ready(function () {
    $('.banner-area').slick({
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        loop: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 568,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    $('.testimonials').slick({
        arrows: false,
        infinite: true,
        autoplay: true,
        loop: true,
        slidesToShow: 2,
        dots: true,
        responsive: [
            {
                breakpoint: 568,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('#navMenu').slicknav();
});