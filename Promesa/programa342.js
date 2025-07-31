function esperar1() {
    return new Promise((resolver, rechazar) => {
        setTimeout(() => rechazar("Rechazo de promesa"), 1000)
    })
}

function esperar2() {
    return new Promise((resolver, rechazar) => {
        setTimeout(() => rechazar("Rechazo de promesa"), 2000)
    })
}

function esperar3() {
    return new Promise((resolver, rechazar) => {
        setTimeout(() => resolver("Exito de la promesa"), 3000)
    })
}

Promise.any([esperar1(), esperar2(), esperar3()])
    .then(respuesta => console.log(respuesta))
    .catch(errores => console.log(errores))



