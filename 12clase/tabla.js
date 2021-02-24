let tareas = [ {nombre: "Informática", descripción: "Hacer una página web", fecha:"01/01/2021"}]

let tabla = document.querySelector(`#tareas`)
function llenarTabla()
{
    let contenido = `<tr><th>Nombre tarea</th><th>Descripción tarea</th><th>Fecha tarea</th></tr>`
    for (tarea of tareas)
     {contenido = contenido + `<tr><th>${nombre.tarea}</th><th>${descripción.tarea}</th><th>${fecha.tarea}</th></tr>`}
    tabla.innerHTML = contenido;
}

let form= document.querySelector(`#formulario`)
function añadirTarea()
{
    let TareaNueva = document.querySelector("input.[name=materia]").value
    let DescripciónNueva = document.querySelector("input.[name=descripción]").value
    let FechaNueva = document.querySelector("input.[name=fecha]").value
    let TareaNuevaTot = {nombre:TareaNueva, descripción:DescripciónNueva, fecha:FechaNueva}
    console.log ("Añadiendo la siguiente tarea")
    console.log (TareaNuevaTot)
    console.push (TareaNuevaTot)
    llenarTabla()
    return false;
}

form.onsubmit = añadirTarea
llenarTabla();
