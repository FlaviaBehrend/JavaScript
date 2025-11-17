
let urgentes = [];
let naoUrgentes = [];
let contadorNotas = 0;

function adicionarNota() {
    const input = document.getElementById("nota");
    const texto = input.value.trim();
    const urgente = document.getElementById("urgente").checked;

    if (texto === "") {
        alert("Campo vazio, insira uma nota.");
        return;
    }

    contadorNotas++;

    let cor;
    if (contadorNotas === 1) cor = "blue";
    else if (contadorNotas === 2) cor = "green";
    else if (contadorNotas === 3) cor = "purple";

    if (contadorNotas > 3) {
        contadorNotas = 1;
        cor = "blue";
    }

    const li = document.createElement("li");
    li.textContent = texto;
    li.className = "nota";
    li.style.color = cor;

    if (urgente) {
        document.getElementById("urgentes").appendChild(li);
        urgentes.push(texto);
    } else {
        document.getElementById("naoUrgentes").appendChild(li);
        naoUrgentes.push(texto);
    }

    input.value = "";
    document.getElementById("urgente").checked = false;
}

function removerTodasNotas() {
    if(urgentes == "" && naoUrgentes == ""){
        alert("Lista vazia, insira uma nota.")
        return;

    }
    else{
    document.getElementById("urgentes").innerHTML = "";
    document.getElementById("naoUrgentes").innerHTML = "";

    urgentes = [];
    naoUrgentes = [];
    contadorNotas = 0;
    }
}

function removerNotasUrgentes() {
    if(urgentes == ""){
        alert("Não há notas para remover.")
        return;

    }
    const lista = document.getElementById("urgentes");
    if (lista.lastChild) {
        lista.removeChild(lista.lastChild);
        urgentes.pop();

    }
    
}

function removerNotas() {
    if(naoUrgentes == ""){
        alert("Lista vazia, insira uma nota.")
        return;

    }
    const lista = document.getElementById("naoUrgentes");
    if (lista.lastChild) {
        lista.removeChild(lista.lastChild);
        naoUrgentes.pop();
    }
}
