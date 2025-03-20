
function generarNumero() {

    const numero = Math.floor(Math.random() * 100)
    return numero
}

function ocultarMostrarNumero(tarea) {
    const numero = document.querySelector("#numero")
    if (tarea == "ocultar") {
        alert("oculto")
        numero.style.visibility = "hidden"
    }
    if (tarea == "mostrar") {
        alert("visible")
        numero.style.visibility = "visible"

    }
}

function nuevoNumero() {
    document.querySelector("#numero").textContent = generarNumero()
}

function adivinamos() {
    if (document.querySelector("#numero").textContent == document.querySelector("#intento").value) {
        alert("acertaste")
    }else{alert("Perdiste")}
}


//asignamos un numero
nuevoNumero()
// a los 3 segundo ocultamos el texto
setTimeout(() => {
    ocultarMostrarNumero("ocultar")
}, 3000)


//console.log(document.querySelector("#numero").textContent)
//console.log(document.querySelector("#intento").value)

document.querySelector("#confirmar").addEventListener("click", () => {
    adivinamos()    
})
