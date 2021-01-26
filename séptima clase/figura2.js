let ancho;
let alto;

do
{
    ancho = parseFloat(prompt("Ingrese el ancho"));
} 
while (isNaN(ancho) || ancho < 1);

do
{
    alto = parseFloat(prompt("Ingrese el alto"));
} 
while (isNaN(alto) || alto < 1);

