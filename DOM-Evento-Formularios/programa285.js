
function generarNumero(valor = 10) {
    const numero = Math.floor(Math.random() * valor)
    return numero
}

function ocultarMostrarNumero(tarea) {
    const numero = document.querySelector("#numero")
    if (tarea == "ocultar") {
        numero.style.visibility = "hidden"
    }
    if (tarea == "mostrar") {
        numero.style.visibility = "visible"

    }
}

function nuevoNumero(valor) {
    document.querySelector("#numero").textContent = generarNumero(valor)
}

function adivinamos() {
    if (document.querySelector("#numero").textContent == document.querySelector("#intento").value) {
        alert("acertaste")
        jugamos(101)
    } else {
        alert("Perdiste")
    }
}

function jugamos(valor) {
    ocultarMostrarNumero("mostrar")
    //asignamos un numero
    nuevoNumero(valor)
    // a los 3 segundo ocultamos el texto
    setTimeout(() => {
        ocultarMostrarNumero("ocultar")
    }, 3000)
}

jugamos()

document.querySelector("#confirmar").addEventListener("click", () => {
    adivinamos()
})
