const cadena = `[{ "nombre": "China", "habitantes": 1393 },
{ "nombre": "India", "habitantes": 1366 },
{ "nombre": "Estados Unidos", "habitantes": 329 },
{ "nombre": "Indonesia", "habitantes": 270 },
{ "nombre": "Brasil", "habitantes": 212 }
]`

const paises = JSON.parse(cadena)
const lista = paises.map(pais => `<li>${pais.nombre} - ${pais.habitantes}</li>`)
setTimeout(() => {
    document.querySelector("#listapaises").innerHTML = lista.join("")
},2000)