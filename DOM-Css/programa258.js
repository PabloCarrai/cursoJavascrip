let contador = 1

function cambiarImagen(operacion) {
    let imagen = `file:///home/ed/JavasCript/DOM-Css/imagenes/avatar${contador}.png`
    if (operacion == "suma") {
        contador++
    }
    if (operacion == "resta") {
        contador--
    }
    return imagen
}



document.querySelector("#siguiente").addEventListener("click", () => {
    let estado = false
    if (contador > 4) {
        contador = 4
        document.querySelector("#siguiente").disabled = estado
    } else {
        document.querySelector("#siguiente").disabled = estado
    }
    console.log(contador)
    document.querySelector("#imagen").src = cambiarImagen("suma")

})

document.querySelector("#anterior").addEventListener("click", () => {
    let estado = true
    if (contador < 1) {
        contador = 1
        document.querySelector("#anterior").disabled = estado
    } else {
        if (contador != 1) {
            estado = true
            document.querySelector("#anterior").disabled = estado
        }
    }
    console.log(contador)
    document.querySelector("#imagen").src = cambiarImagen("resta")
})
