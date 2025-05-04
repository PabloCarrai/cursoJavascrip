
const cliente1 = {
    monto: 1000,
    extrar(dinero) {
        if (dinero > this.monto) {
            throw new Error("No puede extraer mas de lo depositado")
        }
        this.monto -= dinero
    },
    imprimir() {
        alert(`dinero disponible actual ${this.monto}`)
    }
}

try {
    const dinero = parseFloat(prompt("Ingrese monto a extrar"))
    cliente1.extrar(dinero)
    cliente1.imprimir()
} catch (error) {
    alert(error.message)
    cliente1.imprimir()
}