/*
Disponer dos botones y un parrafo con el 
contenido de 0.
Cuando se presione un boton incrementar en uno y al presionar
el segundo boton decrementar en 1. El rango de valores
posibles restringirlo entre 0 y 10
*/

// agrego un evento de click al boton menos
document.querySelector("#botonmenos").addEventListener("click", () => {
    // creo un contador con el valor actual de resultado(p) 
    let valor = parseInt(document.querySelector("#resultado").textContent)
    // reviso si es mayor a 0 y decremento valor
    if (valor > 0) {
        valor--
        // seteo el resultado del contador
        document.querySelector("#resultado").textContent = valor
    }
})

document.querySelector("#botonmas").addEventListener("click", () => {
    // toma el valor de resultado y lo transforma a entero guardandolo en valor
    let valor = parseInt(document.querySelector("#resultado").textContent)
    // revisa si es menor a 10
    if (valor < 10) {
        // aumenta en 1 ese valor
        valor++
        // seteo el resultado del contador
        document.querySelector("#resultado").textContent = valor
    }

})