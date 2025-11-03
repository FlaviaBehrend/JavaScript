function adcTexto(){
    var nota = document.getElementById('caixa').value
    var check = document.getElementById('urgente').checked

    var texto = nota//pega o que foi digitado

    if(check){
        var adcUrgente = document.querySelector('.urgente')
        if (!adcUrgente) return 
        var paragrafoU = document.createElement('p')
        paragrafoU.textContent = texto
       
        adcUrgente.appendChild(paragrafoU) 
     
        document.getElementById('caixa').value = ''
    }
    else{
        var adcNUrgente = document.querySelector('.nurgente')
        if (!adcNUrgente) return
        var paragrafoNU = document.createElement('p')
        paragrafoNU.textContent = texto;
        adcNUrgente.appendChild(paragrafoNU);
    }
    nota.value = '';
    checkbox.checked = false;
    }

    function removerTextoUrgente(){
        var caixa = document.querySelector('.urgente')
        if (!caixa){
            alert('Caixa .urgente não encontrado')
            return
        }

        if (!caixa.lastElementChild){
            alert('Não há parágrafo para remover')
            return
        }
        caixa.removeChild(caixa.lastElementChild)
}
    function removerTextoNUrgente(){
        var caixa = document.querySelector('.nurgente')
        if (!caixa){
            alert('Caixa .nurgente não encontrado')
            return
        }

        if (!caixa.lastElementChild){
            alert('Não há parágrafo para remover')
            return
        }
        caixa.removeChild(caixa.lastElementChild)
}