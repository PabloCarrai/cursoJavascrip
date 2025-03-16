const recuadros = document.querySelectorAll("#recuadros div")
recuadros.forEach(recuadro => {
    recuadro.addEventListener("dblclick", evento => {
        /*
        if(document.body.classList.contains("rojo")){
            document.body.classList.remove("rojo")  
        }
        if(document.body.classList.contains("verde")){
            document.body.classList.remove("verde")  
        }
        if(document.body.classList.contains("azul")){
            document.body.classList.remove("azul")  
        } 
        */
        document.body.className = ""
        document.querySelector("body").classList.add(evento.target.dataset.color)
        //document.body.classList.add(evento.target.dataset.color)
    })
})