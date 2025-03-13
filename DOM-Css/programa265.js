/*

// referencio la lista
const lista1 = document.querySelector("#lista1")
// agrego contenido de los li
lista1.innerHTML = `<li>Uno</li>
<li>Dos</li>
<li>Tres</li>
<li>Cuatro</li>`

// creo un nuevo nodo del tipo li
const li1 = document.createElement("li")
// agrego un texto como contenido 
li1.textContent = "Quinto"
// y agrego como elemento deltro de la lista, esto lo agrega al final
lista1.append(li1)

// para agregarlo al principio se usa prepend
const li2 = document.createElement("li")
li2.textContent = "Primero"
// agrega al principio del nodo
lista1.prepend(li2)

*/

/*

Mediante un elemento inputo de tipo text
permitir el ingreso de nombres. Cada vez que se presione un 
boton, añadir dicho nombre al final de una lista.
*/

function agregarNombres(valor) {
    const lista = document.querySelector("#resultado")
    const elemento1 = document.createElement("li")
    elemento1.textContent = valor
    lista.append(elemento1)
}

document.querySelector("#confirmar").addEventListener("click", () => {
    let valor = document.querySelector("#nombres").value
    agregarNombres(valor)
})