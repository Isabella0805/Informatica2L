let canvas = document.querySelector("#MisDibujos")
let ctx = canvas.getContext("2d")

//lapiz

ctx.fillStyle = "yellow"
ctx.strokeStyle = "black"
ctx.fillRect(80, 20 , 290, 30)
ctx.lineWidth= 1
ctx.strokeRect(80, 20, 290, 30)
ctx.strokeRect(80, 32, 290, 5)

ctx.fillStyle = "black"
ctx.strokeStyle = "black"
ctx.beginPath();
ctx.moveTo(80,50);
ctx.lineTo(80,20);
ctx.lineTo(20,35);
ctx.closePath();
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#EF1285"
ctx.strokeStyle = "black"
ctx.beginPath();
ctx.moveTo(370, 50)
ctx.lineTo(370, 50)
ctx.arc(370, 35, 16, -Math.PI/2, Math.PI/2)
ctx.stroke()
ctx.fill()

//celular

ctx.fillStyle = "black"
ctx.strokeStyle = "black"
ctx.fillRect(80,65,165,90);

ctx.fillStyle = "lightskyblue"
ctx.strokeStyle = "black"
ctx.fillRect(90,74,145,67);

//linea aplicaciones 1

ctx.fillStyle = "mediumorchid"
ctx.strokeStyle = "black"
ctx.fillRect(98,80,15,15);
ctx.fillStyle = "mediumorchid"
ctx.strokeStyle = "black"
ctx.fillRect(98,100,15,15);
ctx.fillStyle = "mediumorchid"
ctx.strokeStyle = "black"
ctx.fillRect(98,120,15,15);

//linea aplicaciones 2

ctx.fillStyle = "yellowgreen"
ctx.strokeStyle = "black"
ctx.fillRect(125,80,15,15);
ctx.fillStyle = "yellowgreen"
ctx.strokeStyle = "black"
ctx.fillRect(125,100,15,15);
ctx.fillStyle = "yellowgreen"
ctx.strokeStyle = "black"
ctx.fillRect(125,120,15,15);

//linea aplicaciones 3

ctx.fillStyle = "orange"
ctx.strokeStyle = "black"
ctx.fillRect(152,100,15,15);
ctx.fillStyle = "orange"
ctx.strokeStyle = "black"
ctx.fillRect(152,120,15,15);

ctx.fillStyle = "grey"
ctx.strokeStyle = "black"
ctx.beginPath();
ctx.moveTo(138, 45)
ctx.arc(222,110,8,0, Math.PI*2)
ctx.fill()

ctx.fillStyle = "grey"
ctx.strokeStyle = "black"
ctx.beginPath();
ctx.moveTo(138, 45)
ctx.arc(222,130,6,0, Math.PI*2)
ctx.fill()

ctx.fillStyle = "grey"
ctx.strokeStyle = "black"
ctx.beginPath();
ctx.moveTo(138, 45)
ctx.arc(222,90,6,0, Math.PI*2)
ctx.fill()

