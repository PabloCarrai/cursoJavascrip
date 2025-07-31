function esperar(tiempo) {
    return new Promise((resolver, rechazar) => {
        setInterval(() => {
            resolver("Espera de " + tiempo)
        }, tiempo)
    })
}

function proceso1() {
    esperar(1000)
        .then(respuesta => {
            console.log(respuesta)
            return esperar(1100)
        })
        .then(respuesta => {
            console.log(respuesta)
            return esperar(1200)
        })
        .then(respuesta => console.log(respuesta))
}

//proceso1()

async function proceso2() {
    const respuesta1 = await esperar(1000)
    console.log(respuesta1)
    const respuesta2 = await esperar(1100)
    console.log(respuesta2)
    const respuesta3 = await esperar(1200)
    console.log(respuesta3)
}

proceso2()