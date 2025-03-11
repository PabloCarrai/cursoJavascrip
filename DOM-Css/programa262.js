/*


Se dispone de una lista de 
actividades. 
Cada actividad tiene un atributo no estandar llamado
data-estado donde puede almacenar el valor compoektado o 
pendiente
Al presionar un boton mostrar la cantidad de actividades
completadas consultando el atributo no estandar en un alert

    <ul id="actividades">
        <li data-estado="completada">Correr</li>
        <li data-estado="completada">Desayunar</li>
        <li data-estado="completada">Reunion de trabajo</li>
        <li data-estado="pendiente">Almorzar</li>
        <li data-estado="pendiente">Cenar</li>
    </ul>
    <input type="button" id="boton1" value="Cantidad de tareas completadas">

Resolver utilizando:
1- For of de la clase NodeList
2- El foreach de la clase NodeList
3- reduce de la clase array
*/


function primerForma(resultados) {
    contadorCompletadas = 0
    for (let elemento of resultados) {
        if (elemento.dataset.estado == "completada") {
            contadorCompletadas++
        }
    }
    const cantidadCompletada = `Cantidad de tareas completadas ${contadorCompletadas}`
    alert(cantidadCompletada)
}

function segundaForma(resultados) {
    let contadorCompletadas = 0
    resultados.forEach(elemento => {
        if (elemento.dataset.estado == "completada") {
            contadorCompletadas++
        }

    });
    const cantidadCompletada = `Cantidad de tareas completadas ${contadorCompletadas}`
    alert(cantidadCompletada)
}

function tercerforma(resultados) {
    const cant = resultados.reduce((contador, resultado) => resultado.dataset.estado == "completada" ? contador + 1 : contador, 0)
    alert(cant)
}

document.querySelector("#boton1").addEventListener("click", () => {
    let resultados = [...document.querySelectorAll("#actividades li")]
    //primerForma(resultados)
    //segundaForma(resultados)
    tercerforma(resultados)
})


