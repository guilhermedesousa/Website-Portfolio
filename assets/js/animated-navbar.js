// Fica com o navbar black quando o usuário rolar a tela
$(window).on('scroll', () => {
    if($(window).scrollTop()) {
        $('.general-box').addClass('black')
    }
    else {
        $('.general-box').removeClass('black')
    }
})