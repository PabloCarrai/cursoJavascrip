function recuperarArticulos(mostrar) {
    fetch("https://www.scratchya.com.ar/cursojs/recuperararticulos.php")
        .then(respuesta => respuesta.json())
        .then(articulos => mostrar(articulos))
        .catch(error >= alert("Intentelo mas tarde"))
}

export { recuperarArticulos }