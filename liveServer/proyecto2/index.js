import { retornarPaisesInflacion, paisMayorInflacion,ordenarPorInflacion } from "./paisesinflacion.js"

document.querySelector("#paisesinflacion").innerHTML = retornarPaisesInflacion()
document.querySelector("#paismayorinflacion").innerHTML = paisMayorInflacion()
document.querySelector("#ordenporinflacion").innerHTML = ordenarPorInflacion()
