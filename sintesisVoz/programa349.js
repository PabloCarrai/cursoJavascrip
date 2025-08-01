const numero = document.querySelector("#numero")
document.querySelector("#recitar").addEventListener("click", () => {
    const num = parseInt(numero.value)
    let tabla = ""
    for (let x = 1; x <= 10; x++) {
        tabla += `${num} por ${x} es ${num * x}`
    }
    const mensaje = new SpeechSynthesisUtterance()
    mensaje.text = tabla
    mensaje.lang = "es"
    mensaje.rate = 0.8
    speechSynthesis.speak(mensaje)
})