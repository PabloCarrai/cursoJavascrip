/*

const promesa1 = fetch("https://www.scratchya.com.ar/cursojs/recuperararticuloslento.php")
const promesa2 = promesa1.then(respuesta => {
    console.log("luego de 3 segundos")
    return respuesta.json()
})
promesa2.then(articulos => {
    console.log(articulos)
})

*/

// se puede hacer mas facil

fetch("https://www.scratchya.com.ar/cursojs/recuperararticuloslento.php")
    .then(respuesta => respuesta.json())
    .then(articulos => mostrar(articulos)
    )

function mostrar(articulos) {
    const arreglo = articulos.map(articulo => `<li>${articulo.codigo}
                                            ${articulo.descripcion}
                                            ${articulo.precio}</li>`)
    document.querySelector("#listaarticulos").innerHTML = arreglo.join("")
}