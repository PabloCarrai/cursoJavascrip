document.querySelector("#operar").addEventListener("click", () => {
    const valor1 = parseInt(document.querySelector("#valor1").value)
    const valor2 = parseInt(document.querySelector("#valor2").value)
    if (isNaN(valor1) || isNaN(valor2)) {
        document.querySelector("#resultado").textContent = "Debe ingresar ambos numeros"
        return
    }
    const radioSuma = document.querySelector("#suma")
    const radioResta = document.querySelector("#resta")
    if (radioSuma.checked) {
        const suma = valor1 + valor2
        document.querySelector("#resultado").textContent = suma
    }
    if (radioResta.checked) {
        const resta = valor1 - valor2
        document.querySelector("#resultado").textContent = resta
    }

})