$('.gr_imgs.owl-carousel').owlCarousel({
    loop: false,
    // margin: 10,
    nav: true,
    autoplay: false,
    autoplayTimeout: 5000,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        350: {
            items: 3,
        },
        600: {
            items: 6,
        },
        1000: {
            items: 8,
        },
    },
});
$('.gr_vourches.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3.3,
        },
    },
});
