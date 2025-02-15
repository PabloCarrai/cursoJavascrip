/*
Generar un bolillero con los numeros del 1 al 50
en orden aleatorio.
Mostrar en otro elemento los primeros 6 numeros. 
Se cuenta con una pagina html basica donde se la debe
modificar para mostrar los balores del bolillero
*/


function generarBolillero() {
    bolillero = []
    while (bolillero.length != 50) {
        let aleatorio = Math.floor(Math.random() * 51)
        if (bolillero.includes(aleatorio) == false) {
            bolillero.push(aleatorio)
        }
    }
    return bolillero

}

const bolillas = generarBolillero()

document.querySelector("#numeros").innerHTML = "<strong>Numeros del bolillero: </strong>" + bolillas.join(" - ")
//numeros.innerHTML = `${bolillas}`
document.querySelector("#numerosganadores").innerHTML = "<strong>Ganadores: </strong>" + `${bolillas.slice(0, 6).join(" - ")}`
