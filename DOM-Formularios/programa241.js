/*


Permitir que el usuario ingrese una o varias
frases y al presionar un boton cambie las palabras que se
encuentran almacenadas en un arreglo por sus emojis
*/


function retornarTransFormacion(oracion) {
  for (let elemento of palabrasEmoji) {
    oracion = oracion.replaceAll(elemento.palabra, elemento.emoji)
  }
  return oracion
}



const palabrasEmoji = [

  {

    palabra: "amor",
    emoji: "❤"

  },

  {

    palabra: "risa",
    emoji: "😂"

  },

  {

    palabra: "gato",
    emoji: "🐱"

  },

  {

    palabra: "perro",
    emoji: "🐶"

  },

  {

    palabra: "comida",
    emoji: "🍔"

  },

  {

    palabra: "sol",
    emoji: "☀"

  },

  {

    palabra: "lluvia",
    emoji: "🌧"

  },

  {

    palabra: "fiesta",
    emoji: "🎉"

  },

  {

    palabra: "música",
    emoji: "🎶"

  },

  {

    palabra: "deporte",
    emoji: "⚽"

  }

]


document.querySelector("#convertir").addEventListener("click", () => {
  const oracion = document.querySelector("#oracion").value
  document.querySelector("#resultado").textContent = retornarTransFormacion(oracion)
})