/* 

Mostrar un mensaje publicitario donde 
aparescan las letras fn rorma lenta en pantalla. 
Cuando ya se haya mostrado el mensaje en forma completa,
esperar 3 segundos, borrar la pantalla y volver a mostrar el mensaje. 
*/

function mostrarAnuncio() {
    const texto = anuncio.slice(0, cantidad)
    mensaje.textContent = texto
    if (cantidad > anuncio.length) {
        clearInterval(tiempo)
        setTimeout(() => {
            mensaje.textContent = ""
            cantidad = 1
            tiempo = setInterval(() => {
                mostrarAnuncio()
            }, 100)
        }, 3000)
    }
    cantidad++
}

const anuncio = "Aprovecha nuestra ofertas en laptops Xiaomi"
const mensaje = document.querySelector("#mensaje")
let cantidad = 1

let tiempo = setInterval(() => {
    mostrarAnuncio()
    cantidad++
}, 100)