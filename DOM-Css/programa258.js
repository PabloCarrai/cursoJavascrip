let contador = 1
deshabilitarBoton(contador)

function deshabilitarBoton(contador) {
    if (contador == 1) {
        document.querySelector("#anterior").disabled = true
    } else {
        document.querySelector("#anterior").disabled = false
    }
    if (contador == 4) {
        document.querySelector("#siguiente").disabled = true
    } else {
        document.querySelector("#siguiente").disabled = false
    }
}

function cambiarImagen(operacion) {
    let imagen = `file:///home/ed/JavasCript/DOM-Css/imagenes/avatar${contador}.png`
    if (operacion == "suma") {
        contador++
    }
    if (operacion == "resta") {
        contador--
    }
    if (contador < 1) {
        contador = 1
    }
    if (contador > 4) {
        contador = 4
    }
    return imagen
}

document.querySelector("#siguiente").addEventListener("click", () => {
    deshabilitarBoton(contador)
    document.querySelector("#imagen").src = cambiarImagen("suma")
})

document.querySelector("#anterior").addEventListener("click", () => {
    deshabilitarBoton(contador)
    document.querySelector("#imagen").src = cambiarImagen("resta")
})
