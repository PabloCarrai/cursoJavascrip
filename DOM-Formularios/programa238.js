/*



Mostrar 4checkbox con materias de una
carrera informatica. 
Cuando se presiones un boton validar que solo se hayan
seleccionado un maximo de 2.
*/

function chequearCantidadCheckboxActivos() {
    document.querySelector("#resultado").innerHTML = ''
    let ctrue = 0
    const checkboxSexperto = document.querySelector("#sexpertos")
    const checkboxIartificial = document.querySelector("#iartificial")
    const checkboxCdatos = document.querySelector("#cdatos")
    const checkboxPgrafica = document.querySelector("#pgrafica")
    for (let resultado of [checkboxSexperto.checked, checkboxIartificial.checked, checkboxCdatos.checked, checkboxPgrafica.checked]) {
        if (resultado) {
            ctrue++

        }
        if (ctrue > 2) {
            document.querySelector("#resultado").innerHTML = `Cantidad de elecciones ${ctrue}, solo puedes elegir 2 carreras`

        }
    }
}

document.querySelector("#verificar").addEventListener("click", () => {
    chequearCantidadCheckboxActivos()
})