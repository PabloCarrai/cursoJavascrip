const primerImagen = 'file:///home/ed/JavasCript/DOM-Css/imagenes/avatar1.png'
const ultimaImagen = 'file:///home/ed/JavasCript/DOM-Css/imagenes/avatar4.png'
//obtengo la imagen actual para saber si el boton anterior tiene que estar habilitado
const imagenActual = document.querySelector("#imagen").src
if (imagenActual === primerImagen) {
    document.querySelector("#anterior").disabled = true
} else {
    document.querySelector("#anterior").disabled = false
}




let contador = 1
document.querySelector("#siguiente").addEventListener("click", () => {
    //Lo mismo para la ultima imagen, se deshabilita el siguiente
    if (imagenActual === ultimaImagen) {
    }

    let imagenDinamica = `file:///home/ed/JavasCript/DOM-Css/imagenes/avatar${contador}.png`
    document.querySelector("#imagen").src = imagenDinamica
    contador++
    if (contador >= 4) {
        document.querySelector("#siguiente").disabled = true
    } else {
        document.querySelector("#siguiente").disabled = false

    }
})