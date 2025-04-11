fetch("https://www.scratchya.com.ar/cursojs/recuperarpaises.php")
    .then(respuesta => respuesta.json())
    .then(pais => mostrar(pais)
    )

function mostrar(pais) {
    const arreglo = pais.map(pais => `<tr><td>${pais.nombre}</td> 
                                          <td><img src=${pais.bandera}></td>
                                          <td>${pais.capital}</td>
                                          <td>${pais.idioma}</td>
                                          <td>${pais.poblacion}</td>
                                          <td>${pais.moneda}</td>
                                          <td>${pais.limites}</td></tr>`)
    document.querySelector("#paises").innerHTML = arreglo.join("")
}



/*

`<tr><td>${libro.titulo}</td> 
<td>${libro.autor}</td>
<td>${libro.genero}</td>
<td>${libro.añopublicacion}</td></tr>`

*/