//Lista de planetas y sus imagen 
let ingedientes= [
    {ingrediente: "arroz", cantidad: "1 libra", tipo: "grano", imagen:k}, 
    {ingrediente: "pescado", cantidad: "400 gramos", tipo: "proteína", imagen:h}, 
    {ingrediente:"carne", cantidad: "350 gramos", tipo: "proteína", imagen:c},
    {ingrediente: "huevos", cantidad:"12 unidades", tipo:"proteína", imagen:w},
    {ingrediente: "pan", cantidad: "6 unides" , tipo: "harina", imagen:d},
    {ingrediene: "tomate", cantidad: "3 unidades", tipo: "vegetal", imagen:f},
]
//Creo una variable que haga referencia a la tabla 
// QuerySelector selecciona un elemento del html, usando los selectores de css.
let tabla = document.querySelector(`#ingredientes`)
//consol.log(tabla)

//Voy a llenar la tabla añadiendo las filas necesarias
let contenidoTabla = `<tr><th>Nombre</th><th>cantidad</th><th>tipo</th><th>imagen</th></tr>`
for (elemento of ingredientes)
{
    contenidoTabla = contenidoTabla + `<tr><td>${elemento.nombre}</td><td>${elemento.cantidad}</td><td>${elemento.tipo}</td><td><img width="600px" src="${planeta.imagen}" alt=""></td></tr>` 
}
//A la tabla le asigno el contenido que creamos
tabla.innerHTML = contenidoTabla;
