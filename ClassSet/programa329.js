/* 

Se tiene el siguiente arreglo con los datos de los tres
programadores que trabajan en una empresa. 

const programadores = [
    {
        nombre: "Juan",
        email: "juan@yahoo.com",
        lenguajes: new Set(["Java", "C++", "Python", "JavaScript"]),
    },
    {
        nombre: "Maria",
        email: "maria@gmail.com",
        lenguajes: new Set(["JavaScript", "Python", "C"]),
    },
    {
        nombre: "Ana",
        email: "ana@hotmail.com",
        lenguajes: new Set(["JavaScript", "Go"]),
    },

]

1-Obtener todos los lenguajes que la empresa conoce
entre sus programadores(union)
2-Obtener los lenguajes que son conocidos por los 3 
programadores en forma simultanea(interseccion)

*/

const programadores = [
    {
        nombre: "Juan",
        email: "juan@yahoo.com",
        lenguajes: new Set(["Java", "C++", "Python", "JavaScript"]),
    },
    {
        nombre: "Maria",
        email: "maria@gmail.com",
        lenguajes: new Set(["JavaScript", "Python", "C"]),
    },
    {
        nombre: "Ana",
        email: "ana@hotmail.com",
        lenguajes: new Set(["JavaScript", "Go"]),
    },
]

let lenguajesTotal = new Set()
for (let programador of programadores) {
    for (let lenguaje of programador.lenguajes) {
        lenguajesTotal.add(lenguaje)
    }
}
console.log(lenguajesTotal)

let lenguajesComunes = [...programadores[0].lenguajes]
for (let programador of programadores) {
    lenguajesComunes = lenguajesComunes.filter(lenguajes => programador.lenguajes.has(lenguajes))
}
console.log(lenguajesComunes)