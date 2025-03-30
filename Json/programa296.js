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

function agregarElemento() {
    const tarea = document.querySelector("#tarea")
    const ul_lista = document.querySelector("#listado")
    const li = document.createElement("li")
    li.textContent = tarea.value
    ul_lista.appendChild(li)
}

function generarJSON() {
    const liItem = document.querySelectorAll("li")
    const listaItems = [...liItem]
    let listaAux=[]
    const objetoLI = new Object()
    for (let elemento of listaItems) {
        listaAux.push(objetoLI[elemento.textContent] = elemento.textContent)
    }
    console.log(listaAux)
    
}

document.querySelector("#agregar").addEventListener("click", () => {
    agregarElemento()
})

document.querySelector("#generar") - addEventListener("click", () => {
    generarJSON()
})