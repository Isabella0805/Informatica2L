let canvas = document.querySelector("#peónAnimado")
let ctx = canvas.getContext("2d")

let x = 0;
let y = 0;
let x2 = 500;
let y2 = 0;
let dT = 40;

function peones(x,y,t,color)
{
ctx.fillStyle = color
ctx.strokeStyle = "black"
ctx.fillRect(x,y,2.5*t,t);
ctx.fillStyle = color
ctx.strokeStyle = "black"
ctx.fillRect(x+0.5*t,y-0.5*t,1.5*t,0.5*t);
ctx.fillStyle = color
ctx.strokeStyle = color
ctx.beginPath();
ctx.arc(x+1.25*t, y-1.8*t, t, -Math.PI, Math.PI)
ctx.stroke()
ctx.fill()
ctx.fillStyle = color
ctx.strokeStyle = "black"
ctx.fillRect(x+0.75*t,y-t,t,0.5*t);
}

function peonHorizontal(){ //40 px
    let dX = (dT/1000) * 40;
    x = x + dX;
    peones(x, 275, 10, 'black');
}

function peonVertical(){ //200px
    let dX = (dT/1000) * 200;
    y = y + dX;
    peones(275, y, 10, 'black');
}

function moverDiagonal(){ //100 px
    let dX = (dT/1000) * 100;
    x2 = x2 - dX;
    y2 = y2 + dX;
    peones(x2, y2, 10, 'black');
}


function mover(){
    ctx.clearRect(0,0, 500, 500);
    peonHorizontal()
    peonVertical()
    moverDiagonal()
}

window.setInterval(mover, dT);