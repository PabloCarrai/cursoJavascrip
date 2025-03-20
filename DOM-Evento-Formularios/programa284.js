// Esta funcion hacer el redireccionamiento al sitio en cuestion
const tiempo = setTimeout(() => {
    window.location.href = "https://terli.wordpress.com"
}, 3000)

// Esta permite cancelar esa redireccion
document.querySelector("#cancelar").addEventListener("click", () => {
    // aca esta la funcion que la aborta
    clearTimeout(tiempo)
    //alert("Cancelada la redireccion")
})