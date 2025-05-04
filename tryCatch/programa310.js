/*   El error mal el json
const cadena = '{nombre:juan}'
const persona = JSON.parse(cadena)
alert(persona.nombre)

*/
/* La forma correcta
try {
    const cadena = '{"nombre":"juan"}'
    const persona = JSON.parse(cadena)
    alert(persona.nombre)
} catch (error) {
    alert("Formato JSON incorrecto")
    console.log(error.message)
}
    */

const numeros = document.querySelector("#numeros")
document.querySelector("#sumar").addEventListener("click", () => {
    try {
        const cadena = `[${numeros.value}]`
        const arreglo = JSON.parse(cadena)
        const suma = arreglo.reduce((acumulador, valor) => acumulador + valor)
        alert(suma)
    } catch (error) {
        alert("Solo ingrese una lista de numeros separados por coma")

    }
})
