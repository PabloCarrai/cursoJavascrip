document.querySelector("#formulario1").addEventListener("submit", evento => {
    const nombre = document.querySelector("#nombre")
    const email = document.querySelector("#email")
    if ((nombre.value == "" || email.value == "")) {
        alert("Ingrese datos")
        // evoto que envie los datos 
        evento.preventDefault()
    }
})