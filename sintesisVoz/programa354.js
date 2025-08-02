function hablar(texto) {
    return new Promise((resolver, rechazar) => {
        const mensaje = new SpeechSynthesisUtterance()
        mensaje.text = texto
        mensaje.lang = "es-AR"
        speechSynthesis.speak(mensaje)
        mensaje.addEventListener("end", () => {
            resolver("Ok")
        })
        mensaje.addEventListener(error, () => {
            rechazar("No se pudo reproducir")
        })
    })
}
function escuchar() {
    return new Promise((resolver, rechazar) => {
        const reconocimiento = new WebkitSpeechRecognition()
        reconocimiento.lang = "es-AR"
        reconocimiento.start()
        reconocimiento.addEventListener("result", evento => {
            resolver(evento.results[0][0].transcript)
        })
    })
}
document.querySelector("#boton1").addEventListener("click", () => {
    jugar()
})

async function jugar() {
    const nr1 = Math.floor(Math.random() * 9) + 2
    const nr2 = Math.floor(Math.random() * 9) + 2
    const resultado = nr1 + nr2
    await hablar(`cuanto es ${nr1} + ${nr2}`)
    const escucha = await escuchar()
    const respuestaUsuario = parseInt(escucha)
    if (isNaN(respuestaUsuario)) {
        await hablar("Por favor dicta un numero")
        return
    }
    if (resultado == respuestaUsuario) {
        await hablar("Muy bien el resultado es " + resultado)
    } else {
        await hablar("Es incorrecta tu respuesta. El resultado es " + resultado)
    }
    setTimeout(() => jugar(), 1000)
}