$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaImagem = $('#imagemNova').val();
        const novaIMG = $('<li style="display: none"></li>');
        $(`<img src="${novaImagem}" />`).appendTo(novaIMG);
        $(`<div class="fotoLink">
                <a 
                    href="${novaImagem}" target="_blank" title="ver imagem em tamanho real"> Ver imagem tamanho real
                </a>
        </div>`).appendTo(novaIMG);
        $(novaIMG).appendTo('ul');
        novaIMG.fadeIn(1000);
        $('#imagemNova').val('');
    })
})