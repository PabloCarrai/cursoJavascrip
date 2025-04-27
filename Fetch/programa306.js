const etiqueta = document.querySelector("#etiqueta")
const listaetiquetas = document.querySelector("#listaetiquetas")

etiqueta.addEventListener("keyup", evento => {
    if (evento.key == "Enter") {
        const li = document.createElement("li")
        li.textContent = etiqueta.value
        listaetiquetas.append(li)
        etiqueta.value = ""

    }
})

setTimeout(() => validarEtiquetas(), 15000)

function validarEtiquetas() {
    fetch("https://scratchya.com.ar/cursojs/enviaretiquetasthml.php", {
        method: "POST",
        body: retornarJSON()
    })
        .then(respuesta => respuesta.json())
        .then(etiquetas => {
            etiqueta.disabled = true
            const lista = etiquetas.map(etiqueta => `<li>${etiquetas.nombre}: ${etiquetas.descripcion}</li>`)
            listaetiquetas.innerHTML = lista.joint("")
        })
}


function retornarJSON() {
    const arreglo = [...document.querySelectorAll("#listaetiquetas li")]
    const lista = arreglo.map(elemento => elemento.textContent)
    return JSON.stringify(lista)
}