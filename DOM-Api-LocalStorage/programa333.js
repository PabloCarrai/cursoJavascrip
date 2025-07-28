const nombre = document.querySelector("#nombre")
const telefono = document.querySelector("#telefono")
const email = document.querySelector("#email")
const direccion = document.querySelector("#direccion")

document.querySelector("#guardar").addEventListener("click", () => {
    const contacto = {
        telefono: telefono.value,
        email: email.value,
        direccion: direccion.value
    }
    localStorage.setItem(nombre.value, JSON.stringify(contacto))
    nombre.value = ""
    telefono.value = ""
    email.value = ""
    direccion.value = ""
    alert("Datos guardados")
})

document.querySelector("#recuperar").addEventListener("click", () => {
    const contenido = localStorage.getItem(nombre.value,)
    if (contenido != null) {
        const contacto = JSON.parse(contenido)
        telefono.value = contacto.telefono
        email.value = contacto.email
        direccion.value = contacto.direccion
    } else {
        alert("No existe dicho nombre")
        nombre.value = ""
        telefono.value = ""
        email.value = ""
        direccion.value = ""
    }
})