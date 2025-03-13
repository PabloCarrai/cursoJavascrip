document.querySelector("body").addEventListener("keydown", (evento) => {
    if (evento.ctrlKey && evento.altKey && evento.key.toUpperCase() == "H") {
        alert("En que puedo ayudarlo?")
    }
})