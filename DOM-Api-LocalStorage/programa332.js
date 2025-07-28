const nombrereceta = document.querySelector("#nombrereceta")
const receta = document.querySelector("#receta")

document.querySelector("#grabar").addEventListener("click", () => {
    localStorage.setItem(nombrereceta.value, receta.value)
    alert("receta registrara con el nombre ", nombrereceta.value)
    nombrereceta.value = ""
    receta.value = ""
})

document.querySelector("#recuperar").addEventListener("click", () => {
    const contenido = localStorage.getItem(nombrereceta.value)
    if (contenido != null) {
        receta.value = contenido
    } else {
        alert("no existe la receta con dicho nombre ", nombrereceta.value)
        receta.value = ""
    }



})