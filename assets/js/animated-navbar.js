$(window).on('scroll', function(){
    if($(window).scrollTop()) {
        $('.general-box').addClass('black')
    }
    else {
        $('.general-box').removeClass('black')
    }
})