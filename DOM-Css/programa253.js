const elementosHTML = document.querySelectorAll("*")
let arreglo = []
elementosHTML.forEach(elemento => {
    const referenciaElemento = arreglo.find(elementoArreglo => elementoArreglo[0] == elemento.tagName)
    if (referenciaElemento == undefined) {
        arreglo.push([elemento.tagName, 1])

    } else {
        referenciaElemento[1]++
    }
})
arreglo.sort((a, b) => b[1] - a[1])
document.querySelector("#resultado").innerHTML = arreglo.join("<br>")
