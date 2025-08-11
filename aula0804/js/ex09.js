var valor
valor = parseFloat(prompt("Digite o valor da compra"))
var qtdpac
qtdpac = parseFloat(prompt("Digite a quantia de parcelas"))

var valorParc
valorParc=valor/qtdpac
alert("O valor por parcela será de " + valorParc + "R$")