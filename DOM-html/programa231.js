
function operar(operacion) {
    // obtiene los valores del selector editor1 y 2
    const valor1 = parseInt(document.querySelector("#editor1").value)
    const valor2 = parseInt(document.querySelector("#editor2").value)
    const sumar = valor1 + valor2
    const restar = valor1 - valor2
    // reviso cual es la operacion a hacer
    if (operacion === "sumar") {
        // seteo el resultado en el parrafo resultado
        document.querySelector("#resultado").innerHTML = `${sumar}`
    } 
    if (operacion === "restar") {
        document.querySelector("#resultado").innerHTML = `${restar}`
    }
}
document.querySelector("#boton1").addEventListener("click", () => {
    operar("sumar")
})

document.querySelector("#boton2").addEventListener("click", () => {
    operar("restar")
})
