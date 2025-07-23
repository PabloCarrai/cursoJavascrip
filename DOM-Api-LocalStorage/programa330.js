/*
//creacion de un localstorage
localStorage.setItem("actividades", "correr, estudiar y almorzar")
localStorage.setItem("nombre", "Diego")
//recuperar claves de un localstorage
const actividades = localStorage.getItem("actividades")
if (actividades != null) {
    document.writeln(actividades)
}
*/

const email = document.querySelector("#mail")
document.querySelector("#confirmar").addEventListener("click", () => {
    localStorage.setItem("mail", email.value)

})

const actual = localStorage.getItem("email")
if (actual != null) {
    email.value = actual
}