crearTablero()

function crearTablero() {
  const tablero = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
  ]

  let cadena = ''
  let colorcasilla
  for (let f = 0; f < 8; f++) {
    for (let c = 0; c < 8; c++) {
      if ((f + c) % 2 == 0) {
        colorcasilla = 'casillanegra'
      } else {
        colorcasilla = 'casillablanca'
      }

      cadena += `<span id="casilla${f}${c}" data-fila="${f}" data-columna="${c}"
                      class="casilla ${colorcasilla}" draggable="true">${tablero[f][c]}</span>`

    }

  }

  document.querySelector("#tablero").innerHTML = cadena
  const tabla = document.querySelector("#tablero")
  tabla.addEventListener('dragstart', ev => {
    ev.dataTransfer.setData("fila", ev.target.dataset.fila)
    ev.dataTransfer.setData("columna", ev.target.dataset.columna)
  })

  tabla.addEventListener('dragover', ev => {
    ev.preventDefault()
  })

  tabla.addEventListener('drop', ev => {
    const fila = parseInt(ev.dataTransfer.getData("fila"))
    const columna = parseInt(ev.dataTransfer.getData("columna"))
    const valor = document.querySelector("#casilla" + fila + columna).textContent
    document.querySelector('#casilla' + ev.target.dataset.fila + ev.target.dataset.columna).textContent = valor
    document.querySelector("#casilla" + fila + columna).textContent = ''
  })
}