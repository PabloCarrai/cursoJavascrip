const resultado = document.querySelector("#resultado")
document.querySelector("#recuperar").addEventListener("click", () => {
    /* no funciona la url de esta gente, por eso lo hice local  */
    cargarImagen("Imagen/brasil.jpg")
        .then(imagen => resultado.appendChild(imagen))
        .catch(error => resultado.textContent = error)
})


function cargarImagen(url) {
    return new Promise((resolve, reject) => {
        const image = new Image()
        image.src = url
        image.addEventListener("load", () => {
            resolve(image)
        })
        image.addEventListener("error", () => {
            reject("No se pudo cargar la imagen")
        })
    })
}