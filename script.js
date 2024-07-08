// Función para encriptar el texto
function encryptText() {
    let text = document.getElementById("inputText").value;
    if (text.trim() === "") {
        showInitialMessage();
    } else if (!validateInput(text)) {
        showInitialMessage();
        alert("Caracter inválido. Solo letras minúsculas y sin acentos serán aceptadas.");
    } else {
        let encryptedText = text.replace(/e/g, "enter")
                                .replace(/i/g, "imes")
                                .replace(/a/g, "ai")
                                .replace(/o/g, "ober")
                                .replace(/u/g, "ufat");
        document.getElementById("resultText").innerHTML = `<p>${encryptedText}</p>`;
        toggleCopyButton(encryptedText);
    }
}

// Función para desencriptar el texto
function decryptText() {
    let text = document.getElementById("inputText").value;
    if (text.trim() === "") {
        showInitialMessage();
    } else if (!validateInput(text)) {
        showInitialMessage();
        alert("Caracter inválido. Solo letras minúsculas y sin acentos serán aceptadas.");
    } else {
        let decryptedText = text.replace(/enter/g, "e")
                                .replace(/imes/g, "i")
                                .replace(/ai/g, "a")
                                .replace(/ober/g, "o")
                                .replace(/ufat/g, "u");
        document.getElementById("resultText").innerHTML = `<p>${decryptedText}</p>`;
        toggleCopyButton(decryptedText);
    }
}

// Función para validar el texto ingresado
function validateInput(text) {
    const lowercaseText = text.toLowerCase();
    const specialCharsPattern = /[^a-z\s]/g; // Permitir solo letras minúsculas y espacios
    if (text !== lowercaseText || specialCharsPattern.test(text)) {
        return false;
    }
    return true;
}

// Función para copiar el texto al portapapeles
function copyText() {
    let resultTextElement = document.getElementById("resultText");
    let resultText = resultTextElement.innerText;

    let textArea = document.createElement("textarea");
    textArea.value = resultText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    alert("Texto copiado al portapapeles");
}

// Función para mostrar/ocultar el botón de copiar
function toggleCopyButton(text) {
    let copyButton = document.getElementById("copyButton");
    if (text.trim() === "") {
        copyButton.style.display = "none";
    } else {
        copyButton.style.display = "block";
    }
}

// Función para mostrar el mensaje inicial
function showInitialMessage() {
    document.getElementById("resultText").innerHTML = `
        <img src="image/dibujo.png" alt="Imagen de ejemplo">
        <p>Ningún mensaje fue encontrado</p>
        <p>Ingresa el texto que desees encriptar o desencriptar.</p>
    `;
    toggleCopyButton("");
}

// Inicializar el botón de copiar como oculto al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    toggleCopyButton("");
});
