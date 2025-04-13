recuperar("https://www.scratchya.com.ar/cursojs/recuperarporrubro.php?rubro=frutas")


function recuperar(urlRubro) {
    fetch(urlRubro)
        .then(respuesta => respuesta.json())
        .then(productos => imprimir(productos))
}

function imprimir(productos) {
    const lista = productos.map(producto => `<li>${producto.nombre}</li>`)
    document.querySelector("#productos").innerHTML = lista.join("")
}

const lista = document.querySelectorAll("#rubros a")
lista.forEach(enlace => {
    enlace.addEventListener("click", evento => {
        evento.preventDefault()
        recuperar(evento.target.href)
    })
})