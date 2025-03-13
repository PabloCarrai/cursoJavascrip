
/*

primer forma

function mostrarMensaje(mensaje) {
    document.querySelector("#mensaje").textContent = mensaje
}

*/

/*

Segunda forma 

document.querySelector("#boton1").onclick = () => {
    document.querySelector("#mensaje").textContent = "Se presiono el boton 1"
}

*/

document.querySelector("#boton1").addEventListener("click", () => {
    document.querySelector("#mensaje").textContent = "Se presiono el boton 1"
})