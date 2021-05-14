// Identificar o clique no menu
// Verificar o item que foi clicado e fazer referência com o alvo
// Verificar a distância entre o alvo e o topo
// Animar o scroll até o alvo

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