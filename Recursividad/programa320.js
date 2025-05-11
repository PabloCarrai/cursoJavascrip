/*

Se dispone de un arreglo con elementos numericos y otros
arreglos anidados, a su vez los arreglos anidados pueden
tener otros arreglos anidados. 

const arreglo = [1, 2, 3, [10, 20, [100, 200]], 5]
Desarrollar una funcion recursiva que proceda a sumarizar
todos los elementos enteros almacenados en la variable
arreglo
*/

function sumar(arreglo) {
    let suma = 0
    for (let elemento of arreglo) {
        if (Array.isArray(elemento)) {
            suma = suma + sumar(elemento)
        } else {
            suma = suma + elemento
        }
    }
    return suma
}

const arreglo = [1, 2, 3, [10, 20, [100, 200],[100]], 5]
console.log(sumar(arreglo))
