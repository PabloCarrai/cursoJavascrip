const tiposInput = [
    { tipo: "text", descripcion: "Campo de texto para introducir texto." },
    { tipo: "number", descripcion: "Campo de texto para introducir números." },
    { tipo: "email", descripcion: "Campo de texto para introducir direcciones de correo electrónico." },
    { tipo: "password", descripcion: "Campo de texto para introducir contraseñas." },
    { tipo: "checkbox", descripcion: "Casilla de verificación para seleccionar una opción." },
    { tipo: "radio", descripcion: "Botones de radio para seleccionar una opción." },
    { tipo: "submit", descripcion: "Botón para enviar un formulario." },
    { tipo: "reset", descripcion: "Botón para resetear un formulario." },
    { tipo: "file", descripcion: "Campo para seleccionar archivos para cargar." },
    { tipo: "date", descripcion: "Campo para introducir una fecha." },
    { tipo: "datetime-local", descripcion: "Campo para introducir una fecha y hora local." },
    { tipo: "time", descripcion: "Campo para introducir una hora." },
    { tipo: "week", descripcion: "Campo para introducir una semana del año." },
    { tipo: "month", descripcion: "Campo para introducir un mes y año." },
    { tipo: "range", descripcion: "Control deslizante para seleccionar un valor numérico en un rango." },
    { tipo: "search", descripcion: "Campo de búsqueda para buscar dentro del sitio o aplicación." },
    { tipo: "tel", descripcion: "Campo de texto para introducir un número de teléfono." },
    { tipo: "url", descripcion: "Campo de texto para introducir una dirección URL." },
    { tipo: "color", descripcion: "Campo para seleccionar un color." }
]

document.querySelector("#tipos").innerHTML = tiposInput.map(elemento => `<option value="${elemento.tipo}">${elemento.tipo}</option>`).join("")
document.querySelector("#mostrar").addEventListener("click", () => {
    const tipo = document.querySelector("#tipos").value
    document.querySelector("#ejemplo").type = tipo
    document.querySelector("#descripcion").textContent = tiposInput.find(elemento => elemento.tipo == tipo).descripcion
})
