const actividades = document.querySelector("#actividades")
const fecha = document.querySelector("#fecha")
actividades.addEventListener("input", () => {
    localStorage.setItem(fecha.value, actividades.value)
})

fecha.addEventListener("input", () => {
    actividades.value = ""
    const contenido = localStorage.getItem(fecha.value)
    if (contenido != null) {
        actividades.value = contenido
    }
})