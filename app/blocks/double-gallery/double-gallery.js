 
    var slider = $('.slider-head') ;
    var slideArr = $('.slider-small .slider-small__image');
    
    slider.slick({
        autoplay:false,
        arrows:false,
        dots:false,
        swipe:false
    });
    $('.slider-small .slider-small__wrapp').click(function( ){
        slider.slick('slickGoTo', slideArr.index( $(this).children('.slider-small__image') ) );
        $('.slider-small .slider-small__wrapp').removeClass('active');
        $(this).addClass('active');
    });

   
 