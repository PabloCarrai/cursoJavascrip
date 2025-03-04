/*



Disponer un titulo con el elemento h1
Mediante 3 botones permitir agregar tres clases distintas.
Un cuarto boton debe eliminar la clase-1
Un quinto boton debe eliminar todas las clases
Un sexto boton debe utiliar el meto toggle con la clase-1
*/

// Tomo la referencia del elemento titulo
const titulo = document.querySelector("#titulo")

document.querySelector("#boton1").addEventListener("click", () => {
    // agrego la clase a dicho elemento
    titulo.classList.add("clase-1")
})

document.querySelector("#boton2").addEventListener("click", () => {
    // agrego la clase a dicho elemento
    titulo.classList.add("clase-2")
})

document.querySelector("#boton3").addEventListener("click", () => {
    // agrego la clase a dicho elemento
    titulo.classList.add("clase-3")
})

document.querySelector("#boton4").addEventListener("click", () => {
    // agrego la clase a dicho elemento
    titulo.classList.remove("clase-1")
})

document.querySelector("#boton5").addEventListener("click", () => {
    // agrego la clase a dicho elemento
    titulo.className = ""
})

document.querySelector("#boton6").addEventListener("click", () => {
    // agrego la clase a dicho elemento
    titulo.classList.toggle("clase-1")
})