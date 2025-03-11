const lista1 = document.querySelector("#lista1")
//el hijo de lista1 seria
const primerHijo = lista1.firstElementChild //es el primer elemento decendiente
primerHijo.style.backgroundColor = "red"
//ultimo hijo
const ultimoHijo = lista1.lastElementChild
ultimoHijo.style.backgroundColor = "blue"
//hermano siguiente
const hermanoSiguiente = primerHijo.nextElementSibling
hermanoSiguiente.style.backgroundColor = "orange"
const anteUltimoHermano = ultimoHijo.previousElementSibling
anteUltimoHermano.style.backgroundColor = "yellow"

const lista2 = document.querySelector("#lista2")
let hijo = lista2.firstElementChild
while (hijo != null) {
    hijo.style.color = "red"
    hijo = hijo.nextElementSibling
}

// es una coleccion de sus hijos como elementos
for (let hijo of lista2.children) {
    hijo.style.backgroundColor = "black"
}

//aca lo tranformo en una lista
const arreglo = [...lista2.children]
arreglo.forEach(elemento => elemento.style.color = "green")

//obtener referencia del padre
let padre = lista1.parentElement
//aca es el hermano del elemento padre
let hermano = padre.nextElementSibling
hermano.textContent = "fin"