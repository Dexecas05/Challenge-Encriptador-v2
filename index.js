// Función para encriptar el texto
function encriptar() {
    let texto = document.getElementById("input-text").value;

    // Validar que solo contenga letras minúsculas sin acentos
    if (!/^[a-z\s]*$/.test(texto)) {
        alert("Por favor, ingresa solo letras minúsculas, sin acentos ni caracteres especiales.");
        return;
    }

    // Reglas de encriptación
    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");

    mostrarResultado(textoEncriptado);
}

// Función para desencriptar el texto
function desencriptar() {
    let texto = document.getElementById("input-text").value;

    // Validar que solo contenga letras minúsculas sin acentos
    if (!/^[a-z\s]*$/.test(texto)) {
        alert("Por favor, ingresa solo letras minúsculas, sin acentos ni caracteres especiales.");
        return;
    }

    // Reglas de desencriptación (en orden inverso para evitar conflictos)
    let textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");

    mostrarResultado(textoDesencriptado);
}

// Función para mostrar el resultado en la pantalla y crear el botón de copiar
function mostrarResultado(texto) {
    let outputText = document.getElementById("output-text");

    // Actualizar el contenido del output con el texto encriptado/desencriptado
    outputText.innerHTML = `
        <h2 id="output-subtitle">Resultado:</h2>
        <p id="output-paragraph">${texto}</p>
        <button class="btn btn--copy" onclick="copiarTexto()">Copiar</button>
    `;
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    let texto = document.getElementById("output-paragraph").innerText;

    navigator.clipboard.writeText(texto).then(function() {
        alert("Texto copiado al portapapeles.");
    }, function() {
        alert("Error al copiar el texto.");
    });
}
