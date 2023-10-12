$(document).ready(function () {
    $('.banner-area').slick({
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        loop: true
    });

    $('.testimonials').slick({
        arrows: false,
        infinite: true,
        autoplay: true,
        loop: true,
        slidesToShow: 2,
        dots: true,
    });
});