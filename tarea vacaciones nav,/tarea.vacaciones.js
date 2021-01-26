let numerodelasnotas;
let nota;
do{ 
    numerodelasnotas= ParseFloat(prompt("Ingrese numero de sus notas"))
}while (numerodelasnotas<=0||numerodelasnotas%1!=0)

let nuemeroinicialdelasnotas=0
let notas=[0]
do{
    nota=parseFloat(prompt("Ingrese sus notas"))
    numeroinicialdelasnotas= numeroinicialdelasnotas + 1
    notas.push(nota)
}while (nota<=0||nota>20||numeroinicialdelasnotas!=numerodelasnotas)

let N=0
let suma=0
while (N<=numerodelasnotas)
{
    suma=suma+[N]
}
console.log(suma/numerodelasnotas)