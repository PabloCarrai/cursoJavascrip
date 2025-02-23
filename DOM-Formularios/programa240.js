/* 



Mostrar en un control select una serie de 
emojis.
Pedir al usuario que escriba en castellano que palabra
representa. 
AL precionar un boton informar si el dato ingresado es
correcto o no
*/

function compararResultado(v1, v2) {
    if (v1 === v2) {
        document.querySelector("#resultado").innerHTML = `Acertaste el emoji es ${v1} y la palabra es ${v2}`
    }else {
        document.querySelector("#resultado").innerHTML = `Pifiaste el emoji es ${v1} y la palabra es ${v2}`        
    }
}

document.querySelector("#verificar").addEventListener("click", () => {
    const emojiElegido = document.querySelector("#emojis").value
    const palabraElegida = document.querySelector("#respuesta").value
    compararResultado(emojiElegido, palabraElegida)
})


