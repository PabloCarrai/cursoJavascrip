const recuadros = document.querySelectorAll("#recuadros div")
recuadros.forEach(recuadro => {
    recuadro.addEventListener("mouseenter", evento => {
        //document.querySelector("body").classList.add(evento.target.dataset.color)
        document.body.classList.add(evento.target.dataset.color)
    })
})
recuadros.forEach(recuadro => {
    recuadro.addEventListener("mouseleave"), evento => {
        //document.querySelector("body").classList.remove(evento.target.dataset.color)
        document.body.classList.remove(evento.target.dataset.color)
    }
})