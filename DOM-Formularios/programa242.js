/*




Confeccionar un formulario que permita
ingresar un comentario en un textarea.
Al presionar un boton mostrar un mensaje si el usuario ha
ingresado alguna palabra censurada.
Las palabras censuradas se encuentran almacenadas en un 
arreglo

const palabrasCensuradas = ["inutil", "tonto", "bobo"]


*/

function revisarOracion(oracion, palabrasCensuradas) {
    for (let palabra of palabrasCensuradas) {
        console.log(palabra)
        console.log(oracion)
        console.log(oracion.includes(palabra)) //{
        //document.querySelector("#resultado").innerHTML = "Hay palabras ofensivas en los comentarios. Por favor modifique sus comentarios"
        //}
    }
}


const palabrasCensuradas = ["inutil", "tonto", "bobo"]


document.querySelector("#confirmar").addEventListener("click", () => {
    const oracion = document.querySelector("#comentarios").value
    revisarOracion(oracion, palabrasCensuradas)
})