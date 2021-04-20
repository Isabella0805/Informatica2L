let canvas = document.querySelector("#TableroAjedrez")
let ctx = canvas.getContext("2d")

//tablero

ctx.fillStyle = "slategrey"
ctx.strokeStyle = "black"
ctx.fillRect(20,20,420,420);

function cuadrado(x,y,color)
{
ctx.fillStyle = color
ctx.strokeStyle = "black"
ctx.fillRect(x,y,50,50);
}

function filas1(y)
{
cuadrado(30, y, "black")
cuadrado(130, y, "black")
cuadrado(230, y, "black")
cuadrado(330, y, "black")
cuadrado(80, y, "whitesmoke")
cuadrado(180, y, "whitesmoke")
cuadrado(280, y, "whitesmoke")
cuadrado(380, y, "whitesmoke")
}

function filas2(y)
{
cuadrado(30, y, "whitesmoke")
cuadrado(130, y, "whitesmoke")
cuadrado(230, y, "whitesmoke")
cuadrado(330, y, "whitesmoke")
cuadrado(80, y, "black")
cuadrado(180, y, "black")
cuadrado(280, y, "black")
cuadrado(380, y, "black")
}

filas1(30)
filas2(80)
filas1(130)
filas2(180)
filas1(230)
filas2(280)
filas1(330)
filas2(380)

//peones

function peones(x,y,color)
{
ctx.fillStyle = color
ctx.strokeStyle = "black"
ctx.fillRect(x,y,25,10);
ctx.fillStyle = color
ctx.strokeStyle = "black"
ctx.fillRect(x+5,y-5,15,10);
ctx.fillStyle = color
ctx.strokeStyle = color
ctx.beginPath();
ctx.arc(x+12.4, y-18, 10, -Math.PI, Math.PI)
ctx.stroke()
ctx.fill()
ctx.fillStyle = color
ctx.strokeStyle = "black"
ctx.fillRect(x+7.5,y-10,10,10);
}

peones(42,115,"midnightblue")
peones(92,115,"midnightblue")
peones(142,115,"midnightblue")
peones(192,115,"midnightblue")
peones(242,115,"midnightblue")
peones(292,115,"midnightblue")
peones(342,115,"midnightblue")
peones(392,115,"midnightblue")

peones(42,365,"lightsteelblue")
peones(92,365,"lightsteelblue")
peones(142,365,"lightsteelblue")
peones(192,365,"lightsteelblue")
peones(242,365,"lightsteelblue")
peones(292,365,"lightsteelblue")
peones(342,365,"lightsteelblue")
peones(392,365,"lightsteelblue")
