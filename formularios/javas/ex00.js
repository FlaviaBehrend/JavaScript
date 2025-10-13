function somar()
{
    var n1, n2, r
    n1=document.getElementById("primeiroValor").value
    n2=document.getElementById("segundoValor").value
    if(n1 == "" ||  n2== "")
    {
        alert("Preencha os campos obrigatórios!")
    }
    else{
        r=parseFloat(n1)+parseFloat(n2)
        document.getElementById("resultado").innerHTML = `O resultado da soma é ${r}`
    }
}
function subtrair()
{
    n1=document.getElementById("primeiroValor").value
    n2=document.getElementById("segundoValor").value    
    if(n1 == "" ||  n2== "")
    {
        alert("Preencha os campos obrigatórios!")
    }
    else{
        r=parseFloat(n1)-parseFloat(n2)
        document.getElementById("resultado").innerHTML = `O resultado da subtração é ${r}`
    }
}
function multiplicar()
{
    n1=document.getElementById("primeiroValor").value
    n2=document.getElementById("segundoValor").value
    if(n1 == "" || n2== "" ){
        alert("Preencha os campos obrigatórios!")
    }
    else{
        r=parseFloat(n1)*parseFloat(n2)
        document.getElementById("resultado").innerHTML= `O resultado da multiplicação é ${r}`
    }
}
function dividir()
{
    n1=document.getElementById("primeiroValor").value
    n2=document.getElementById("segundoValor").value
    if(n1 == "" || n2== "" ){
        alert("Preencha os campos obrigatórios!")
    }
    else{
        r=parseFloat(n1)/parseFloat(n2)
        document.getElementById("resultado").innerHTML= `O resultado da divisão é ${r}`
    }
}
/*Exercícios:
1- No mesmo Script usando os valores de n1 e n2, crie novos botões para: multiplicar, dividir e subtrair.
2- Crie um novo documento HTML em que o usuário deve exibir o IMC. dependendo da faixa do IMC deve informar se o usuário está abaixo do peso, peso normal, sobrepeso, obesidade mórbida.
3- Crie um novo documento HTML em que o usuário digite o valor da cotação do dólar, e o valor em reais e converta para dólar.
4- Crie um novo documento HtML em que o suário entre com    O PRIMEIRO VALOR DE UMA Pa E A RAZÃO DA pa E A QUANTIDADE DE TERMOS DA pa E GERE A SÉRIE */