/* 

Ingresar una clave y mostrar un mensaje si es
valida o no.
Es valida si tiene entre 6 y 20 caracteres y ademas no se
ingresa una clave que se encuentra entre los mas comunes que
se usan en internet. 
Se dispone un arreglo con las claves mas comunes. 
*/


const claves = ["123456", "password", "123456789", "12345678", "12345", "1234567", "1234567890", "qwerty", "abc123", "password1"]

function enClavesComunes(clave) {
    const claves = ["123456", "password", "123456789", "12345678", "12345", "1234567", "1234567890", "qwerty", "abc123", "password1"]
    return claves.includes(clave)

}

document.querySelector("#verificar").addEventListener("click", () => {
    const clave = document.querySelector("#clave").value
    if (clave.length < 6 || clave.length > 20) {
        document.querySelector("#error").textContent = "cantidad de caracteres no validos"
        return
    }
    if (enClavesComunes(clave)) {
        document.querySelector("#error").textContent = "Clave comun"
        return
    }
    document.querySelector("#error").textContent = "Clave valida"

})