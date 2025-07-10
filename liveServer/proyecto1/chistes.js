const chistes = {
    lista: [
        "¿Que le dijo un bit al otro? Nos vemos en el bus",
        "¿Sabes como se llama un programador que no sabe rogramar? Jefe de proyecto",
        "¿Que hace un programador cuando algo no funciona? ñp omtemta de mievo y de nuevo y de nuevo y de nuevo."
    ],
    alAzar() {
        return this.lista[Math.floor(Math.random() * this.lista.length)]
    },
    cantidad() {
        return this.lista.length
    }
}


const autores = ["Juan", "Ana"]

export { chistes, autores }