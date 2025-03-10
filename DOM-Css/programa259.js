/*
    por medio de la notacion de punto
document.querySelector("#texto1").value="Sr."
     por metodo es asi
document.querySelector("#texto1").setAttribute("value", "Sr.") 
*/
document.querySelector("#texto1").setAttribute("value", "Sr.")

/*
    Para consultar dicho atributo se hacia
console.log(document.queriSelector("#enlace1").href
    usando metodos es asi
console.log(document.querySelector("#enlace1").getAttribute("href"))
*/

console.log(document.querySelector("#enlace1").getAttribute("href"))

/*
    Eliminar un atributo solo mediante metodo removeAttribute
document.querySelector("#enlace1").removeAttribute("href")
*/

//document.querySelector("#enlace1").removeAttribute("href")

/*
    Verigicar existencia de un atributo
*/
const enlace1 = document.querySelector("#enlace1")
if (enlace1.hasAttribute("href")) {
    console.log("Tiene atributo href ")
}


/*

Todos los atributos de un elemento se guardan en una coleccion llamada attributes
*/
for (let atributo of enlace1.attributes) {
    console.log(atributo.name, atributo.value)
}

/*
De un listado de enlaces eliminar la propiedad href
*/
// Obtengo referencias de los enlace
const enlaces = document.querySelectorAll("a")
// los elimono
enlaces.forEach(elemento => elemento.removeAttribute("href"))