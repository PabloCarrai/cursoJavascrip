document.querySelector("#formulario").addEventListener("submit", evento => {
    const signo = document.querySelector("#signo")
    if ((signo.value == "")) {
        alert("Ingrese datos")
        // evoto que envie los datos 
        evento.preventDefault()
    }
})