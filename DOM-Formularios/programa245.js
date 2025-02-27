document.querySelector("#calcular").addEventListener("click", () => {
    const lista = document.querySelectorAll("li")
    let suma = 0
    /*
    //primer forma 
    
    for (let i = 0; i < lista.length; i++) {
        suma += parseInt(lista[i].textContent)
    }
    */

    /*
    //segunda forma
    for (let elemento of lista){
        suma += parseInt(elemento.textContent)
    }
    */

    /*
    //tercer forma
    lista.forEach(elemento => suma += parseInt(elemento.textContent))
    */
    //convertir nodelist a arreglo
    const arregloLista = [...lista]
    suma = arregloLista.reduce((acumulador, elemento) => acumulador + parseInt(elemento.textContent), 0)

    document.querySelector("#resultado").textContent = `La suma da ${suma}`
})