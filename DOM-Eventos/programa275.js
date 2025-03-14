/*


Disponer un control textarea y en la
parte inferior actualizar un parrajo que imprima la cantidad de
caracteres ingresados.
Permitir ingresar solo 50 caracteres. 
*/

function devolverCantidadLetras() {
    const cantidadCaracteres = document.querySelector("#textarea").value
    const tamaño = cantidadCaracteres.length
    document.querySelector("#cantidadcaracteres").textContent = `Cantidad de Caracteres actuales: ${tamaño}`
}


document.querySelector("textarea").addEventListener("keyup", (evento) => {
    if (evento.key == "Enter") {
        devolverCantidadLetras()
    }
})