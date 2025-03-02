/* 

Se tiene una lista desordenada que muestra 5
nombres de paises de America y Europa.
Definir una clase distinta para los paises americanos y europeos. 


    <ul>
        <li class="americano">Mexico</li>
        <li class="europeo">Francia</li>
        <li class="americano">Brasil</li>
        <li class="europeo">Alemania</li>
        <li class="americano">Argentina</li>
    </ul>

Con javascript:
Mostrar cuando se presiona un boton solo los paises
Americanos en un parrafo

Con css:
Definir de color verde y fuente Verdana ara los paises
americanos y de color azul y fuente gergia los europeos
*/

document.querySelector("#mostrar").addEventListener("click", () => {
    // el truco esta aca con el .nombreclase nos trae todo. 
    const americanos = document.querySelectorAll(".americano")
    let paises = ""
    americanos.forEach(pais => paises += pais.textContent + "-")
    document.querySelector("#resultado").textContent = paises
})


