/* 

Codificar una pequeña aplicacion que 
permita ingresar tareas en un control input y al presionar se
agreguen en forma dinamica a un elemento html del tipo ul.

Luego tambien agregar un segundo boton que muestre en 
cuadro de alert el contenido de todos los li en un arreglo
con formato JSON. 

En un principio si ingresamos tres tareas debemos tener un 
listado. 

Luego al presionar el boton Generar JSON se debe mostrar un 
string con formato JSON(Debemos crear un arreglo con
elementos de tipo objeto en javascript y posteriormente
aplicar el metodo stringify a dicho arreglo)
*/

const tareas = document.querySelector("#tareas")
const tarea = document.querySelector("#tarea")
document.querySelector("#agregar").addEventListener("click", () => {
    const li = document.createElement("li")
    li.textContent = tarea.value
    tareas.appendChild(li)
    tarea.value = ""
})

document.querySelector("#generar").addEventListener("click", () => {
    const todosLi = document.querySelectorAll("#tareas li")
    const arreglo = []
    todosLi.forEach(elemento => {
        arreglo.push({ tarea: elemento.textContent })
    })
    const formatoJSON = JSON.stringify(arreglo)
    alert(formatoJSON)
})