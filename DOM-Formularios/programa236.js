/*

Se dispone de un arreglo con las calorias de
distintas frutas:

const frutas = [
    { nombre: "manzana", calorias: 52 },
    { nombre: "banana", calorias: 89 },
    { nombre: "naranja", calorias: 47 },
    { nombre: "uva", calorias: 67 },
    { nombre: "kiwi", calorias: 61 },
    { nombre: "pera", calorias: 57 },
    { nombre: "mango", calorias: 99 },
    { nombre: "piña", calorias: 50 },
    { nombre: "sandia", calorias: 30 },
    { nombre: "melon", calorias: 34 }
]

Crear un formulario con dos controles de tipo radio para
permitir seleccionar las frutas con alta calorias(>=50) o
bajas calorias(<50)
Al presionar un boton mostrar las frutas que pertenecen 
a dicha categoria

*/

const frutas = [
    { nombre: "manzana", calorias: 52 },
    { nombre: "banana", calorias: 89 },
    { nombre: "naranja", calorias: 47 },
    { nombre: "uva", calorias: 67 },
    { nombre: "kiwi", calorias: 61 },
    { nombre: "pera", calorias: 57 },
    { nombre: "mango", calorias: 99 },
    { nombre: "piña", calorias: 50 },
    { nombre: "sandia", calorias: 30 },
    { nombre: "melon", calorias: 34 }
]

function listarFrutaCalorias(buscar) {
    for (let fruta of frutas) {
        if (fruta.nombre.includes(buscar)) {
            document.querySelector("#resultado").textContent = `Las calorias de la fruta ${fruta.nombre} es ${fruta.calorias}`
        }
    }
}


for (let fruta of frutas) {
    document.querySelector("#parrafo").innerHTML += fruta.nombre + " - "
}

document.querySelector("#calorias").addEventListener("click", () => {
    //listarFrutaCalorias(document.querySelector("#fruta").value)
})