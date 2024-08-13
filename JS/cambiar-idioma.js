document.addEventListener('DOMContentLoaded', () => {
    const cambiarIdioma = document.getElementById('cambio__lenguaje');
    
    let lenguajeActual = 'es'; 

    const convertir = {
        es: {
            titulo: "Encriptador de texto",
            tituloDesencriptar: "Ningún mensaje fue encontrado",
            mensajeEncriptar: "Ingresa el texto aqui.",
            advertencia: "Solo letras minúsculas y sin acentos.",
            mensajeDesencriptar: "Ingresa el texto que desees encriptar o desencriptar.",
            footer: "&copy; copyright 2024 - Encriptador de texto - Desarrollado por Anghelo Cuba",
            encriptarBtn: "Encriptar",
            desencriptarBtn: "Desencriptar",
            copiarBtn: "Copiar",
            imagenBoton: 'url(img/bandera-es.png)' // Imagen de fondo para el botón en español
        },
        en: {
            titulo: "Text Encryptor",
            tituloDesencriptar: "No message found",
            mensajeEncriptar: "Enter the text here.",
            advertencia: "Only lowercase letters and no accents.",
            mensajeDesencriptar: "Enter the text you want to encrypt or decrypt.",
            footer: "&copy; copyright 2024 - Text Encryptor - Developed by Anghelo Cuba",
            encriptarBtn: "Encrypt",
            desencriptarBtn: "Decrypt",
            copiarBtn: "Copy",
            imagenBoton: 'url(img/bandera-eeuu.png)' // Imagen de fondo para el botón en inglés
        }
    };

    function cambiarLenguaje(language) {
        const cambiarTexto = convertir[language];
        
        document.querySelector('h1').textContent = cambiarTexto.titulo;
        document.getElementById('inputTexto').setAttribute('placeholder', cambiarTexto.mensajeEncriptar);
        document.getElementById('texto_advertencia').textContent = cambiarTexto.advertencia;

        document.getElementById('desencriptar__mensaje').setAttribute('placeholder', cambiarTexto.mensajeDesencriptar);
        document.querySelector('.desencritar h2').textContent = cambiarTexto.tituloDesencriptar;
        document.querySelector('.desencritar p').textContent = cambiarTexto.mensajeDesencriptar;
        document.querySelector('.footer p').innerHTML = cambiarTexto.footer;
        document.getElementById('Encriptar').textContent = cambiarTexto.encriptarBtn;
        document.getElementById('Desencriptar').textContent = cambiarTexto.desencriptarBtn;
        document.getElementById('desencriptar__boton').textContent = cambiarTexto.copiarBtn;

        // Cambiar el fondo del botón de idioma
        cambiarIdioma.style.backgroundImage = t.buttonBackground;
    }

    cambiarIdioma.addEventListener('click', () => {
        lenguajeActual = lenguajeActual === 'es' ? 'en' : 'es';
        cambiarIdioma.textContent = lenguajeActual.toUpperCase();
        cambiarLenguaje(lenguajeActual);
    });

    // Inicializa el idioma
    cambiarLenguaje(currentLanguage);
});