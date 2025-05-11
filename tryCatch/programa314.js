class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
        this.trabajo = "Sin Trabajo"
    }
    imprimir() {
        document.write(`${this.nombre} ${this.edad} ${this.trabajo}<br>`)
    }
    fijarTrabajo(trabajo) {
        if (this.edad > 14) {
            this.trabajo = trabajo
        } else {
            throw new Error(`El/La trabajador/a ${this.nombre} tiene la edad de ${this.edad} años no puede trabajar`)
        }
    }
}

const persona1 = new Persona("Juan", 22)
try {
    persona1.fijarTrabajo("Microsoft")
    persona1.imprimir()
}
catch (error) {
    alert(error.message)
}