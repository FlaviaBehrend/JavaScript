function imc(){
    var peso, alt, r
    peso=parseFloat(document.getElementById("primeiroValor").value)
    alt=parseFloat(document.getElementById("segundoValor").value )
    r=peso/(alt*alt)
    if(r<18.5){
        document.getElementById("resultado").innerHTML=`Seu IMC é ${r} e você esta abaixo do peso`
    }
    else if(r>=18.5 && r<24.9){
        document.getElementById("resultado").innerHTML=`Seu IMC é ${r} e você esta com peso normal`
    }
    else if(r>=25 && r<29.9){
        document.getElementById("resultado").innerHTML=`Seu IMC é ${r} e você esta com sobrepeso`
    }
    else{
        document.getElementById("resultado").innerHTML=`Seu IMC é ${r} e você esta com obesidade mórbida`
    }
}