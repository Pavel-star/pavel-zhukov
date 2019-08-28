var wrappSlider = $('.double-slider');

wrappSlider.find('.double-slider-master').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.double-slider-slave'
  });

  wrappSlider.find('.double-slider-slave').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.double-slider-master',
    dots: false,
    margin: 5 ,
    centerMode: false,
    focusOnSelect: true
  });