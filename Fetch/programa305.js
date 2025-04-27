const formulario = document.querySelector("#formulario")
formulario.addEventListener("submit", evento => {
    evento.preventDefault()
    const datosFormulario = new FormData(formulario)
    fetch("https://www.scratchya.com.ar/cursojs/consultarpormonto.php", {
        method: "POST",
        body: datosFormulario
    })
        .then(respuesta => respuesta.json())
        .then(monto => mostrarObjeto(monto))
})

function mostrarObjeto(objeto) {
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML=""
    objeto.forEach(obj => {
        resultado.innerHTML += `${obj.nombre} $ ${obj.precio}<br>`
    })
}