//bucle while

let total = 0;
let sumando = 1;
while (sumando <= 100) 
{
 total = total + sumando;
 sumando = sumando + 1;   
}
console.log(`La suma es ${total}`);

//bucle do while

let numero;
do {
    numero = promt("Ingrese un numero"); 
} while (isNaN(numero) || numero < 0); 
console.log(`La raíz cuadrada es: ${Math.sqrt(numero)}`);