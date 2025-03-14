function traerValores() {
    const valor = document.querySelector("#numero").value
    for (let x = 1; x <= valor; x++) {
        document.querySelector("#resultado").textContent += x + " - "
    }
}

document.querySelector("body").addEventListener("keyup", (evento) => {
    document.querySelector("#resultado").textContent = ""
    if (evento.key == "Enter") {
        traerValores()
    }
})