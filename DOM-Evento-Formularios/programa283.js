/*

Disponer un input de tipo range que
permita fijar el tamaño de la fuente de un parrafo de ejemplo
Utilizar primero la captura del evento change y luego del
evento input
*/


const tfuente = document.querySelector("#tamanofuente")
const texto = document.querySelector("#resultado")

tfuente.addEventListener("input", () => {
    texto.style.fontSize = `${tfuente}px`
})


