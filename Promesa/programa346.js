function cargarImagen(url) {
    return new Promise((resolver, rechazar) => {
        const image = new Image()
        image.src = url
        image.addEventListener("load", () => {
            resolver(image)
        })
        image.addEventListener("error", () => {
            rechazar("Problemas con la imagen")
        })
    })
}

const fotos = document.querySelector("#fotos")
document.querySelector("#recuperar").addEventListener("click", async () => {
    const promesa1 = cargarImagen("./Imagen/cara1.jpeg")
    const promesa2 = cargarImagen("./Imagen/cara2.jpeg")
    const promesa3 = cargarImagen("./Imagen/cara3.jpeg")
    try {
        const respuestas = await Promise.all([promesa1, promesa2, promesa3])
        for (let respuesta of respuestas) {
            fotos.appendChild(respuesta)
        }
    } catch (error) {
        fotos.textContent = error
    }
})
