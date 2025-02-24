/*




Confeccionar un formulario que permita
ingresar un comentario en un textarea.
Al presionar un boton mostrar un mensaje si el usuario ha
ingresado alguna palabra censurada.
Las palabras censuradas se encuentran almacenadas en un 
arreglo

const palabrasCensuradas = ["inutil", "tonto", "bobo"]


*/

const palabrasCensuradas = ["inutil", "tonto", "bobo"]

function revisarOracion(oracion, palabrasCensuradas) {
    document.querySelector("#resultado").textContent = " Gracias "
    const palabrasIndividuales = oracion.split(" ")
    for (let palabra of palabrasCensuradas) {
        for (let palabrasind of palabrasIndividuales) {
            if (palabra == palabrasind) {
                document.querySelector("#resultado").textContent = "Hay palabras ofensivas en los comentarios. Por favor modifique sus comentarios"
            }
        }
    }
}

document.querySelector("#confirmar").addEventListener("click", () => {
    const oracion = document.querySelector("#comentarios").value
    revisarOracion(oracion, palabrasCensuradas)
})