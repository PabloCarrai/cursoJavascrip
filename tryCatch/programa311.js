const codigo = document.querySelector("#codigo")
const resultado = document.querySelector("#resultado")
document.querySelector("#validar").addEventListener("click", () => {
    try {
        const arreglo = JSON.parse(codigo.value)
        resultado.textContent = "JSON Valido"
        resultado.className="correcto"
    } catch (error) {
        resultado.textContent = "JSON no valido"
        console.log(error.message)
        resultado.className="incorrecto"
    }
})
