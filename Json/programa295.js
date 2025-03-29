/* 

Ingresar el nombre de usuario y clave, crear un objeto 
con dichos valores. 
Al presionar un boton mostrar en un parrafo el objeto
convertido a formato JSON
*/
function procesarDatos() {
    const usuario = new Object()
    const nombre = document.querySelector("#usuario")
    const clave = document.querySelector("#clave")
    usuario.nombre = nombre.value
    usuario.clave = clave.value
    return usuario
}



document.querySelector("#corroborar").addEventListener("click", () => {
    //procesarDatos()
    const usuario = JSON.stringify(procesarDatos())
    document.querySelector("#resultado").innerHTML = usuario
})