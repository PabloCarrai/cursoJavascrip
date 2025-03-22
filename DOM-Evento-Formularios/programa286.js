let contador = 10
setInterval(() => {
    contador--
    document.querySelector("#temporizador").textContent = contador
    if (contador == 0) {
        window.location.href = "https://terli.wordpress.com"
    }
}, 1000)