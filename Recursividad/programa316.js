/*

function repetir() {
    repetir()
}

repetir()

function imprimir(x) {
    console.log(x)
    imprimir(x - 1)
}

imprimir(5)

*/

function imprimir(x) {
    if (x > 0) {
        imprimir(x - 1)
        console.log(x)
    }
}

imprimir(5)
console.log("fin del programa")