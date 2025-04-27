
const provincias = [
    "Buenos Aires",
    "Catamarca",
    "Chaco",
    "Chubut",
    "Córdoba",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Río Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santa Fe",
    "Santiago del Estero",
    "Tierra del Fuego",
    "Tucumán"
]

const lista = provincias.map(provincia => `<li><a href="https://www.scratchya.com.ar/cursojs/recuperartemperatura.php?provincia=${provincia}">${provincia}</a></li>`)
document.querySelector("#provincias").innerHTML = lista.join("")

const listaenlaces = document.querySelectorAll("#provincias a")
listaenlaces.forEach(enlace => {
    enlace.addEventListener("mouseenter", evento => {
        evento.preventDefault()
        recuperarTemperatura(evento.target.href)
    })
})

function recuperarTemperatura(prov){
    fetch(prov)
    .then(respuesta => respuesta.json())
    .then(provincia => mostrarTemperatura(provincia))
}

function mostrarTemperatura(provincia){
    document.querySelector("#resultado").textContent=`Provincia: ${provincia.provincia} su temperatura es ${provincia.temperatura}` 
}