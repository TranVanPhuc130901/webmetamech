$('.sec1_home .gr_banner .banner_item').on('click', '.WImage img', function () {
    var imgclick = $(this).attr('src');
    $('.sec1_home .banner .WImage img').attr('src', imgclick);
});

$('.gr_imgs ').on('click', '.WImage img', function () {
    var imgclick = $(this).attr('src');
    $('.sec1_productDetail .left .gr_left .image_product .Wimg img').attr('src', imgclick);
});

$('.right_top_header').on('click', '.menu_btn', function () {
    $('.header_mb .bottom .wrp .menu').addClass('active');
});
$('.header_mb .bottom .wrp .menu').on('click', '.close', function () {
    $('.header_mb .bottom .wrp .menu').removeClass('active');
});

$('.button_amount').on('click', '.sub', function () {
    const num = $(this).next('input').val();
    if (num >= 1) {
        $(this)
            .next('input')
            .val(num - 1);
    }
});
$('.button_amount').on('click', '.push', function () {
    const num = $(this).prev('input').val();
    $(this)
        .prev('input')
        .val(parseInt(num) + 1);
});
$('.popup_success .popup_item').on('click', '.button_popup', function () {
    $('.popup_success').toggle('unactive');
});

$('.ai').on('click', '.2d', () => {
    $('.ai .2d').addClass('active');
    $('.ai .3d').removeClass('active');
    $('.product_2d').removeClass('unactive_pr');
    $('.product_3d').addClass('unactive_pr');
});
$('.ai').on('click', '.3d', () => {
    $('.ai .3d').addClass('active');
    $('.ai .2d').removeClass('active');
    $('.product_3d').removeClass('unactive_pr');
    $('.product_2d').addClass('unactive_pr');
});
