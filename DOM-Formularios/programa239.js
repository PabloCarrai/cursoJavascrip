/*
Permitir ingresar 2 numeros y mediante un menu
desplegable permitir seleccionar si queremos sumarlos o
restartlos
*/

document.querySelector("#operar").addEventListener("click", () => {
    // otra forma de hacer esto y evitar el parseint es usar .valueAsNumber
    const valor1 = parseInt(document.querySelector("#valor1").value)
    const valor2 = parseInt(document.querySelector("#valor2").value)
    const operacion = document.querySelector("#operacion").value
    switch (operacion) {
        case "sumar":
            const suma = valor1 + valor2
            document.querySelector("#resultado").textContent = `La suma es ${suma}`
            break
        case "restar":
            const resta = valor1 - valor2
            document.querySelector("#resultado").textContent = `La resta es ${resta}`
            break

    }

})