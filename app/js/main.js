$ (function(){

  $('.products-item__link-box2').on('click', function(){
    $('.products-item__btn').addClass('products-item__btn--active');
  });

  $('.products-item__link-box2').on('click', function(){
    $('.products-item__link-box').addClass('products-item__link-box--disabled');
  });

  $('.products-item__btn').on('click', function(){
    $('.products-item__btn').removeClass('products-item__btn--active');
  });

  $('.products-item__btn').on('click', function(){
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
  
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data){
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