// addevenlistener tiene nombre del evento(click) y una arrow function
document.querySelector("#boton1").addEventListener('click', () => {
    document.querySelector("#mensaje").innerHTML = "presionaste boton1"
})

document.querySelector("#boton2").addEventListener('click', () => {
    document.querySelector("#mensaje").innerHTML = "presionaste boton2"
})