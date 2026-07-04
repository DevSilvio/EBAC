const formulario = document.getElementById('formulario');
nome = document.getElementById('nome');
let validaNomeCompleto = false

function validaNome(nomeCompleto){
    const nomeArray = nomeCompleto.split(' ');
    return nomeArray.length >= 2;
}

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    conta = document.getElementById('conta');
    valor = document.getElementById('valor');
    texto = document.getElementsByTagName('textarea')[0];
    nomeComp = document.getElementsByClassName('nomeComp')[0];
    
    let mensagem = `Transferência feita: Beneficiário <b>${nome.value}</b> conta <b>${conta.value}</b> valor <b>${valor.value}</b>. mensagem: <b>${texto.value}</b>`

    validaNomeCompleto = validaNome(nome.value);

    if(validaNomeCompleto) {
        nomeComp.innerHTML = mensagem;
        nomeComp.style.display='block'
        nome.value = ('');
        conta.value = ('');
        valor.value = ('');
        texto.value = ('');

        setTimeout(function(){
        nomeComp.innerHTML = '';
        nomeComp.style.display='none'
        }, 3000);
    }else{
        document.getElementsByClassName('nomeErrado2')[0].style.display='block'
    }
})
nome.addEventListener('blur', function(e){
    console.log(e.target.value)
    validaNomeCompleto = validaNome(e.target.value);
    
    if(!validaNomeCompleto){
            nome.classList.add('nomeErrado');
        } else{
            nome.classList.remove('nomeErrado');
            document.getElementsByClassName('nomeErrado2')[0].style.display='none'
        }
    })
