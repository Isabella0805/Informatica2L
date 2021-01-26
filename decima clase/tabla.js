//Lista de planetas y sus imagen 
let planetas= [
    {nombre: "Mercurio", diametro:4879, imagen:k}, 
    {nombre: "Venus", diametro:12104, imagen:h}, 
    {nombre:"Tierra", diametro:12756, imagen:c},
    {nombre: "Marte", diametro:6792, imagen:w},
    {nombre: "Júpiter", diametro: 142984, imagen:d},
    {nombre: "Saturno", diametro: 120536, imagen:f},
    {nombre:"Urano", diametro:51118, imagen:m}
]
//Creo una variable que haga referencia a la tabla 
// QuerySelector selecciona un elemento del html, usando los selectores de css.
let tabla = document.querySelector(`#planetas`)
//consol.log(tabla)

//Voy a llenar la tabla añadiendo las filas necesarias
let contenidoTabla = `<tr><th>Nombre</th><th>Diámetro</th></tr>`
for (planeta of planetas){
    contenidoTabla += `<tr><td>${planeta.nombre}</td><th>${planeta.diametro}</td></tr><img width="600px" src="${planeta.imagen}" alt=""></td></tr>` 
}
//A la tabla le asigno el contenido que creamos
tabla.innerHTML = contenidoTabla;
