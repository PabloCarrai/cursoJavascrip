/*  const cordoba = document.querySelector("#cordoba")
//en el html tengo que hacer data-propiedad para definir
//y en el js es dataset.propiedad
//llamo la propiedad con dataset.propiedad
const posicion = `Latitud: ${cordoba.dataset.latitud} - Longitud: ${cordoba.dataset.longitud}`
document.querySelector("#resultado").textContent = posicion
// para personalizar atributos propios se le agrega el data-nombreatributo

*/

/* 


Se tiene una lista con dos atributos no estandar
que almacenan la descripcion del producto y su precio. 
Al presionar un boton mostrar los articulos y sus precios
debajo del boton
*/
document.querySelector("#mostrarprecio").addEventListener("click", () => {
    const elementos = document.querySelectorAll("li")
    for (let dato of elementos) {
        document.querySelector("#resultado").innerHTML += `Procesador: ${dato.dataset.procesador} Precio: ${dato.dataset.precio} - <br> `
    }
})