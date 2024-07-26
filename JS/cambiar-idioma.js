document.addEventListener('DOMContentLoaded', () => {
    const cambiarIdioma = document.getElementById('cambio__lenguaje');
    
    let currentLanguage = 'es'; 

    const translations = {
        es: {
            title: "Encriptador de texto",
            desencriptarTitle: "Ningún mensaje fue encontrado",
            desencriptarMessage: "Ingresa el texto que desees encriptar o desencriptar.",
            footerText: "&copy; copyright 2024 - Encriptador de texto - Desarrollado por Anghelo Cuba",
            encriptarBtn: "Encriptar",
            desencriptarBtn: "Desencriptar",
            copiarBtn: "Copiar",
            buttonBackground: 'url(img/bandera-es.png)' // Imagen de fondo para el botón en español
        },
        en: {
            title: "Text Encryptor",
            desencriptarTitle: "No message found",
            desencriptarMessage: "Enter the text you want to encrypt or decrypt.",
            footerText: "&copy; copyright 2024 - Text Encryptor - Developed by Anghelo Cuba",
            encriptarBtn: "Encrypt",
            desencriptarBtn: "Decrypt",
            copiarBtn: "Copy",
            buttonBackground: 'url(img/bandera-eeuu.png)' // Imagen de fondo para el botón en inglés
        }
    };

    function cambiarLenguaje(language) {
        const t = translations[language];
        
        document.querySelector('h1').textContent = t.title;
        document.getElementById('desencriptar__mensaje').setAttribute('placeholder', t.desencriptarMessage);
        document.querySelector('.desencritar h2').textContent = t.desencriptarTitle;
        document.querySelector('.desencritar p').textContent = t.desencriptarMessage;
        document.querySelector('.footer p').innerHTML = t.footerText;
        document.getElementById('Encriptar').textContent = t.encriptarBtn;
        document.getElementById('Desencriptar').textContent = t.desencriptarBtn;
        document.getElementById('desencriptar__boton').textContent = t.copiarBtn;

        // Cambiar el fondo del botón de idioma
        cambiarIdioma.style.backgroundImage = t.buttonBackground;
    }

    cambiarIdioma.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
        cambiarIdioma.textContent = currentLanguage.toUpperCase();
        cambiarLenguaje(currentLanguage);
    });

    // Inicializa el idioma
    cambiarLenguaje(currentLanguage);
});
