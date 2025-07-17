const paisesInflacion = [
    { nombre: "Mexico", inflacion: 7.86 },
    { nombre: "Estados Unidos", inflacion: 6.5 },
    { nombre: "Argentina", inflacion: 101.4 },
    { nombre: "España", inflacion: 5.7 },
    { nombre: "Japon", inflacion: 2.3 },
]


function retornarPaisesInflacion() {
    return paisesInflacion.map(pais => `<li>${pais.nombre} - ${pais.inflacion}</li>`).join("")
}
function paisMayorInflacion() {
    let max = paisesInflacion[0].inflacion
    let nombre = paisesInflacion[0].nombre
    for (let f = 1; f < paisesInflacion.length; f++) {
        if (paisesInflacion[f].inflacion > max) {
            max = paisesInflacion[f].inflacion
            nombre = paisesInflacion[f].nombre
        }
    }
    return nombre
}
function ordenarPorInflacion() {
    paisesInflacion.sort((a, b) => a.inflacion - b.inflacion)
    return retornarPaisesInflacion()
}

export { retornarPaisesInflacion, paisMayorInflacion,ordenarPorInflacion }