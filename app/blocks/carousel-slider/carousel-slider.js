    var carusel = $('.carousel-slider');

    carusel.each(function( index, element ){
       
        $( this ).attr( 'data-margin' ) != undefined ? margin = $( this ).attr( 'data-margin' ) :  margin = 0 ;

        $(this).find('.carousel-slider__slider').owlCarousel({
            loop:false,
            dots:false,
            margin: parseInt( margin ) ,
            responsiveClass:true,
            navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
            navElement : 'div',
            navContainer : $(this),
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:$(this).attr('data-count')-2,
                    nav:false
                },
                1000:{
                    items:$(this).attr('data-count'),
                    nav:true,
                    loop:false
                }
            }
        })        
    });
 

 