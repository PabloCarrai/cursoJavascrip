//Usamos su constructor
const conjunto1 = new Set()
conjunto1.add(3)
conjunto1.add(6)
conjunto1.add(7)
conjunto1.add(3)//no se añade ya que existe
console.log(conjunto1)
//otra forma
const conjunto2 = new Set([3, 6, 7, 3]) // el ultimo 3 no va por repetirse
console.log(conjunto2)
//Otra forma
const conjunto3 = new Set("hola mundos")
console.log(conjunto3)
//propiedad size(cantidad elementos)
const conjunto4 = new Set()
conjunto4.add(3)
conjunto4.add(7)
conjunto4.add(3)
console.log(conjunto4.size)
//metodo has(retorne true si tiene valor sino false)
const conjunto5 = new Set()
conjunto5.add(3)
conjunto5.add(7)
conjunto5.add(3)
if (conjunto5.has(7)) {
    console.log("Contiene 7")
} else {
    console.log("No tiene 7")
}

//iterar con for of un conjunto(set)
const conjunto6 = new Set()
conjunto6.add(3)
conjunto6.add(7)
conjunto6.add(8)
for (let valor of conjunto6.values()) {
    console.log(valor)
}
// otra forma con foreach
conjunto6.forEach(elemento => console.log(elemento))
// metodo delete para eliminar elemento
const conjunto7 = new Set()
conjunto7.add(3)
conjunto7.add(7)
conjunto7.add(8)
console.log(conjunto7.delete(3)) //devuelve true
//metodo clear elimina todo lo que tiene

const usuarios = [
    {
        nombre: "Juan",
        email: "juan@example.com",
        intereses: ["Deportes", "Musica", "Viajes"]
    },
    {
        nombre: "Maria",
        email: "maria@example.com",
        intereses: ["Cocina", "Arte"]
    },
    {
        nombre: "Carlos",
        email: "carlos@example.com",
        intereses: ["Deportes", "Viajes", "Arte"]
    },
    {
        nombre: "Laura",
        email: "laura@example.com",
        intereses: ["Musica", "Cocina", "Viajes"]
    }
]

const interesesUsuarios = new Set()
for (let usuario of usuarios) {
    for (let interes of usuario.intereses) {
        interesesUsuarios.add(interes)
    }
}
console.log(interesesUsuarios)
//otra forma
usuarios.forEach(usuario => usuario.intereses.forEach(interes => interesesUsuarios.add(interes)))
console.log(interesesUsuarios)