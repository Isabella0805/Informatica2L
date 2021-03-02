let contador = 1
if(contador==null)
{ 
localStorage.setItem("contador", JSON.stringify(contador))
console.log("NO hay contador")
alert("ha ingresado 1 vez")
}
else
{
    contador = JSON.parse(localStorage.getItem("contador"))
    contador = contador+1
    localStorage.setItem("contador", JSON.stringify(contador))
    console.log("SI hay contador")
}
alert(`ha ingresado ${contador} veces`);