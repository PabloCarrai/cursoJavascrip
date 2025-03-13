document.querySelector("#boton1").addEventListener("click", () => {
    const lista = document.querySelectorAll("#frases li")
    lista.forEach(frase => {
        if (frase.textContent.includes("guerra")) {
            frase.remove()
        }
    })
})
