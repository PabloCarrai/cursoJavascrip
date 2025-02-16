/* 

Se tiene una lista desordenada con 3
valores numericos cualquiera. 
Inmediatamente se carga la pagina, proceder a recuperar
los tres contenidos de los list item(li) y verificar cual es
el mayor d elos mismos. 
Tener en cuenta que la propiedad textContent siempre 
retorna un string
*/

let lista = []
for (let x = 1; x <= 3; x++) {
    lista.push(parseInt(document.querySelector(`#item${x}`).textContent))
}

document.querySelector("#mayor").textContent = Math.max(...lista)