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
document.querySelector("#recuperar").addEventListener("click", () => {
    const promesa1 = cargarImagen("./Imagen/cara1.jpeg")
    const promesa2 = cargarImagen("./Imagen/cara2.jpeg")
    const promesa3 = cargarImagen("./Imagen/cara30.jpeg")
    Promise.allSettled([promesa1, promesa2, promesa3])
        .then(respuestas => {
            console.log(respuestas)
            for (let respuesta of respuestas) {
                if (respuesta.status == "fulfilled") {
                    fotos.appendChild(respuesta.value)
                }
            }
        })
})
