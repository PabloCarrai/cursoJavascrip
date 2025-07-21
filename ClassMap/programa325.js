const texto = "grande es la casa pero la grandeza de la casa no se compara a la grandeza del corazon de sus habitantes"
const palabras = texto.split(" ")


const contadorPalabras = new Map()
for (let palabra of palabras) {
    if (contadorPalabras.has(palabra)) {
        contadorPalabras.set(palabra, contadorPalabras.get(palabra) + 1)
    } else {
        contadorPalabras.set(palabra, 1)
    }
}
console.log(contadorPalabras)
const arreglo = [...contadorPalabras]
arreglo.sort((a,b)=>b[1]-a[1])
console.log(arreglo)