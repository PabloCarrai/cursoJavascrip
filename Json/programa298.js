/* 

Se tiene un string en formato JSON que almacena
informacion de 4 libros en una biblioteca.
Cada libro tiene los siguientes atributos: titulo, autor,
genero y año de publicacion. El contenido del string es el siguiente.

const cadena = `[{"titulo": "Cien años de soledad", "autor": "Gabriel García Márquez",
"genero": "Realismo mágico", "añopublicacion": 1967},
{"titulo": "1984", "autor": "George Orwell", "genero": "Ciencia ficción",
"añopublicacion": 1949},
{"titulo": "El señor de los anillos", "autor": "J.R.R. Tolkien",
"genero": "Fantasía épica", "añopublicacion": 1954},
{"titulo": "El código Da Vinci", "autor": "Dan Brown",
"genero": "Ficción de suspense", "añopublicacion": 2003}]`

Se debe generar en forma dinamica la tabla html a partir 
de los datos de la cadena con firmato JSON que debemos
transformar a un arreglo de Javascript. 
*/
const cadena = `[{"titulo": "Cien años de soledad", "autor": "Gabriel García Márquez",
"genero": "Realismo mágico", "añopublicacion": 1967},
{"titulo": "1984", "autor": "George Orwell", "genero": "Ciencia ficción",
"añopublicacion": 1949},
{"titulo": "El señor de los anillos", "autor": "J.R.R. Tolkien",
"genero": "Fantasía épica", "añopublicacion": 1954},
{"titulo": "El código Da Vinci", "autor": "Dan Brown",
"genero": "Ficción de suspense", "añopublicacion": 2003}]`

const libros = JSON.parse(cadena)
const filalibros = libros.map(libro => `<tr><td>${libro.titulo}</td> <td>${libro.autor}</td>
                                                                 <td>${libro.genero}</td>
                                                                 <td>${libro.añopublicacion}</td></tr>`)
document.querySelector("#libros").innerHTML = filalibros.join("")