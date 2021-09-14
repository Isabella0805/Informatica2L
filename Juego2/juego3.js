let canvas = document.querySelector("#pelotitaAnimada3")
let ctx = canvas.getContext("2d")

let color = "white"

let xC = 60
let yC = 50 
let r = 35

let xM1 = 1220
let yM1 = 438
let rM1 = 10

let xM2 = 3375
let yM2 = 1500
let rM2 = 15

let xM3 = 2145
let yM3 = 202
let rM3 = 13

let xM4 = 2925
let yM4 = 688
let rM4 = 14

let xM5 = 540
let yM5 = 450
let rM5 = 18

let xM6 = 950
let yM6 = 2000
let rM6 = 18

let dT = 5;

let l = 50

let xN1 = 400
let yN1 = 0 

let xN2 = 0
let yN2 = 600

let xN3 = 1000
let yN3 = 0 

let xN4 = 0
let yN4 = 1000 

let xN5 = 1600
let yN5 = 0 

let xN6 = 0
let yN6 = 1500 

let xN7 = 2200
let yN7 = 0 

let xN8 = 0
let yN8 = 2000 

let xN9 = 2800
let yN9 = 0 

dibujarEntrada()
dibujarPelota(xC, yC, r)

dibujarMoneda1(xM1,yM1,rM1)
dibujarMoneda2(xM2,yM2,rM2)
dibujarMoneda3(xM3,yM3,rM3)
dibujarMoneda4(xM4,yM4,rM4)
dibujarMoneda5(xM5,yM5,rM5)
dibujarMoneda6(xM6,yM6,rM6)

dibujarNave1(xN1, yN1, l)
dibujarNave2(xN2, yN2, l)
dibujarNave3(xN3, yN3, l)
dibujarNave4(xN4, yN4, l)
dibujarNave5(xN5, yN5, l)
dibujarNave6(xN6, yN6, l)
dibujarNave7(xN7, yN7, l)
dibujarNave8(xN8, yN8, l)
dibujarNave9(xN9, yN9, l)

DibujarLaberinto(color)
dibujarSalida()

//MOVIMIENTO PELOTA
function MoverAbajo()
{
    ctx.clearRect(xC-(r+0.5),yC-(r+1), 1.5+2*r,+2*r)
    yC = yC+5   
    dibujarMoneda5(xM5,yM5,rM5)
    dibujarPelota(xC, yC, r)
    DibujarLaberinto(color)
}
function MoverArriba()
{
    ctx.clearRect(xC-(r+0.5),yC-(r+1), 1.5+2*r, 1.5+2*r)
    yC = yC-5
    dibujarMoneda5(xM5,yM5,rM5)
    dibujarPelota(xC, yC, r)
    DibujarLaberinto(color)
}
function MoverDerecha()
{
    ctx.clearRect(xC-(r+0.5),yC-(r+1), 1.5+2*r, 1.5+2*r)
    xC = xC+5
    dibujarMoneda5(xM5,yM5,rM5)
    dibujarPelota(xC, yC, r)
    DibujarLaberinto(color)
}
function MoverIzquierda()
{
    ctx.clearRect(xC-(r+0.5),yC-(r+1), 1.5+2*r, 1.5+2*r)
    xC = xC-5
    dibujarMoneda5(xM5,yM5,rM5)
    dibujarPelota(xC, yC, r)
    DibujarLaberinto(color)
} 
function AumentarTamaño()
{
    r=r+10
    ctx.clearRect(xC-(r+0.5),yC-(r+1), 1.5+2*r, 1.5+2*r)
    dibujarMoneda5(xM5,yM5,rM5)
    dibujarPelota(xC, yC, r)
    DibujarLaberinto(color)
} 
function DisminuirTamaño()
{
    r=r-10
    ctx.clearRect(xC-(r+10.5),yC-(r+11), 24+2*r, 24+2*r)
    dibujarMoneda5(xM5,yM5,rM5)
    dibujarPelota(xC, yC, r)
    DibujarLaberinto(color)
} 
window.onkeydown = function(event)
{
    if(event.code == "KeyS"){
        MoverAbajo();   
    }
    if(event.code == "KeyW"){
        MoverArriba();   
    }
    if(event.code == "KeyD"){
        MoverDerecha();   
    }
    if(event.code == "KeyA"){
        MoverIzquierda();   
    }
    if(event.code == "BracketRight"){
        AumentarTamaño();   
    }
    if(event.code == "Slash"){
        DisminuirTamaño();   
    }
}

