function retornarArticulos() {
    return new Promise((resolver, rechazar) => {
        fetch("https://www.scratchya.com.ar/cursojs/recuperararticuloslento.php")
            .then(respuesta => respuesta.json())
            .then(articulos => resolver(articulos))
            .catch(error => rechazar("Problemas con la recuperacion de datos"))
    })
}

function esperaMaxima(tiempo) {
    return new Promise((resolver, rechazar) => {
        setTimeout(() => rechazar("Servidor fuera de servicio"), tiempo)
    })
}

const promesaArticulos = retornarArticulos()
const promesaMaxima = esperaMaxima(2000)

Promise.race([promesaArticulos, promesaMaxima])
    .then(articulos => console.log(articulos))
    .catch(error => console.log(error))