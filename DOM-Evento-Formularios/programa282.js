const fruta = document.querySelector("#fruta")
const precio = document.querySelector("#precio")
const cuotas = document.querySelector("#cuotas")
const cantidadcuotas = document.querySelector("#cantidadcuotas")
//obtengo del evento change dicho cambio
fruta.addEventListener("change", () => {
    //si el valor de la fruta esta vacia
    if (fruta.value != "") {
        precio.textContent = fruta.value
    } else {
        precio.textContent = ""
    }

})

cuotas.addEventListener("input", () => {
    //hace el cambio en el momento, no espera a soltar el control
    cantidadcuotas.textContent = cuotas.value
})