/*

Se tiene una pagina con distintos elementos html. 
Al presionar un boton cambiar el color de los textos de
los parrafos y elementos de tipo li.
Resolverlo obteniendo la referencia de todos los 
elementos de la pagina y luego recorriendo el nodelist
identificando si se trata de un elemento p o li
*/


let todosElementos = document.querySelectorAll("*")

function cambiarEstiloLIP() {
    todosElementos.forEach((elemento) => {
        if (elemento.tagName == "LI" || elemento.tagName == "P") {
            elemento.style.color = "red"
        }
    })
}


document.querySelector("#cambiar").addEventListener("click", () => {
    cambiarEstiloLIP()
})

