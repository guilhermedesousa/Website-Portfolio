$(window).scroll(function() {
    parallax()
})

function parallax() {
    const wScroll = $(window).scrollTop()
    
    $('.parallax--bg').css('background-position', 'center top '+(wScroll*0.5)+'px')
}