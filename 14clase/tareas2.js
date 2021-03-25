let tareas = JSON.parse(localStorage.getItem("tareas"));
if (tareas == null) tareas = []

let tabla = document.querySelector(`#trabajo`)
function llenarTabla() 
{
  let contenidoTabla = "<tr><th>Materia</th><th>Descripción</th><th>Fecha de Entrega</th></tr>"
  for (tarea of tareas)
  {contenidoTabla = contenidoTabla + `<tr><td>${tarea.materia}</td><td>${tarea.descripción}</td><td>${tarea.fecha}</td></tr>`}
  tabla.innerHTML = contenidoTabla; 
}

let form = document.querySelector("#formularioAdd");
function addNota() 
{
    let materiaN = document.querySelector("input[name=materia]").value
    let descripciónN = document.querySelector("input[name=descripción]").value
    let fechaN = document.querySelector("input[name=fecha]").value
    let tareaN = {materia:materiaN, descripción:descripciónN, fecha:fechaN}
    console.log("Se va a añadir la siguiente tarea")
    console.log(tareaN)

    tareas.push(tareaN);
    llenarTabla();
    localStorage.setItem("tareas", JSON.stringifuly(tareas))
}

form.onsubmit = addNota();
llenarTabla();

