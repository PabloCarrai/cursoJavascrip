const nombre = document.querySelector("#nombre")
const correo = document.querySelector("#email")
const clave = document.querySelector("#clave")
// esta referencia es en donde agrego la linea con los datos
const usuarios = document.querySelector("#usuarios")
document.querySelector("#confirmar").addEventListener("click", () => {
    //creo una fila en la tabla tr
    const fila = document.createElement("tr")
    //agrego 3 celdas td
    fila.innerHTML = `<td>${nombre.value}</td><td>${correo.value}</td><td>${clave.value}</td>`
    usuarios.append(fila)
})