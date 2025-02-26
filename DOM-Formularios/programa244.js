/* 

Confeccionar un formulario que solicite
el ingreso de una clave de al menos 8 caracteres. 
En un segundo control input de tipo password se debe 
repetir el ingreso de la clave. 
Cuando se presiones un boton validar que las dos claves
sean iguales y tengan al menos 8 caracteres. 
Agregar un segundo boton que al ser presionado se muestre
un cuadro alert con las dos claves visibles para que el 
operador pueda corroborar los textos ingresados. 
*/

function verificarClaves(clave1, clave2) {
    
    alert(`Primer Clave ${clave1} Segunda Clave ${clave2}`)
}

function clavesValidas(clave1, clave2) {
    if (clave1.length == 0 || clave2.length == 0) {
        alert("Claves vacias")

    }
    if ((clave1.length >= 8 && clave2.length >= 8) && (clave1 === clave2)) {
        document.querySelector("#resultado").textContent = "Claves Validas y iguales"
    } else {
        document.querySelector("#resultado").textContent = "Las claves no tienen 8 caracteres o no son validas"
    }
}

document.querySelector("#verificar").addEventListener("click", () => {
    const clave1 = document.querySelector("#clave1").value
    const clave2 = document.querySelector("#clave2").value
    clavesValidas(clave1, clave2)
})

document.querySelector("#verclaves").addEventListener("click", () => {
    const clave1 = document.querySelector("#clave1").value
    const clave2 = document.querySelector("#clave2").value
    verificarClaves(clave1, clave2)
})