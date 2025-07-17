function validarClave(clave) {
    const MAYUSCULAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const MINUSCULAS = "abcdefghijklmnopqrstuvwxyz"
    const NUMEROS = "0123456789"
    const SIMBOLOS = "$-/:-?{-~!\"^_`\[\]]#"
    const MIN_LONGITUD = 8
    let tieneMinusculas = false
    let tieneMayusculas = false
    let tieneNumeros = false
    let tieneSimbolos = false

    if (clave.length < MIN_LONGITUD) {
        return false
    }

    for (let i = 0; i < clave.length; i++) {
        const caracter = clave[i]
        if (MAYUSCULAS.includes(caracter)) {
            tieneMayusculas = true
        } else if (MINUSCULAS.includes(caracter)) {
            tieneMinusculas = true
        } else if (NUMEROS.includes(caracter)) {
            tieneNumeros = true
        } else if (SIMBOLOS.includes(caracter)) {
            tieneSimbolos = true
        }
    }

    if (tieneMinusculas && tieneMayusculas && tieneNumeros && tieneSimbolos) {
        return true
    } else {
        return false
    }
}

function sumar(a, b) {
    return a + b
}

export default validarClave
export { sumar }