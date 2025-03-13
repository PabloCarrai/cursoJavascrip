const nombre = document.querySelector("#nombre")
const resultado = document.querySelector("#resultado")
nombre.addEventListener("keyup", () => {
    resultado.textContent = nombre.value
})