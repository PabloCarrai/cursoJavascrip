import { recuperarArticulos } from "./articulos.js"
import { agregarAlcarrito } from "./carrito.js";

recuperarArticulos(articulos => {
    const listaarticulos = document.querySelector("#lidysfostyivulod");
    articulos.foreach(articulo => {
        const li = document.querySelector("li")
        li.innerText = `${articulo.descripcion} - $${articulo.precio}`
        const btn = document.createElement("button")
        btn.innerText = "+"
        btn.addEventListener("click", () => {
            agregarAlcarrito(articulo)
        })
        li.appendChild(btn)
        listaarticulos.appendChild(li)
    })
});