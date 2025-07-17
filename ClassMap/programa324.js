/*Como crear un mapa */
const frutas = new Map()
// Agregar clave/valor al mapa
frutas.set("manzana", "🍎")
frutas.set("naranja", "🍊")
frutas.set("banana", "🍌")
frutas.set("fresa", "🍓")
frutas.set("melón", "🍈")
frutas.set("uva", "🍇")
frutas.set("anana", "🍍")
frutas.set("sandía", "🍉")
frutas.set("limón", "🍋")
frutas.set("cereza", "🍒")
frutas.set("kiwi", "🥝")
console.log(frutas)
//las claves tienen que ser distintas
frutas.set("uva", "Imagen de uva")
//al repetir la clave se reemplaza el valor
console.log(frutas)
//Averiguar cantidad de elementos
console.log(frutas.size)
//obtener el valor de una clave
console.log(frutas.get("anana"))
console.log(frutas.get("ciruela")) //sino existe devuelve undefined
//verificar existencia de una clave en el map
if (frutas.has("anana")) {
    console.log(frutas.get("anana"))
}
//iterar un map
for (let nombres of frutas.keys()) {
    console.log(nombres)
}
//iterar los valores
for (let imagen of frutas.values()) {
    console.log(imagen)
}
//iterar claves, valores simultaneamente
for (let [nombre, imagen] of frutas.entries()) {
    console.log(nombre, imagen)
}
//usando foreach
frutas.forEach((nombre, imagen) => console.log(nombre, imagen))
//borrar
console.log(frutas.delete("kiwi"))
console.log(frutas.delete("naranjas"))
//eliminar todos los elementos de map
frutas.clear()
console.log(frutas.size)