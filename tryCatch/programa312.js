/*
try {
    const distancia = 1
    if (distancia < 0) {
        throw new Error("Una distancia no puede ser negativa")
    }
    alert(distancia)
} catch (error) {
    alert(error.message)
}
    */


function dividir(n, n1) {
    if (n1 == 0) {
        throw new Error("No se puede dividir por 0")
    }
    if (isNaN(n) || isNaN(n1)) {
        throw new Error("debe ingresar los dos numeros")
    }
    const resultado = n / n1
    return resultado
}

const numero1 = parseFloat(prompt("Ingrese primer valor"))
const numero2 = parseFloat(prompt("Ingrese segundo valor"))

try {
    const resultado = dividir(numero1, numero2)
    alert(resultado)
} catch (error) {
    alert(error.message)
}