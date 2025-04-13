setInterval(() => {
    window.location.reload();
}, 8000)


fetch("https://www.scratchya.com.ar/cursojs/chistealazar.php")
    .then(respuesta => respuesta.json())
    .then(chistes => imprimir(chistes)
    )

function imprimir(chistes) {
    document.querySelector("#chiste").innerHTML = chistes.descripcion
}
