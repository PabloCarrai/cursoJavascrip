const palabrasConEmoji = [
    { emoji: "😂", palabra: "luna" },
    { emoji: "🐱", palabra: "flores" },
    { emoji: "🐶", palabra: "hojas" },
    { emoji: "☀", palabra: "mar" },
    { emoji: "🎶", palabra: "estrella" },
]

console.log(palabrasConEmoji)

function retornarPalabra(emoji) {
    return palabrasConEmoji.find(palabrasConEmoji => palabrasConEmoji.emoji == emoji).palabra
}


document.querySelector("#remplazar").addEventListener("click", () => {
    let dibujos = document.querySelectorAll(".emojis")
    dibujos.forEach(dibujo => dibujo.textContent = retornarPalabra(dibujo.textContent))
})