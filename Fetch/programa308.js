const formulario1 = document.querySelector("#formulario1")
const resultado = document.querySelector("#resultado")
const imagenOriginal = document.querySelector("#imagenoriginal")
document.querySelector("#imagen").addEventListener("change", () => {
    const archivo = document.querySelector("#imagen").files[0]
    const urlDelObjeto = URL.createObjectURL(archivo)
    const img = document.createElement("img")
    img.src = urlDelObjeto
    imagenOriginal.appendChild(img)
})
formulario1.addEventListener("submit", (event) => {
    event.preventDefault()
    const datosFormularios = new FormData(formulario1)
    fetch("https://scratchya.com.ar/cursojs/procesarimagen.php", {
        method: "POST",
        body: datosFormularios
    })
        .then(respuesta => respuesta.blob())
        .then(blob => {
            const urlDelObjeto = URL.createObjectURL(blob)
            const img = document.createElement("img")
            img.src = urlDelObjeto
            resultado.appendChild(img)
        })
})