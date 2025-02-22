/*



Se tiene un arreglo con varias peliculas que 
pueden ser de terror, comedia o guerra. 
Mediante 3 checkbox permitir mostrar todas las peliculas
que pertenecen a los generos seleccionados. 

const peliculas = [
    { titulo: "El conjunto", genero: "Terror" },
    { titulo: "La noche del demonio", genero: "Terror" },
    { titulo: "El exorcista", genero: "Terror" },
    { titulo: "La gran estafa", genero: "Comedia" },
    { titulo: "La mascara", genero: "Comedia" },
    { titulo: "Recatanto al soldado Ryan", genero: "Guerra" },
    { titulo: "Apocalipsis Now", genero: "Guerrra" },
    { titulo: "La chaqueta metalica", genero: "Guerra" }
]

*/

const peliculas = [
    { titulo: "El conjunto", genero: "Terror" },
    { titulo: "La noche del demonio", genero: "Terror" },
    { titulo: "El exorcista", genero: "Terror" },
    { titulo: "La gran estafa", genero: "Comedia" },
    { titulo: "La mascara", genero: "Comedia" },
    { titulo: "Recatanto al soldado Ryan", genero: "Guerra" },
    { titulo: "Apocalipsis Now", genero: "Guerra" },
    { titulo: "La chaqueta metalica", genero: "Guerra" }
]

document.querySelector("#ver").addEventListener("click", () => {
    const checkTerror = document.querySelector("#terror")
    const checkComedia = document.querySelector("#comedia")
    const checkGuerra = document.querySelector("#guerra")

    /*
    const listado = []
    // recorro el array de objetos 
    for (let pelicula of peliculas) {
        // compruebo que este elegido y que genero sea..
        if (checkTerror.checked && pelicula.genero == "Terror") {
            listado.push(`${pelicula.titulo} - ${pelicula.genero}`)
        }
        if (checkComedia.checked && pelicula.genero == "Comedia") {
            listado.push(`${pelicula.titulo} - ${pelicula.genero}`)
        }
        if (checkGuerra.checked && pelicula.genero == "Guerra") {
            listado.push(`${pelicula.titulo} - ${pelicula.genero}`)
        }
    }

    */
    //otra forma seria 
    const listado = peliculas
        .filter(pelicula => (
            (checkTerror.checked && pelicula.genero == "Terror") ||
            (checkComedia.checked && pelicula.genero == "Comedia") ||
            (checkGuerra.checked && pelicula.genero == "Guerra")))
        .map(pelicula => `${pelicula.titulo} - ${pelicula.genero}`)
    document.querySelector("#resultado").innerHTML = listado.join("<br>")
})