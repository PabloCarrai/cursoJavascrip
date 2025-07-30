function hacerTarea(actividad) {
    /*
    Promise necesita dos funciones,
    result y reject. 
    result es lo que va a then
    reject es lo que va al catch
    */
    return new Promise((result, reject) => {
        setInterval(() => {
            const aleatorio = Math.random()
            if (aleatorio >= 0.5) {
                result(actividad + " Finalizo con exito")
            } else {
                reject(actividad + " No se pudo realizar")
            }
        },2000)
    })
}

hacerTarea("depositar el dinero")
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))