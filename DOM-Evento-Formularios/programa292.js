crearInputs()

function crearInputs() {
    const resultado = document.querySelector("#resultado")
    let cad = ''
    for (let x = 0; x < 10; x++) {
        cad += '<div><input type="number"></div>'
    }
    document.querySelector("#entradas").innerHTML = cad
    const entradas = document.querySelectorAll("#entradas input")
    document.querySelector("#entradas").addEventListener("input", evento =>{
        let suma=0
        entradas.forEach(elemento =>{
            if(elemento.value!=''){
                suma+=parseFloat(elemento.value)
            }
        })
        resultado.textContent=suma.toFixed(2)        
    })
}