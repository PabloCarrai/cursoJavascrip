function crearTablero() {
    const arreglo = []
    for (let f = 0; f < 10; f++) {
        arreglo.push([])
        for (let c = 0; c < 10; c++) {
            arreglo[f].push(0)
        }
    }
    return arreglo
}

function disponerBombas(arreglo) {
    let cant = 0
    do {
        const fila = Math.floor(Math.random() * 10)
        const columna = Math.floor(Math.random() * 10)
        if (arreglo[fila][columna] == 0) {
            arreglo[fila][columna] = 'b'
            cant++
        }
    } while (cant != 10)
}

function contarLado(arreglo, fila, columna) {
    let total = 0
    if (fila - 1 >= 0 && columna - 1 >= 0) {
        if (arreglo[fila - 1][columna - 1] == "b") {
            total = total + 1
        }
    }
    if (fila - 1 >= 0) {
        if (arreglo[fila - 1][columna] == "b") {
            total = total + 1
        }
    }
    if (fila - 1 >= 0 && columna + 1 < 10) {
        if (arreglo[fila - 1][columna + 1] == "b") {
            total = total + 1
        }
    }
    if (columna + 1 < 10) {
        if (arreglo[fila][columna + 1] == "b") {
            total = total + 1
        }
    }
    if (fila + 1 < 10 && columna + 1 < 10) {
        if (arreglo[fila + 1][columna + 1] == "b") {
            total = total + 1
        }
    }
    if (fila + 1 < 10) {
        if (arreglo[fila + 1][columna] == "b") {
            total = total + 1
        }
    }
    if (fila + 1 < 10 && columna - 1 >= 0) {
        if (arreglo[fila + 1][columna - 1] == "b") {
            total = total + 1
        }
    }
    if (columna - 1 >= 0) {
        if (arreglo[fila][columna - 1] == "b") {
            total = total + 1
        }
    }
    return total
}

function generarBombasProximas(arreglo) {
    for (let f = 0; f < 10; f++) {
        for (let c = 0; c < 10; c++) {
            if (arreglo[f][c] == 0) {
                arreglo[f][c] = contarLado(arreglo, f, c)
            }
        }
    }
}

function crearPantalla() {
    let cad = ''
    for (let f = 0; f < 10; f++) {
        for (c = 0; c < 10; c++) {
            cad += `<span class="celda gris" id="celda${f}${c}" data-fila="${f}" data-columna="${c}"></span>`
        }
    }
    document.querySelector(".contenedor").innerHTML = cad
}

function destapar(arreglo, fila, columna, evento) {
    if (arreglo[fila][columna] === 'b') {
        evento.target.style.backgroundColor = 'red'
        setTimeout(() => alert('Perdiste'), 10);
        estado = false
    } else {
        if (arreglo[fila][columna] >= 1 && arreglo[fila][columna] <= 8) {
            evento.target.textContent = arreglo[fila][columna]
            evento.target.classList.add('verde')
            evento.target.classList.remove('gris')
        } else {
            if (arreglo[fila][columna] === 0) {
                recorrer(arreglo, fila, columna)
                console.table(arreglo)
            }
        }
    }
    verificarGanado()
}

function verificarGanado() {
    const celdas = document.querySelectorAll(".contenedor span")
    let cant = 0
    celdas.forEach(celda => {
        if (celda.classList.contains('verde')) {
            cant++
        }
    })
    if (cant == 90) {
        estado = false
        setTimeout(() => alert('Ganaste'), 10)
    }
}

function recorrer(arreglo, fil, col) {
    if (fil >= 0 && fil < 10 && col >= 0 && col < 10) {
        if (arreglo[fil][col] == 0) {
            arreglo[fil][col] = "x"
            document.querySelector(`#celda${fil}${col}`).classList.add('verde')
            document.querySelector(`#celda${fil}${col}`).classList.remove('gris')
            recorrer(arreglo, fil, col + 1)
            recorrer(arreglo, fil, col - 1)
            recorrer(arreglo, fil + 1, col)
            recorrer(arreglo, fil - 1, col)
            recorrer(arreglo, fil - 1, col - 1)
            recorrer(arreglo, fil - 1, col + 1)
            recorrer(arreglo, fil + 1, col + 1)
            recorrer(arreglo, fil + 1, col - 1)
        } else {
            if (arreglo[fil][col] >= 1 && arreglo[fil][col] <= 8) {
                document.querySelector(`#celda${fil}${col}`).classList.add('verde')
                document.querySelector(`#celda${fil}${col}`).classList.remove('gris')
                document.querySelector(`#celda${fil}${col}`).textContent = arreglo[fil][col]
            }
        }
    }
}

document.querySelector(".contenedor").addEventListener('click', evento => {
    if (evento.target.tagName == 'SPAN' && estado) {
        const fila = parseInt(evento.target.dataset.fila)
        const columna = parseInt(evento.target.dataset.columna)
        if (document.querySelector(`#celda${fila}${columna}`).classList.contains('gris')) {
            destapar(arreglo, fila, columna, evento)
        }
    }
})

crearPantalla()
let estado = true  // Juego activo o terminado
const arreglo = crearTablero()
disponerBombas(arreglo)
generarBombasProximas(arreglo)
console.table(arreglo)
