/*


Se tiene una lista con 4 actividades
Algunas estan pendientes y otras completadas
Se las diferencia mediante 2 clases:

    <ul class="tareas">
        <li class="pendiente">Reunion de trabajo</li>
        <li class="completada">Hacer ejercicio</li>
        <li class="pendiente">Ir al banco</li>
        <li class="completada">Enviar correo electronico</li>
    </ul>

Cuando se presiona un boton pasar a mostrar en un parrafo
las tareas pendientes. 

*/

document.querySelector("#mostrar").addEventListener("click", () => {
    const pendientes = document.querySelectorAll(".pendiente")
    let tareas = ""
    pendientes.forEach(tarea => tareas += tarea.textContent + "<br>")
    document.querySelector("#resultado").innerHTML = tareas
})