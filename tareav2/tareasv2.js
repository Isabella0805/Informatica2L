let lista = 
[   
    {Materia:"Informática", Descripción:"Hacer una tarea de informática que tenga todas las tareas.",Fecha:"20-02-2021"},
    {Materia:"Física", Descripción:"Hacer los ejercicios pares del eserciziario cobre el movimiento parabólico",Fecha:"26-05-2021"},
    {Materia:"Química", Descripción:"Taller de Reacciones Químicas",Fecha:"12-03-2021"},
]
     
let tabla = document.querySelector('#listaTareas')
    function llenarTabla()
    {
        let contenidoTabla = '<tr><th>Materia</th><th>Descripción</th><th>Fecha</th></tr>'
        for (elemento of lista)
        {contenidoTabla = contenidoTabla + `<tr><td>${elemento.Materia}</td><td>${elemento.Descripción}</td><td> ${elemento.Fecha}</td></tr>`}
        tabla.innerHTML = contenidoTabla;
    }

localStorage.setItem("listadetareas",JSON.stringify(lista))

let form = document.querySelector("#formularioAdd");
    function addElement()
    {
        let nombreNuevo = document.querySelector("input[name=nombre]").value
        let diametroNuevo = document.querySelector("input[name=diametro]").value   
        let urlNuevo = document.querySelector("input[name=urlImagen]").value
        let elementoNuevo = {Materia:nombreNuevo, Descripción:diametroNuevo, Fecha:urlNuevo}
        console.log(elementoNuevo)
        
        lista.push(elementoNuevo)
        localStorage.setItem("listadetareas",JSON.stringify(lista))
        llenarTabla();
        return false;
    }
    
 form.onsubmit = addElement;
 let formBorrar = document.querySelector("#formularioDelete");
 llenarTabla();
 function deletePlanet()
 {
     let nombrePlanetaABorrar = document.querySelector("#formularioDelete input[name=nombre]").value
     console.log("Ahora voy a borrar la siguiente tarea");
     console.log(nombrePlanetaABorrar)
  
     let aBorrar = planetas.findIndex(planeta => planeta.nombre == nombrePlanetaABorrar);
     if(aBorrar == -1) alert("Tarea no encontrada");
     planetas.splice(aBorrar, 1);
     localStorage.setItem("listadetareas",JSON.stringify(lista))
     llenarTabla();
     return false;
 }
    formBorrar.onsubmit = deletePlanet;