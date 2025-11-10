
let contadorNotas = 0;

function adicionarNota() {

    var notaInput = document.getElementById('nota');
    var nota = notaInput.value;

    var checkbox = document.getElementById('urgente');
    var urgente = checkbox.checked;

    
    if (nota === '') {
        alert('Campo vazio, insira uma nota.');
        return;
    }

    contadorNotas++;
    let mensagem = nota;

    
    let cor;
    if (contadorNotas === 1) {
        cor = 'blue';
    } else if (contadorNotas === 2) {
        cor = '#4a9207';
    } else if (contadorNotas === 3) {
        cor = 'purple';
    }
    
    if (contadorNotas > 3) {
        contadorNotas = 1;
        cor = "blue";
    }
    if (urgente) {
        var notasUrgentes = document.querySelector('.lista-urgentes');
        var pUrgente = document.createElement('li');
        pUrgente.textContent = mensagem;
        pUrgente.id = 'urgentee';
        pUrgente.className = "remover";
        if (cor) {
            pUrgente.style.color = cor;
        }

        notasUrgentes.appendChild(pUrgente);
    }
    else {
        var notasNormais = document.querySelector('.lista-normais');
        var pNormal = document.createElement('li');
        pNormal.textContent = mensagem;
        pNormal.id = 'normal';
        pNormal.className = "remover";
        if (cor) {
            pNormal.style.color = cor;
        }

        notasNormais.appendChild(pNormal);
    }
    notaInput.value = '';
    checkbox.checked = false;
}
function removerTodasNotas() {
    var tudo = document.getElementsByClassName('remover');
    if (tudo) {
        while (tudo.length > 0) {
            tudo[0].remove();
        }
    }

    contadorNotas = 0;
}
function removerNotasUrgentes() {
    var notasUrgentes = document.getElementById('urgentee');
    
    if (notasUrgentes) {
        notasUrgentes.remove();
    }
}
function removerNotas() {
    var notasNormais = document.getElementById('normal');
    if (notasNormais) {
        notasNormais.remove();
    }
}