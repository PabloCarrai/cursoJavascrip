const resultado = document.querySelector("#resultado")
document.querySelector("#botones").addEventListener("click", evento => {
    resultado.textContent += evento.target.textContent
})