async function recuperarChiste() {
    try {
        const respuesta = await fetch("https://www.scratchya.com.ar/cursojs/chistealazar.php")
        const chiste = await respuesta.json()
        imprimir(chiste)
    } catch (error) {
        console.log(error)
    }
}


function imprimir(chistes) {
    document.querySelector("#chiste").innerHTML = chistes.descripcion
}


recuperarChiste()
setInterval(() => recuperarChiste(), 5000)