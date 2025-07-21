const carrito = new Map()

function agregarAlcarrito({ codigo, descripcion, precio }) {
    if (carrito.has(codigo)) {
        const articulo = carrito.get(codigo)
        articulo.cantidad++
        carrito.set(codigo, articulo)

    } else {
        carrito.set(codigo, { descripcion, precio, cantidad: 1 })
    }
    actualizarCarrito()
}
function actualizarCarrito() {
    const ulcarrito = document.querySelector("#carrito")
    ulcarrito.innerHTML = ""
    let total = 0
    carrito.forEach(item => {
        const li = document.createElement("li")
        li.innerText = `${item.descripcion} * ${item.cantidad} - $${(item.precio * item.cantidad)}`
        ulcarrito.appendChild(li)
        total += item.precio * item.cantidad
    })
    const totalCarrito = document.querySelector("importe")
    totalCarrito.innerText = `Total a pagar: $${total}`
}
export { agregarAlcarrito }