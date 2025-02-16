/*

Se tiene un unsorted list(ul) con 4
elementos de tipo list item(li) cuyo contenidos son los 
valores del 1 al 4.
Agregar el valor en castellano segudo al numero
1 (uno)
2 (dos)
3 (tres)
4 (cuatro)
Intentar resolverlo utilizando una estructura repetitiva

*/
const lista = ["1 (uno)", "2 (dos)", "3 (tres)", "4 (cuatro)"]
for (let x = 1; x <= lista.length; x++) {
    document.querySelector(`#item${x}`).innerHTML = lista[x - 1]
}