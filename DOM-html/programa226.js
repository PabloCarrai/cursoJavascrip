/*

Se tiene almacenado en un arreglo 4
chistes. 

const chistes = [
    "Conoci a mi novia en un ascensor. Dice que soy el amor de subida",
    "como se llama un boomerang que no vuelve? palo",
    "El otro dia vendi mi aspiradora. Lo unico que hacia era acumular polvo",
    "Iba a contar un chiste sodio, pero Na"]

1- Mostrar en un parrafo alguno de los 4 chistes en 
forma aleatoria al cargar la pagina.

2- Modificar luego el programa para que remplace los
puntos de las oraciones de los chistes por el elemento <br>

*/

function mostrarChisteAleatorio(lista) {
    const aleatorio = Math.floor(Math.random() * lista.length)
    document.querySelector("#chiste").innerHTML = lista[aleatorio].replace(".", "<br>")
}

const chistes = [
    "Conoci a mi novia en un ascensor. Dice que soy el amor de subida",
    "como se llama un boomerang que no vuelve? palo",
    "El otro dia vendi mi aspiradora. Lo unico que hacia era acumular polvo",
    "Iba a contar un chiste sodio, pero Na"]

mostrarChisteAleatorio(chistes)
