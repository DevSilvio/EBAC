$(document).ready(function(){
    $('#carousel').slick({
        autoplay:true,
        arrows:true
    })

    $('.menu').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required:true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            veiculo: {
                required: true
            },
            mensagem: {
                required: false
            }
        },
        messages: {
            nome: 'Digite seu nome!',
            telefone: 'Telefone ou celular ERRADO!',
            email: 'Digite seu E-mail corretamente',
            veiculo: 'Digite aqui o nome do veículo de seu interesse'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validator){
            let campoErrado = validator.numberOfInvalids();
            if(campoErrado){
                alert(`Existe ${campoErrado} campos incorretos!`)
            }
        }
    })

    $('.veiculos button').click(function(){
        const destino = $('#contato');

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)

        const nomeVeiculo = $(this).parent().find('h3').text();
        $('#veiculo').val(nomeVeiculo);
    })
})