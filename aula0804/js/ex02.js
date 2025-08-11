// Uso de variáveis em JS
// Não é necessário declarar o tipo pois JS tem tipagem dinâmica. Para  declarar a variável usamos a palavra reservada "Var"
var frase

frase ="Aqui temos uma string"
alert(frase)

var  nome

nome =prompt("Digite seu nome")
alert("Bem vindo " + nome)

var idade

idade = prompt("Digite sua idade:")
alert(nome+ ", você tem  "+ idade)

// Operações em JS
var n1, n2, r
n1=3
n2=5
r= n1+n2
alert("o resultado da soma entre "+n1 +" + "+ n2+" = "+ r)
// Operação com valores digitados pelo usuário

n1 = parseInt(prompt("Digite  n1"))
n2= parseInt(prompt("Digite n2"))
//  Parseint faz a converção para inteiro
r=n1+n2
alert("O resultado da soma entre "+ n1 +" + "+ n2 +" = "+ r)

// Realize a divisão de dois numeros digitados pelo usuário e apresente o resultado
n1 = parseFloat(prompt("Digite n1"))
n2= parseFloat(prompt("Digite n2"))
r = n1/n2
alert("o RESULTADO DA DIVISÃO ENTRE "+ n1 +" / "+ n2 +" = "+ r)