function adivinarAleatorio(numero) {
    let aleatorio = Math.floor(Math.random() * 101)
    console.log(aleatorio)
    if (aleatorio == numero) {
        return `Ganastes, muy bien el numero que pense es el ${aleatorio}`
    } else {
        if (aleatorio < numero) {
            return `El numero que pense es menor a ${numero}`
        } else {
            if (aleatorio > numero) {
                return `El numero que pense es mayor a ${numero}`
            }
        }
    }

}
document.querySelector("#verificar").addEventListener("click", () => {
    const valor = parseInt(document.querySelector("#numero").value)
    let listaExistente = document.querySelector("#intentos")
    let liitem = document.createElement("li")
    liitem.innerHTML = adivinarAleatorio(valor)
    listaExistente.append(liitem)
})