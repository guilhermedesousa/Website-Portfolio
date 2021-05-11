// const scrollButton = document.querySelector('.smooth-scroll')

// scrollButton.addEventListener.apply('click', () => {
//     window.scroll({top: window.innerHeight, behavior: "smooth"})
// })

$('.smooth-scroll').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset - 0
    }, 1000);
});