//ENCUENTRO PyM
function EncuentroMoneda1()
{
    let distanciaCyM = Math.sqrt(Math.pow(xC-xM1, 2) + Math.pow((yC-yM1), 2));
    console.log(distanciaCyM)

    if (distanciaCyM <= (r + rM1)){
    alert("1 punto")
    }

    dibujarMoneda5(xM1,yM1,rM1)
}
function EncuentroMoneda2()
{
    let distanciaCyM = Math.sqrt(Math.pow(xC-xM2, 2) + Math.pow((yC-yM2), 2));
    console.log(distanciaCyM)

    if (distanciaCyM <= (r + rM2)){
    alert("1 punto")
    }

    dibujarMoneda5(xM2,yM2,rM2)
}
function EncuentroMoneda3()
{
    let distanciaCyM = Math.sqrt(Math.pow(xC-xM3, 2) + Math.pow((yC-yM3), 2));
    console.log(distanciaCyM)

    if (distanciaCyM <= (r + rM3)){
    alert("1 punto")
    }

    dibujarMoneda5(xM3,yM3,rM3)
}
function EncuentroMoneda4()
{
    let distanciaCyM = Math.sqrt(Math.pow(xC-xM4, 2) + Math.pow((yC-yM4), 2));
    console.log(distanciaCyM)

    if (distanciaCyM <= (r + rM4)){
    alert("1 punto")
    }

    dibujarMoneda5(xM4,yM4,rM4)
}
function EncuentroMoneda5()
{
    let distanciaCyM = Math.sqrt(Math.pow(xC-xM5, 2) + Math.pow((yC-yM5), 2));
    console.log(distanciaCyM)

    if (distanciaCyM <= (r + rM5)){
    alert("1 punto")
    }

    dibujarMoneda5(xM5,yM5,rM5)
}
function EncuentroMoneda6()
{
    let distanciaCyM = Math.sqrt(Math.pow(xC-xM6, 2) + Math.pow((yC-yM6), 2));
    console.log(distanciaCyM)

    if (distanciaCyM <= (r + rM6)){
    alert("1 punto")
    }

    dibujarMoneda5(xM6,yM6,rM6)
}
function EncuentroMonedas()
{
    EncuentroMoneda1()
    EncuentroMoneda2()
    EncuentroMoneda3()
    EncuentroMoneda4()
    EncuentroMoneda5()
    EncuentroMoneda6() 
}
window.setInterval(EncuentroMonedas,dT)

