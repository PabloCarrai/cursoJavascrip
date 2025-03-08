const primerImagen = 'file:///home/ed/JavasCript/DOM-Css/imagenes/avatar1.png'
const ultimaImagen = 'file:///home/ed/JavasCript/DOM-Css/imagenes/avatar4.png'
let contador = 1






document.querySelector("#siguiente").addEventListener("click", () => {
    let imagenDinamica = `file:///home/ed/JavasCript/DOM-Css/imagenes/avatar${contador}.png`
    document.querySelector("#imagen").src = imagenDinamica
    contador++
    if (contador >= 4) {
        document.querySelector("#siguiente").disabled = true
    } else {
        document.querySelector("#siguiente").disabled = false
    }
})

document.querySelector("#anterior").addEventListener("click", () => {
    let imagenDinamica = `file:///home/ed/JavasCript/DOM-Css/imagenes/avatar${contador}.png`
    //obtengo la imagen actual para saber si el boton anterior tiene que estar habilitado
    const imagenActual = document.querySelector("#imagen").src
    document.querySelector("#imagen").src = imagenDinamica
    contador--
    if (imagenActual === 'file:///home/ed/JavasCript/DOM-Css/imagenes/avatar1.png') {
        document.querySelector("#anterior").disabled = true
    } else {
        document.querySelector("#anterior").disabled = false
    }
})
