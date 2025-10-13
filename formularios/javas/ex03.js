function gerarPA(){
    var v1, r, qtd, serie=[], s
    v1=parseFloat(document.getElementById("primeiroValor").value)
    r=parseFloat(document.getElementById("razao").value)
    qtd=parseInt(document.getElementById("quantidade").value)
    for(n=1;n<=qtd;n++) {                               
        s=v1+ (n-1) *r
        serie.push(s)
    }
    document.getElementById("resultado").innerHTML=`A série gerada é ${serie}`
}