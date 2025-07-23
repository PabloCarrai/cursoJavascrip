const persona1 = {
    nombre: "Juan",
    email: "juan@example.com",
    intereses: new Set(["Deportes", "Musica", "Viajar"])
}

const persona2 = {
    nombre: "Maria",
    email: "maria@example.com",
    intereses: new Set(["Viajar", "Cocina", "Arte"])
}

// Union de conjuntos
const union = new Set([...persona1.intereses, ...persona2.intereses])
console.log(`Union de conjunto,`, union)

//interseccion
const interseccion = new Set([...persona1.intereses].filter(interes => persona2.intereses.has(interes)))
console.log("interseccion ", interseccion)


//diferencia todo lo de a que no esta en b
const diferencia = new Set([...persona1.intereses].filter(interes => !persona2.intereses.has(interes)))
console.log("interseccion ", diferencia)