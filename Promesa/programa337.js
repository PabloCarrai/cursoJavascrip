const archivohtml = document.querySelector("#archivohtml")
const resultado = document.querySelector("#resultado")

function leerArchivo(file) {
    return new Promise((resolve, reject) => {
        if (!file.name.endsWith(".html")) {
            reject("Extension de archivo incorrecta")
        } else {
            const fileReader1 = new FileReader()
            fileReader1.readAsText(file)
            fileReader1.addEventListener("load", () => {
                resolve(fileReader1.result)
            })
        }
    })
}

archivohtml.addEventListener("change", (evento) => {
    const file = evento.target.files[0]
    leerArchivo(file)
        .then(contenido => resultado.textContent = contenido)
        .catch(error => resultado.textContent = error)
})