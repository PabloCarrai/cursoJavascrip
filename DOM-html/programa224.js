// El script va luego de la pagina html. Sino no funciona
// elijo el id del elemento a modificar
const parrafo1 = document.querySelector("#parrafo1")
// modifico su contenido
parrafo1.textContent = "Contenido del parrafo 1"

const parrafo2 = document.querySelector("#parrafo2")
// no interpreta etiquetas html
//parrafo2.textContent = "Sarasa <em>parrafo </em>2"
// interHTML si acepta etiquetas html
parrafo2.innerHTML = "Sarasa <em>parrafo </em>2"
