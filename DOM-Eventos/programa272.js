document.querySelector("#binario").addEventListener("keydown", (evento) => {
    if (evento.key == "Backspace" || evento.key == "ArrowLeft" || evento.key == "ArrowRight") {
        return 
    }
    if (evento.key != "0" && evento.key != "1") {
        evento.preventDefault()
    }
})