const arreglo = [100, 5, 7, 23, 12, 6]


function ordenar(arreglo, cantComparaciones) {
    if (cantComparaciones > 1) {
        for (let x = 0; x < cantComparaciones; x++) {
            if (arreglo[x] > arreglo[x + 1]) {
                const aux = arreglo[x]
                arreglo[x] = arreglo[x + 1]
                arreglo[x + 1] = aux
            }
        }
        // hacer la llamada recursiva
        ordenar(arreglo, cantComparaciones - 1)
    }
}


console.log(arreglo)
ordenar(arreglo, arreglo.length - 1)
console.log(arreglo)