/*


Crear 10 div con posiciones absolutas 
en la pantalla
Los div deben mostrar los numeros del 1 al 10. 
Cada vez que se haga click sobre un div controlar
sea el valor menor que se presionan en orden los numeros del 1
al 10 y se borran en orden
Mostrar por pantalla que gano si presiona los botones en
orden, caso de equivocarse proceder a mostra run mensaje
que perdio. 
*/

const ancho = window.innerWidth - 50
const alto = window.innerHeight - 50
let proximo = 1
for (let x = 1; x <= 10; x++) {
    const divs = document.createElement("div")
    divs.textContent = x
    divs.classList.add("numero")
    const posx = Math.floor(Math.random() * ancho)
    const posy = Math.floor(Math.random() * alto)
    divs.style.left = posx + "px"
    divs.style.top = posy + "px"
    document.querySelector("#numeros").append(divs)
    divs.addEventListener("click", evento => {
        const valor = parseInt(evento.target.textContent)
        if (valor == proximo) {
            proximo++
            evento.target.remove()
            if(document.querySelector("#numeros").children.length==0){
                alert("Has ganado")
            }
        } else {
            alert("Perdio")
        }
    })
}