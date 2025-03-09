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
    if (contador > 4) {
        contador = 4
        document.querySelector("#siguiente").disabled = true

    } else {
        document.querySelector("#siguiente").disabled = false

    }
    console.log(contador)
    document.querySelector("#imagen").src = cambiarImagen("suma")

})

document.querySelector("#anterior").addEventListener("click", () => {
    if (contador < 1) {
        contador = 1
        document.querySelector("#anterior").disabled = true
        
    } else {
        document.querySelector("#anterior").disabled = false
    }
    console.log(contador)
    document.querySelector("#imagen").src = cambiarImagen("resta")
})
