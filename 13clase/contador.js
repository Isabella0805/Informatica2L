let contador
if(contador==null)
{ 
let contador = 0
localStorage.setItem("contador", JSON.stringify(contador))
console.log("NO hay contador")
}
else
{
    contador = JSON.parse(localStorage.getItem("contador"))
    contador = contador+1
    localStorage.setItem("contador", JSON.stringify(contador))
    console.log("SI hay contador")
}
alert(`ha ingreesado ${contador} veces`);