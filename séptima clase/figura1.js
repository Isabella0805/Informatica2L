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

let nLine = 0
while (nLine < alto)
{
    let line = "";
    let nColumn = 0;

    while (nColumn < ancho)
    {
        if (nLine >= nColumn)
        {
            line = line + " ";
        }
        else
        {
            line = line + "*";
        }
        nColumn = nColumn + 1;
    }
    console.log(line);
    nLine = nLine + 1
}

