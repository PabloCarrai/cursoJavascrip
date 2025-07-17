/*

Crear un modulo que exporte por defecto un arreglo con 
los nombres de todos los paises de America. 
La pagina debe mostrar un control select y cargar en 
forma dinamica todos los nombres de los pasises(crear los
archivos index.html index.js paises.js)


*/

import paisesAmerica from "./paises.js";

document.querySelector("#paises").innerHTML = paisesAmerica.map(pais => `<option value="${pais}">${pais}</option>
`).join("")