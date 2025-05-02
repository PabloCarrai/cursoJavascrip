function crearLI() {
    const clave = document.querySelector("#clave")
    const ul = document.querySelector("#resultado")
    const li = document.createElement("li")
    li.textContent = clave.value
    ul.appendChild(li)
    clave.value = ""
}

function retornarJSON() {
    const arreglo = [...document.querySelectorAll("#resultado li")]
    const lista = arreglo.map(clave => clave.textContent)
    return JSON.stringify(lista)
}

document.querySelector("#agregar").addEventListener("click", () => {
    crearLI()
})

document.querySelector("#verificar").addEventListener("click", evento => {
    const resultados = document.querySelector("#resultados")
    fetch("https://scratchya.com.ar/cursojs/verificarfortalezaclaves.php", {
        method: "POST",
        body: retornarJSON()
    })
        .then(resultado => resultado.json())
        .then(claves => {
            const lista = claves.map(clave => `<li>La clave:<strong>${clave.clave} </strong> es ${clave.fortaleza}</li>`)
            resultados.innerHTML = lista.join("")
        })
})