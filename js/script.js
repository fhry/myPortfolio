$('.page-scroll').on('click', function(e){
    
    let tujuan = $(this).attr('href');
    let elemenTujuan = $(tujuan);
    
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    },1300,'easeInOutExpo');
    e.preventDefault();

});

//pkanankiri
$(window).on('load',function() {
    $('.pKiri').addClass('pShow');
    $('.pKanan').addClass('pShow');
});

//paralax
$(window).scroll(function(){
    
    let wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform' : 'translate(0px,'+ wScroll/4.2 +'%)'
    });
    $('.jumbotron h1').css({
        'transform' : 'translate(0px,'+ wScroll/2.99 +'%)'
    });
    $('.jumbotron p').css({
        'transform' : 'translate(0px,'+ wScroll/1.98+'%)'
    });

    // portfolio
    if( wScroll > $('.portfolio').offset().top - 250 ) {
        $('.portfolio .thumbnail').addClass('show');
    }

});

// paralax

