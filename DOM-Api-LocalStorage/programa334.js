const nombre = document.querySelector("#nombre")
const comentario = document.querySelector("#comentario")

recuperarUsuarios()


document.querySelector("#registrar").addEventListener("click", () => {
    localStorage.setItem(nombre.value, comentario.value)
    nombre.value = ""
    comentario.value = ""
    recuperarUsuarios()
})

function recuperarUsuarios() {
    let usuario = ""
    for (let x = 0; x < localStorage.length; x++) {
        usuario += localStorage.key(x) + "<br>" + localStorage.getItem(localStorage.key(x)) + "<hr>"
    }
    document.querySelector("#visitantes").innerHTML = usuario
}