//MONEDA5
function dibujarMoneda1(xM1,yM1,rM1)
{
    ctx.beginPath();
    ctx.strokeStyle = "Black";
    ctx.fillStyle = "gold";
    ctx.arc(xM1, yM1, rM1, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
}
function dibujarMoneda2(xM2,yM2,rM2)
{
    ctx.beginPath();
    ctx.strokeStyle = "Black";
    ctx.fillStyle = "gold";
    ctx.arc(xM2,yM2,rM2, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
}
function dibujarMoneda3(xM3,yM3,rM3)
{
    ctx.beginPath();
    ctx.strokeStyle = "Black";
    ctx.fillStyle = "gold";
    ctx.arc(xM3,yM3,rM3, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
}
function dibujarMoneda4(xM4,yM4,rM4)
{
    ctx.beginPath();
    ctx.strokeStyle = "Black";
    ctx.fillStyle = "gold";
    ctx.arc(xM4,yM4,rM4, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();  
}
function dibujarMoneda5(xM5,yM5,rM5)
{
    ctx.beginPath();
    ctx.strokeStyle = "Black";
    ctx.fillStyle = "gold";
    ctx.arc(xM5,yM5,rM5, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();  
}
function dibujarMoneda6(xM6,yM6,rM6)
{
    ctx.beginPath();
    ctx.strokeStyle = "Black";
    ctx.fillStyle = "gold";
    ctx.arc(xM6,yM6,rM6, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();  
}

//PELOTA
function dibujarPelota(xC, yC, r)
{
    ctx.beginPath();
    ctx.strokeStyle = "Black";
    ctx.fillStyle = "lime" ;
    ctx.arc(xC, yC, r, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
}

//NAVES
function dibujarNave1(xN1,yN1,l)
{ 
    ctx.fillStyle = "mediumorchid"
    ctx.fillRect(xN1, yN1 , l , l);
}
function dibujarNave2(xN2,yN2,l)
{
    ctx.fillStyle = "mediumorchid"
    ctx.fillRect(xN2, yN2 , l , l);
}
function dibujarNave3(xN3,yN3,l)
{ 
    ctx.fillStyle = "mediumorchid"
    ctx.fillRect(xN3, yN3 , l , l);
}
function dibujarNave4(xN4,yN4,l)
{
    ctx.fillStyle = "mediumorchid"
    ctx.fillRect(xN4, yN4 , l , l);
}
function dibujarNave5(xN5,yN5,l)
{ 
    ctx.fillStyle = "mediumorchid"
    ctx.fillRect(xN5, yN5 , l , l);
}
function dibujarNave6(xN6,yN6,l)
{
    ctx.fillStyle = "mediumorchid"
    ctx.fillRect(xN6, yN6 , l , l);
}
function dibujarNave7(xN7,yN7,l)
{ 
    ctx.fillStyle = "mediumorchid"
    ctx.fillRect(xN7, yN7 , l , l);
}
function dibujarNave8(xN8,yN8,l)
{
    ctx.fillStyle = "mediumorchid"
    ctx.fillRect(xN8, yN8 , l , l);
}
function dibujarNave9(xN9,yN9,l)
{ 
    ctx.fillStyle = "mediumorchid"
    ctx.fillRect(xN9, yN9 , l , l);
}

//LABERINTO
function DibujarLaberinto(color)
{
    ctx.strokeStyle = color
    {
        ctx.fillRect(0, 30 , 30, 5)
        ctx.fillRect(0, 30 , 5, 800)
        ctx.fillRect(0, 825 , 900 , 5)
        ctx.fillRect(900, 825 , 5, 400)
        ctx.fillRect(200, 1220 , 700, 5)
        ctx.fillRect(200, 1220 , 5, 200)
        ctx.fillRect(200, 1420 , 2200, 5)
        ctx.fillRect(2400, 1420 , 5, 250)
        ctx.fillRect(1500, 1670 , 905, 5)
        ctx.fillRect(1500, 1550 , 5, 120)
        ctx.fillRect(600, 1550 , 900 , 5)
        ctx.fillRect(600, 1420 , 5, 130)
        ctx.fillRect(520, 1420 , 5, 210)
        ctx.fillRect(520, 1630 , 400 , 5)
        ctx.fillRect(920, 1630 , 5, 400)
        ctx.fillRect(920, 2025 , 60 , 5)
        ctx.fillRect(980, 1630 , 5, 400)
        ctx.fillRect(980, 1630 , 420 , 5)
        ctx.fillRect(1400, 1630 , 5, 150)
        ctx.fillRect(1400, 1780 , 500 , 5)
        ctx.fillRect(1900, 1780 , 5 , 500)
        ctx.fillRect(1900, 2280 , 400 , 5)
        ctx.fillRect(2300, 2180 , 5 , 105)
        ctx.fillRect(2000, 2180 , 300 , 5)
        ctx.fillRect(2000, 1780 , 5 , 400)
        ctx.fillRect(2000, 1780 , 800 , 5)
        ctx.fillRect(2800, 1780 , 5 , 520)
        ctx.fillRect(2800, 2300 , 400 , 5)
        ctx.fillRect(3200, 2300 , 5 , 150)
        ctx.fillRect(3200, 2450 , 35 , 5)
    
        ctx.fillRect(90, 30 , 30, 5)
        ctx.fillRect(115, 30 , 5, 75)
        ctx.fillRect(115, 100 , 2000, 5)
        ctx.fillRect(2110, 100 , 5, 1250)
        ctx.fillRect(2110, 1350 , 300, 5)
        ctx.fillRect(2410, 220 , 5, 1135)
        ctx.fillRect(2110, 220 , 300, 5)
        ctx.fillRect(2110, 180 , 355, 5)
        ctx.fillRect(2460, 180 , 5, 120)
        ctx.fillRect(2460, 300 , 940, 5)
        ctx.fillRect(3400, 300 , 5, 1230)
        ctx.fillRect(3350, 1525 , 50, 5)
        ctx.fillRect(3350, 1025 , 5, 500)
        ctx.fillRect(2750, 1025 , 600, 5)
        ctx.fillRect(2750, 1025 , 5, 200)
        ctx.fillRect(2600, 1220 , 150, 5)
        ctx.fillRect(2600, 1220 , 5, 205)
        ctx.fillRect(2500, 1420 , 100, 5)
        ctx.fillRect(2500, 1420 , 5, 250)
        ctx.fillRect(2500, 1670 , 1200, 5)
        ctx.fillRect(3700, 1670 , 5, 400)
        ctx.fillRect(3350, 2070 , 355, 5)
        ctx.fillRect(3350, 2070 , 5, 385)
        ctx.fillRect(3320, 2450 , 30 , 5)
    
        ctx.fillRect(1990, 800 , 5, 520)
        ctx.fillRect(1790, 800 , 200, 5)
        ctx.fillRect(1785, 800 , 5, 300)
        ctx.fillRect(1680, 1100 , 110, 5)
        ctx.fillRect(1680, 800 , 5, 300)
        ctx.fillRect(1330, 800 , 350, 5)
        ctx.fillRect(1330, 750 , 5, 50)
        ctx.fillRect(1330, 750 , 650, 5)
        ctx.fillRect(1980, 220 , 5, 535)
        ctx.fillRect(980, 220 , 1000, 5)
        ctx.fillRect(980, 220 , 5, 300)
        ctx.fillRect(980, 520 , 390, 5)
        ctx.fillRect(1365, 450 , 5, 70)
        ctx.fillRect(1200, 450 , 165, 5)
        ctx.fillRect(1200, 420 , 5, 35)
        ctx.fillRect(1200, 420 , 200, 5)
        ctx.fillRect(1400, 420 , 5, 150)
        ctx.fillRect(910, 570 , 495, 5)
        ctx.fillRect(910, 220 , 5, 350)
        ctx.fillRect(115, 220 , 800, 5)
        ctx.fillRect(115, 225 , 5, 520)
        ctx.fillRect(115, 740 , 400, 5)
        ctx.fillRect(510, 420 , 5, 320)
        ctx.fillRect(510, 415 , 65 , 5)
        ctx.fillRect(570, 420 , 5, 325)
        ctx.fillRect(570, 740 , 480, 5)
        ctx.fillRect(1050, 740 , 5, 580)
        ctx.fillRect(1050, 1320 , 945, 5)   

        ctx.fillRect(2600, 500 , 5, 600)
        ctx.fillRect(2600, 500 , 200, 5)
        ctx.fillRect(2800, 435 , 5, 70)
        ctx.fillRect(2800, 435 , 200, 5)
        ctx.fillRect(3000, 370 , 5, 70)
        ctx.fillRect(3000, 370 , 350, 5)
        ctx.fillRect(3350, 370 , 5, 300)
        ctx.fillRect(2900, 665 , 450, 5)
        ctx.fillRect(2900, 665 , 5, 50)
        ctx.fillRect(2900, 710 , 450, 5)
        ctx.fillRect(3350, 710 , 5, 200)
        ctx.fillRect(2700, 910 , 655, 5)
        ctx.fillRect(2700, 910 , 5, 195)
        ctx.fillRect(2600, 1100 , 100, 5)

        ctx.fillRect(2900, 1740 , 5 , 500)
        ctx.fillRect(2900, 1740 , 700 , 5)
        ctx.fillRect(3600, 1740 , 5 , 265)
        ctx.fillRect(3200, 2000 , 400 , 5)
        ctx.fillRect(3200, 2000 , 5 , 240)
        ctx.fillRect(2900, 2240 , 305 , 5)
    }
}

//INICIO Y SALIDA
function dibujarEntrada()
{ 
    ctx.fillStyle = "mediumorchid"
    ctx.fillRect(5, 35 , 110 , 40); 
}
function dibujarSalida()
{ 
    ctx.fillStyle = "mediumorchid"
    ctx.fillRect(3205, 2410 , 145 , 40); 
    
}
