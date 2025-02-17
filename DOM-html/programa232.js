/*
Mostrar una frase celebre en un 
parrafo. 
Disponer un elemento input que permita ingresar un texto. 
Cuando se presiona un boton mostrar en un parrafo si la
palabra ingresada se encuentra contenida en la frase. 
*/


function averiguarPalabra() {
    // esto se usa en imput, por eso el value
    const texto = document.querySelector("#editor1").value
    const frase = document.querySelector('#frase').textContent
    if (frase.toLocaleLowerCase().includes(texto.toLocaleLowerCase())) {
        document.querySelector("#resultado").innerHTML = `La palabra <b> ${texto} </b> se encuentra en la frase`
    } else {
        document.querySelector("#resultado").innerHTML = `La palabra <b> ${texto} </b> no se encuentra en la frase`
    }
}

document.querySelector("#boton1").addEventListener("click", () => {
    averiguarPalabra()
})