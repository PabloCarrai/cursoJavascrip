const nombresMasculinos = [
    "Juan",
    "Santiago",
    "Mateo",
    "Lucas"
]

document.querySelector("#generar").addEventListener("click", () => {
    generarNombres(document.querySelector("#nombre").value, document.querySelector("#apellido").value)
})

function generarNombres(nombre, apellido) {
    const nombresCompleto = nombresMasculinos.map(nombresMasculinos => `${nombre} ${nombresMasculinos} ${apellido}`)
    document.querySelector("#resultado").innerHTML = nombresCompleto.join("<br>")
}