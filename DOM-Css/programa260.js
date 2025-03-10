const enlace1 = document.querySelectorAll("a")
enlace1.forEach(elemento => {
    if (elemento.hasAttribute("target") == false) {
        elemento.setAttribute("target", "_blank")
        //otra  forma
        // elemento.target="_blank"
    }
})