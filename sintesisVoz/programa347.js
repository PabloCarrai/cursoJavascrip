document.querySelector("#boton1").addEventListener("click", () => {
    const mensaje = new SpeechSynthesisUtterance()
    mensaje.text = "Hola Mundo"
    speechSynthesis.speak(mensaje)
})