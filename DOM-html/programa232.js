/*
Mostrar una frase celebre en un 
parrafo. 
Disponer un elemento input que permita ingresar un texto. 
Cuando se presiona un boton mostrar en un parrafo si la
palabra ingresada se encuentra contenida en la frase. 
*/




document.querySelector("#boton1").addEventListener("click", () => {
    const prueba = document.querySelector("#editor1").value
    console.log(prueba)
})

