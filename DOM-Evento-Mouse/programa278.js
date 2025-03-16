const cantidad = document.querySelector("#cantidad")
for (let i = 0; i < 20; i++) {
    const img = document.createElement("img")
    img.classList.add("cucaracha")
    const ancho = window.innerWidth - 80
    const alto = window.innerHeight - 80
    const posx = Math.floor(Math.random() * ancho)
    const posy = Math.floor(Math.random() * alto)
    img.style.left = posx + "px"
    img.style.top = posy + "px"
    img.src = "imagenes/cucaracha.png"
    const grados = Math.floor(Math.random() * 360)
    img.style.transform = `rotate(${grados}deg)`
    document.body.append(img)
    img.addEventListener("click", evento => {
        evento.target.remove()
        const actual = parseInt(cantidad.textContent) + 1
        cantidad.textContent = actual
    })
}