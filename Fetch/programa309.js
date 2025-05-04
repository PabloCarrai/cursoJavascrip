const formulario1 = document.querySelector("#formulario1")
formulario1.addEventListener("submit", evento => {
    evento.preventDefault()
    const datosFormularios = new FormData(formulario1)
    fetch("https://scratchya.com.ar/cursosjs/generartarjeta.php", {
        method: "POST",
        body: datosFormularios
    })
    .then(respuesta=>respuesta.blob())
    .then(blob=>{
        const urlDelObjeto=URL.createObjectURL(blob)
        const img=document.createElement("img")
        img.src=urlDelObjeto
        document.querySelector("#resultado").appendChild(img)
    })
})