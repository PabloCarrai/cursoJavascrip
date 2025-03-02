/*

Mostrar una imagen y mediante 3 botones permitir
aumentar o reducir el valor de la propiedad border-radius de
su estilo
*/

// obtengo referencia de la foto
const foto1 = document.querySelector("#foto1")

document.querySelector("#reducir").addEventListener("click", () => {
    // obtengo el radio actual y lo guardo
    let radio = parseInt(foto1.style.borderRadius)
    if (radio > 0) {
        radio -= 5
        foto1.style.borderRadius = radio + "%"
    }
})
document.querySelector("#aumentar").addEventListener("click", () => {
    // obtengo el radio actual y lo guardo
    let radio = parseInt(foto1.style.borderRadius)
    if (radio < 50) {
        radio += 5
        foto1.style.borderRadius = radio + "%"
    }
})