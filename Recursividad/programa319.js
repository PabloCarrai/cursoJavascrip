function retornarNumero() {
    return Math.floor(Math.random() * 256)
}

function recorrerDOM(nodo) {
    nodo.style.backgroundColor = `rgb(${retornarNumero()},${retornarNumero()},${retornarNumero()})`
    const hijos = nodo.children
    for (let hijo of hijos) {
        recorrerDOM(hijo)
    }
}

recorrerDOM(document.body)