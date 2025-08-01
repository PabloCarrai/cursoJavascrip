document.querySelector("#boton1").addEventListener("click", () => {
    recuperarChiste()
})

async function recuperarChiste() {
    try {
        const respuesta = await fetch("https://www.scratchya.com.ar/cursojs(chistealazar.php")
        const chiste = await respuesta.json()
        mostrar(chiste)
    } catch (error) {
        console.log(error)
    }
}

function mostrar(chiste) {
    document.querySelector("#chiste").textContent = chiste.descripcion
    const mensaje = new SpeechSynthesisUtterance()
    mensaje.text = chiste.descripcion
    mensaje.lang = "es"
    speechSynthesis.speak(mensaje)
    mensaje.addEventListener("end", () => {
        setTimeout(() => { recuperarChiste() }, 3000)
    })
}