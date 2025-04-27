const formulario1 = document.querySelector("#formulario1")
formulario1.addEventListener("submit", evento => {
    evento.preventDefault()
    const datosFormulario = new FormData(formulario1)
    fetch("https://www.scratchya.com.ar/cursojs/registrarusuario.php", {
        method: "POST",
        body: datosFormulario
    })
        .then(respuesta => respuesta.json())
        .then(usuario => {
            document.querySelector("#resultado").innerHTML = `
            Se registraron los datos en el servidor.<br>
            Nombre del usuario: ${usuario.nombre}.<br>
            Clave: ${usuario.clave}
        `
        })
})