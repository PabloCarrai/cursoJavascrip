
/*
const persona1 = {
    nombre: "Cristian",
    edad: 25,
    altura: 1.75,
    casado: true,
    trabajo: null,
    hijos: ["Juan", "Pedro", "Jose"],
    estudios: {
        primario: true,
        secundario: false,
    }
}

console.log(typeof persona1)
// de un objeto devuelve un string
const cadena = JSON.stringify(persona1)
console.log(cadena)


console.log(typeof cadena)

*/

const cadena = '{"nombre":"Juan","edad":33,"clave":"abc123"}'
const usuario = JSON.parse(cadena)
console.log(usuario)
console.log(typeof usuario)