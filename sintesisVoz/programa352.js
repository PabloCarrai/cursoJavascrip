document.querySelector("#boton1").addEventListener("click", () => {
    const reconocimiento = new webkitSpeechRecognition()
    reconocimiento.lang = "es-AR"
    reconocimiento.continous = true
    reconocimiento.interimResults = true
    reconocimiento.start()
    reconocimiento.addEventListener("result", evento => {
        document.querySelector("#resultado").textContent = evento.results[0][0].transcript
        console.log(evento.results)
    })
})