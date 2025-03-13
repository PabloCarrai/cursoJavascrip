/* 


Se tiene un arreglo con objetos que representa
usuarios. Se almacena el nombre de usuarios y sus estados, que
puede ser activo o desactivo




const usuarios = [
    { nombre: "Jennys", estado: true },
    { nombre: "MaxPower", estado: false },
    { nombre: "TheGreatGatby", estado: true },
    { nombre: "Pixel", estado: true },
    { nombre: "AgentSmith", estado: false },
    { nombre: "CaptainKirk", estado: true },
    { nombre: "KyttiKat", estado: false },
    { nombre: "IronGiant", estado: false },
    { nombre: "ProfesorX", estado: true },
    { nombre: "LadyLuna", estado: false },
]

Mostrar todos los usuarios en un alista indicando tambien 
si se encuentra activo o no. guardar en un atributo no
estandar su estado. 

Al presionar un boton borrar de la lista los usuarios no
activos, consultnado el atributo no estandar

*/

const usuarios = [
    { nombre: "Jennys", estado: true },
    { nombre: "MaxPower", estado: false },
    { nombre: "TheGreatGatby", estado: true },
    { nombre: "Pixel", estado: true },
    { nombre: "AgentSmith", estado: false },
    { nombre: "CaptainKirk", estado: true },
    { nombre: "KyttiKat", estado: false },
    { nombre: "IronGiant", estado: false },
    { nombre: "ProfesorX", estado: true },
    { nombre: "LadyLuna", estado: false },
]

document.querySelector("#listausuarios").innerHTML =
    usuarios.map(usuario => `<li data-estado=${usuario.estado ? 'Activo' : 'Desactivo'}> ${usuario.nombre} - ${usuario.estado ? 'Activo' : 'Desactivo'}</li>`).join("")

document.querySelector("#borrar").addEventListener("click", () => {
    const lista = document.querySelectorAll("#listausuarios li")
    lista.forEach(li => {
        if (li.dataset.estado == "Desactivo") {
            li.remove()
        }
    });
})