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

function obtenerMinimo(lista) {
    return Math.min(...lista)
}

let valores = []
for (let x = 1; x <= 10; x++) {
    valores.push(x)
}



while (valores.length > 0) {
    console.log(valores)
    let valorAeliminar = parseInt(prompt("Ingrese un numero"))
    let indice = valores.filter((valor)=>{return valor!==valorAeliminar})
    console.log(indice)
    console.log(valores)
}
