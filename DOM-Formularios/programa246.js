/*

Iniciar una paguina html con un div vacion y un 
boton.
Crear en forma dinamica 10 elementos input de tipo 
number.
Al presionar el boton, sumar el contenido de los 10 input
*/

let html = ""
for (let i = 1; i <= 10; i++) {
    html += `<div><input type="number"></div>`

}
document.querySelector("#entradas").innerHTML = html

document.querySelector("#sumar").addEventListener("click", () => {
    const lista = document.querySelectorAll("#entradas input")
    let suma = 0
    lista.forEach(elemento => suma += parseInt(elemento.value))
    document.querySelector("#resultado").textContent = `La suma da ${suma}`
})