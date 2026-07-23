$(document).ready(function(){
    const nomeCliente = $('#nome');
    const emailCliente = $('#email')
    const telefoneCliente = $('#telefone')
    const mensagensCliente = $('#mensagem')

    //telefoneCliente.mask('(00) 00000-0000');
        
        $('.formulario').on('submit', function(e){
            e.preventDefault();

            const nomeCompleto = validaNome(nomeCliente.val());
            if (nomeCompleto) {
                alert('Nome esta ok!');
                nomeCliente.val('');
            }else {
                alert('Digite o nome completo!');
            }
            
            const emailValido = validaEmail(emailCliente.val());
            if (emailValido){
                alert('Email valido!');
                emailCliente.val('');
            }else {
                alert('Digite seu email corretamente!')
            }
            const telefoneValido = verificaTelefone(telefoneCliente.val());
            if (telefoneValido) {
                alert('Telefone ok!');
                telefoneCliente.val('');
            }else {
                alert('Telefone está ERRADO digite novamente!')
            }

            mensagensCliente.val().trim().length >= 1 ? alert('Mensagem enviada com sucesso') || mensagensCliente.val('') : null;
    })
    function validaNome(nomeCompleto){
        const regex = /^[a-zA-Z]{3,}(\s[a-zA-Z]{2,})+$/
        const nomeSemEspaco = nomeCompleto.trim();
        return regex.test(nomeSemEspaco);
    }

    function validaEmail(emailCompleto){
        const regex = /^\S+@\S+\.[a-zA-Z]{2,}$/
        const emailValido = emailCompleto.trim();
        return regex.test(emailValido);
    }

    function verificaTelefone(telefone){
        const valorTelefone = telefone.replace(/\D/g,'')
        return valorTelefone.length == 11;
    }

    telefoneCliente.on('keyup', function(){
        let valorDoTel = $(this).val();

        valorDoTel = valorDoTel.replace(/\D/g,'');
        valorDoTel = valorDoTel.slice(0,11);

        valorDoTel.length > 0 ? valorDoTel = valorDoTel.replace(/^(\d{2})(\d{1})/,'($1) $2'): null;
        valorDoTel.length > 9 ? valorDoTel = valorDoTel.replace(/(\d{4})(\d{4})$/, '$1-$2') : null;

        $(this).val(valorDoTel);
        console.log(valorDoTel);
    })
})
