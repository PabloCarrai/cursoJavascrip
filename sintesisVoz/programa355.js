function hablar(texto) {
  return new Promise((resolver, rechazar) => {
    const mensaje = new SpeechSynthesisUtterance()
    mensaje.text = texto
    mensaje.lang = "es-AR"
    speechSynthesis.speak(mensaje)
    mensaje.addEventListener("end", () => {
      resolver("Ok")
    })
    mensaje.addEventListener("error", () => {
      rechazar("No se pudo reproducir")
    })
  })
}

function escuchar() {
  return new Promise((resolver, rechazar) => {
    const reconocimiento = new webkitSpeechRecognition()
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
  const adivina = Math.floor(Math.random() * 100) + 1
  console.log(adivina)
  await hablar("Adivina un numero comprendido entre 1 y 100")
  let numero
  do {
    numero = parseInt(await escuchar())
    if (numero > adivina) {
      await hablar("Yo pense un numero mas pequeño")
    } else {
      if (numero < adivina) {
        await hablar("Yo pense un numero mas grande")
      } else {
        await hablar("Muy bien adivinaste. El numero que pense es el " + adivina)
      }
    }
  } while (adivina != numero)
}
