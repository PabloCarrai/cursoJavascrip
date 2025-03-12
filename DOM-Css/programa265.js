const lista1 = document.querySelector("#lista1")
lista1.innerHTML = `<li>Uno</li>
<li>Dos</li>
<li>Tres</li>
<li>Cuatro</li>`

const li1 = document.createElement("li")
li1.textContent = "Quinto"
lista1.append(li1)