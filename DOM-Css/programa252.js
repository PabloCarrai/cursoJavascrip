function actualizarPropiedades(ancho, alto, color) {
    document.querySelector("#recuadro").style.width = `${ancho}px`
    document.querySelector("#recuadro").style.height = `${alto}px`
    document.querySelector("#recuadro").style.backgroundColor = `${color}`
}


document.querySelector("#actualizar").addEventListener("click", () => {
    let ancho = parseInt(document.querySelector("#ancho").value)
    let alto = parseInt(document.querySelector("#alto").value)
    let color = document.querySelector("#color").value
    actualizarPropiedades(ancho, alto, color)
})