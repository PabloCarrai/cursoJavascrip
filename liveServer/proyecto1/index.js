import { chistes, autores } from "./chistes.js";



function mostrar() {
    document.querySelector("#chiste").textContent = chistes.alAzar()
    document.querySelector("#autores").textContent = autores.join("-")
    document.querySelector("#cantidad").textContent = "Cantidad de chistes " + chistes.cantidad()

}

setInterval(() => {
    mostrar()

}, 3000);