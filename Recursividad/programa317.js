/*

Implementar una funciona sumatoria que sume todos los 
valores enteros desde 1 hasta el valor que le pasemos como 
parametro. 
Implementar dicho algoritmo en forma recursiva. 
Ej la sumatoria de 5 consiste en sumar 5+4+3+2+3+1
cuyo resultado es 15

function sumatoria(valor) {
    if (valor > 0) {
        const suma = valor + sumatoria(valor - 1)
        return suma
    } else {
        return 0
    }
}

console.log(`La sumatoria de los numeros del 1 al 5 es  ${sumatoria(5)}`)

*/

function factorial(fact) {
    if (fact > 0) {
        const valor = fact * factorial(fact - 1)
        return valor
    } else {
        return 1
    }
}

console.log(`El factorial de 4 es ${factorial(4)}`)