function converter(){
    var r, cot, real
    cot=parseFloat(document.getElementById("primeiroValor").value)
    real=parseFloat(document.getElementById("segundoValor").value)
    r=real/cot
    document.getElementById("resultado").innerHTML=`O valor em dólar é ${r}`
}