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

let nColumn = 0
while (nColunm < ancho)
{
    let Colunm = "";
    let nLine = 0;

    while (nLine < altoo)
    {
        if (nColunm >= nLine)
        {
            Colunm = Colunm + " ";
        }
        else
        {
            Colunm = Colunm + "*";
        }
        nLine = nLine + 1;
    }
    console.log(Colunm);
    nColunm = nColumn + 1
}