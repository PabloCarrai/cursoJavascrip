document.querySelector("#boton1").addEventListener("click", () => {
    const mensaje = new SpeechSynthesisUtterance()
    mensaje.text = "1 2 3 4 5"
    mensaje.volume = 0.8
    mensaje.rate = 0.6
    mensaje.pitch = 0.8
    mensaje.lang = "es-ES"
    speechSynthesis.speak(mensaje)

})