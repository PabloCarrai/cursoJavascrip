document.querySelector("#boton1").addEventListener("click", () => {
    const menu = document.querySelector("#menuopciones")
    menu.className = ""
    menu.classList.add("menu", "menu-izquierda")
})

document.querySelector("#boton2").addEventListener("click", () => {
    const menu = document.querySelector("#menuopciones")
    menu.className = ""
    menu.classList.add("menu", "menu-derecha")
})

document.querySelector("#boton3").addEventListener("click", () => {
    const menu = document.querySelector("#menuopciones")
    menu.className = ""
    menu.classList.add("menu", "menu-espaciado")
})