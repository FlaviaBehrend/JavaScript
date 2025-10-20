/* Exemplo01 getElementById */
var elemento=document.getElementById("titulo")
//alert(elemento)
console.log(elemento)

/*Exemplo 02 - innerHTML */
function mudarTitulo()
{
    var elemento= document.getElementById("titulo")//pega o elemento h1 pelo id
    elemento.innerHTML="Manipulano o titulo via JS"//muda o conteudo do h1, que é o elemento, inner entra colocando texto no H1
    var elemento2= document.getElementById("titulo2")
    elemento2.innerHTML="Nathan"
    
}
/*Exemplo 03 - mudar estilo */
function mudarEstilo(){
    var elemento = document.getElementById("titulo")
    elemento.style.color="white"
    elemento.style.backgroundColor="black"
    elemento.style.fontSize="30px"
    elemento.style.padding="15px"
    elemento.style.textAlign="center"
}

/*Exemplo 04 - classList.add - Localoiza o elemento desejado e insere uma classe HTML*/
function destacar(){
    var elemento=document.getElementById("titulo2")
    elemento.classList.add("destaque")
}
/*Exemplo 05 - classList.remove - Localoiza o elemento desejado e remove uma classe HTML*/
function remover(){
    var elemento= document.getElementById("titulo2")
    elemento.classList.remove("destaque")
}
/*Exemplo 06 - classList.toggle - Localoiza o elemento desejado e insere ou remove uma classe HTML*/
function alternar(){
    var elemento = document.getElementById("titulo2")
    elemento.classList.toggle("destaque")
}

/*Exemplo 07 - createElement - cria um novo elemento HTML, <p>Novo parágrafo criado com JS</p>*/
function adcTexto(){
    var novo=document.createElement("p")//cria um novo elemento p, uma tag
    novo.innerText="Novo parágrafo criado com JS"
    novo.id="paragrafo"
    /**Depois de criar o elemento vamos colocar o p na div container*/
    var container=document.getElementById("container")//pega o container
    container.appendChild(novo)//coloca o novo parágrafo dentro do container


}

function removerTexto(){
    var container=document.getElementById("container")
    //teste serve somente se tiver parágrafo
    if(container){
        container.remove()
    }else{
        alert("Não há parágrafo para remover")
    }
}
/*Exemplo 08 - querySelectorAll - Seleciona vários elementos ao mesmo tempo*/
function colorir(){
    var itens=document.querySelectorAll("p")//seleciona todos os parágrafos
    for(var i=0;i<itens.length;i++)
    {
        itens[i].style.color="green"
    
    }
}