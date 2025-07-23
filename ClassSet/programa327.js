/*
Generar una lista de 10 numeros aleatorios comprendidos entre 1 y 100. 
Validad que los 10 numeros sean todos distintis. Para ello utiliza
una estructura de datos tipo set. 
confeccionar los siguientes algoritmos. 
imprimir el mayor elemento del conjunto
sumar todos los elementos
generar un numero aleatorio y verificar si se encuentra en el conjunto
*/

function naleatorio() {
    const aleatorio = Math.floor(Math.random() * 101)
    return aleatorio
}

function nmayor(conjunto) {
    maximo = Math.max(...conjunto)
    return maximo
}

function sumarConjunto(conjunto) {
    let total = 0
    for (let elemento of conjunto.values()) {
        total += elemento
    }
    return total

}

function naVerificable() {
    const numero = naleatorio()
    if (conjunto.has(numero)) {
        return `el numero ${numero} existe en el conjunto`
    } else {
        return `el numero ${numero} no existe en el conjunto`
    }
}

const conjunto = new Set()
while (conjunto.size < 10) {
    conjunto.add(naleatorio())
}



console.log(conjunto)
console.log(`Del conjunto, el maximo valor es ${nmayor(conjunto)}`)
console.log(`La sumatoria de los elementos da ${sumarConjunto(conjunto)}`)
console.log(naVerificable())