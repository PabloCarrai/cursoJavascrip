document.querySelector("#boton1").addEventListener("click", () => {
    const mensaje = new SpeechSynthesisUtterance()
    mensaje.text = "Dicte un numero en castellano"
    mensaje.lang = "es-AR"
    speechSynthesis.speak(mensaje)
    mensaje.addEventListener("end", () => {
        const reconocimiento = new webkitSpeedRecognition()
        reconocimiento.lang = "es-AR"
        reconocimiento.start()
        reconocimiento.addEventListener("results", evento => {
            const mensaje = new SpeechSynthesisUtterance()
            mensaje.lang = "en-US"
            mensaje.text = evento.results[0][0].transcript
            speechSynthesis.speak(mensaje)
        })
    })
})