$(function () {

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.footer-top__title-click').on('click', function () {
    $(this).next('.footer-top__list').slideToggle();
    $(this).toggleClass('active');
  });

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active')
  });

  $('.button-list').on('click', function () {
    $('.products-item').addClass('products-item--list')
  });
  $('.button-grid').on('click', function () {
    $('.products-item').removeClass('products-item--list')
  });

  $('.button-list').on('click', function () {
    $('.shop-content__inner').addClass('shop-content__inner--list')
  });
  $('.button-grid').on('click', function () {
    $('.shop-content__inner').removeClass('shop-content__inner--list')
  });


  $('.products-item__btn').on('click', function () {
    $('.products-item__btn').addClass('products-item__btn--disabled');
    $('.products-item__box-btn').addClass('products-item__box-btn--active');
  });

  $('.products-item__heart-btn').on('click', function () {
    $(this).toggleClass('products-item__heart-btn--active');
  });

  $('.products-item__cart-btn.products-item__cart-btn--active').on('click', function () {
    $('.products-item__box-btn').removeClass('products-item__box-btn--active');
  });

  $('.products-item__cart-btn.products-item__cart-btn--active').on('click', function () {
    $('.products-item__btn').removeClass('products-item__btn--disabled');
  });


  $('.related__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 229"><defs><style>.cls-1 {fill: #a3bbc8;fill-rule: evenodd;}</style></defs><path class="cls-1" d="M1460.7,1330.53h-16.94l0.1-2.86a0.3,0.3,0,0,0,.08-0.2,0.323,0.323,0,0,0-.08-0.21l-0.18-.17a0.267,0.267,0,0,0-.4,0l-4.2,4.21a0.3,0.3,0,0,0-.08.2,0.323,0.323,0,0,0,.08.21l4.2,4.21a0.29,0.29,0,0,0,.4,0l0.18-.17a0.323,0.323,0,0,0,.08-0.21,0.3,0.3,0,0,0-.08-0.2l-0.12-2.86h16.97a0.3,0.3,0,0,0,.29-0.3v-1.37A0.291,0.291,0,0,0,1460.7,1330.53Z" transform="translate(-1439 -1327)"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9"><defs><style>.cls-1 {fill: #a3bbc8;fill-rule: evenodd;}</style></defs><path class="cls-1" d="M1509.3,1332.47h16.94l-0.1,2.86a0.3,0.3,0,0,0-.08.2,0.323,0.323,0,0,0,.08.21l0.18,0.17a0.267,0.267,0,0,0,.4,0l4.2-4.21a0.3,0.3,0,0,0,.08-0.2,0.323,0.323,0,0,0-.08-0.21l-4.2-4.21a0.29,0.29,0,0,0-.4,0l-0.18.17a0.323,0.323,0,0,0-.08.21,0.318,0.318,0,0,0,.08.2l0.12,2.86h-16.97a0.3,0.3,0,0,0-.29.3v1.37A0.291,0.291,0,0,0,1509.3,1332.47Z" transform="translate(-1509 -1327)"/></svg></button>'

  });

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');


    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false,

  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });

  $('.product-item__num').styler();

  $('.products-item__link-box2').on('click', function () {
    $('.products-item__btn').addClass('products-item__btn--active');
  });

  $('.products-item__link-box2').on('click', function () {
    $('.products-item__link-box').addClass('products-item__link-box--disabled');
  });

  $('.products-item__btn').on('click', function () {
    $('.products-item__btn').removeClass('products-item__btn--active');
  });

  $('.products-item__btn').on('click', function () {
    $('.products-item__link-box').removeClass('products-item__link-box--disabled');
  });

  $('.star').rateYo({
    starWidth: "12px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true
  });

  $('.star-big').rateYo({
    starWidth: "26px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true
  });

  $('.products-item__star').rateYo({
    starWidth: "22px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });

  var mixer = mixitup('.products__content');

  var mixer = mixitup('.design__items');




});