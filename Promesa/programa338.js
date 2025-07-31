



//https://scratchya.com.ar/cursojs/recuperartemperatura.php




const temperatura = document.querySelector("#temperatura")
const provincia = document.querySelector("#provincia")


document.querySelector("#buscar").addEventListener("click", () => {
    retornarTemperatura(provincia.value)
        .then(prov => temperatura.textContent = "Temperatura: " + prov.temperatura)
        .catch(error => temperatura.textContent = error)
})

function retornarTemperatura(provincia) {
    return new Promise((resolver, rechazar) => {
        fetch("https://scratchya.com.ar/cursojs/recuperartemperatura.php?provincia=" + provincia)
            .then(respuesta => respuesta.json())
            .then(provincia => resolver(provincia))
            .catch(error => rechazar("No existe la provincia"))

    })
}