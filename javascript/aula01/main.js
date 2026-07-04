const formulario = document.getElementById('formulario');

function validaNome(nomeCompleto){
    const nomeArray = nomeCompleto.split(' ');
    return nomeArray.length >= 2;
}

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    let validaNomeCompleto = false

    nome = document.getElementById('nome');
    conta = document.getElementById('conta');
    valor = document.getElementById('valor');
    texto = document.getElementsByTagName('textarea')[0];
    
    let mensagem = `Transferência feita: Beneficiário ${nome.value} conta ${conta.value} valor ${valor.value}. mensagem: ${texto.value}`

    validaNomeCompleto = validaNome(nome.value);

    if(validaNomeCompleto) {
        alert(mensagem);
        nome.value = ('');
        conta.value = ('');
        valor.value = ('');
        texto.value = ('');
    }else{
        alert('Ops! Algo deu ERRADO. Coloque o nome completo!')
    }
})
