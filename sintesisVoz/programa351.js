const oracion = document.querySelector("#oracion")
const estado = document.querySelector("#estado")

document.querySelector("#iniciar").addEventListener("click", () => {
    const mensaje = new SpeechSynthesisUtterance()
    mensaje.text = oracion.value
    mensaje.rate = 0.5
    mensaje.lang = "es"
    speechSynthesis.speak(mensaje)

    mensaje.addEventListener("start", () => {
        estado.textContent = "start"
    })

    mensaje.addEventListener("end", () => {
        estado.textContent = "end"
    })

    mensaje.addEventListener("pause", () => {
        estado.textContent = "pause"
    })

    mensaje.addEventListener("cancel", () => {
        estado.textContent = "cancel"
    })

    mensaje.addEventListener("resume", () => {
        estado.textContent = "resume"
    })

})

document.querySelector("#pausar").addEventListener("click", () => {
    speechSynthesis.pause()
})

document.querySelector("#continuar").addEventListener("click", () => {
    speechSynthesis.resume()
})

document.querySelector("#cancelar").addEventListener("click", () => {
    speechSynthesis.cancel()
})