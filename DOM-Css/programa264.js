/* 



Se dispone de una lista HTML, con 
valores numericos. Agregar la clase negativo a los 
elementos que tienen un valor negativo.

.negativo {
    color: red
}

    <ul id="listavalores">
        <li>-5</li>
        <li>10</li>
        <li>-2</li>
        <li>8</li>
        <li>-3</li>
        <li>6</li>
        <li>-1</li>
        <li>4</li>
        <li>-7</li>
        <li>9</li>
    </ul>

Obtener la referencia de la lista por su id y 
posteriormente acceder a todos sus hijos. 
Para resolverlo utilizar dos algoritmos diferentes:
1- Acceder a los hijos mediante la propiedad children.
2- Tambien resolverlo obteniendo la referencia del primer
hijo y recorrerlo con un while obteniendo la referencia de
los hermanos
*/

const lista = document.querySelector("#listavalores")

function primerMetodo(lista) {
    const arreglo = [...lista.children]
    arreglo.forEach(elemento => {
        if (elemento.textContent < 0) {
            elemento.className = "negativo"
        }
    })
}

function segundoMetodo(lista) {
    let hijos = lista.firstElementChild
    while (hijos != null) {
        if (hijos.textContent < 0) {
            hijos.className = "negativo"
        }
        hijos = hijos.nextElementSibling
    }
}


//primerMetodo(lista)
segundoMetodo(lista)