// Scroll nav-links ======================================================
$('nav ul a').click(function(e){
    e.preventDefault()
    const id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('.menu-box').innerHeight()
    
    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 1000)
})

// Scroll arrow
$('.smooth-scroll').on('click', function (e) {
    e.preventDefault()
    const id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('.menu-box').innerHeight()

    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 1000)
})

// Scroll top
$(document).ready(function() {
    $(window).scroll(function() {
        if($(window).scrollTop() > 1600) {
            $('.scrollUp').css({
                "opacity":"1", "pointer-events":"auto"
            })
        } else {
            $('.scrollUp').css({
                "opacity":"0", "pointer-events":"none"
            })
        }
    })
    $('.scrollUp').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })
})

// Type writer
function typeWriter(element) {
    const textArray = element.innerHTML.split('')
    element.innerHTML = ''
    textArray.forEach((letter, index) => {
        setTimeout(() => element.innerHTML += letter, 90 * index)
    });
}
const title = document.querySelector('.introduction h3')
typeWriter(title)