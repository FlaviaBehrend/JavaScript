var nome
nome = prompt("Digite seu nome")
var idade
idade = parseInt(prompt("Digite sua idade"))

alert("Bem vindo, "+nome)

if(idade>=18){
    alert(nome + " você é maior de idade")
}
else{
    alert(nome + " você é menor de idade")
}