const formulario = document.getElementById('formulario');
let linhas = '';
const aprovado = '<img src="./imagens/emoji-feliz.png" alt="emoji feliz">'
const reprovado = '<img src="./imagens/emoji-triste.png" alt="emoji triste">'
let atividades = [];
let notas = [];
const mediaAprovado = '<td><span class="resultado aprovado">Aprovado</span><td>'
const mediaReprovado = '<td><span class="resultado reprovado">Reprovado</span><td>'
const notaMedia = parseFloat(prompt("Digite a nota mínima"));

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinhas();
    atualizarTabela();
    atualizaMediaFinal();
})

function adicionarLinhas(){
    const atividade = document.getElementById('atividade');
    const nota = document.getElementById('nota');

    
    if(atividades.includes(atividade.value)){
        alert(`A atividade: "${atividade.value}" já foi anotada`);
    } else{
        notas.push(parseFloat(nota.value));
        atividades.push(atividade.value)

        let linha = '<tr>'
        linha += `<td>${atividade.value}</td>`
        linha += `<td>${nota.value}</td>`
        linha += `<td>${nota.value > notaMedia ? aprovado : reprovado}</td>`
        linha += '</tr>'
    
        linhas += linha
    }


    atividade.value = '';
    nota.value = '';
}

function atualizarTabela(){
    const tbody = document.getElementsByTagName('tbody')[0];
    tbody.innerHTML = linhas
}

function atualizaMediaFinal(){
    const mediaResultado = calculaMedia();

    document.getElementById('media').innerHTML = mediaResultado;
    document.getElementById('resultadoMedia').innerHTML = mediaResultado >= notaMedia ? mediaAprovado : mediaReprovado
}

function calculaMedia(){
    let contador = 0

    for(let i = 0; i < notas.length; i++) {
        contador += notas[i];
    }

    return contador / notas.length;
}