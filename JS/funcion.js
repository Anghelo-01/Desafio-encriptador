document.addEventListener('DOMContentLoaded', () => {
    const encriptarButton = document.getElementById('Encriptar');
    const desencriptarButton = document.getElementById('Desencriptar');
    const inputTexto = document.querySelector('.encriptar__Texto');
    const desencriptarMensaje = document.getElementById('desencriptar__mensaje');
    const copiarButton = document.getElementById('desencriptar__boton');
    const desencritarImg = document.querySelector('.desencritar__img');
    const desencritarTexto = document.querySelector('.desencritar__texto');
    const errorMessage = document.getElementById('error-message');
    const desencritarDiv = document.querySelector('.desencritar');

    const encriptarMap = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    const desencriptarMap = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };

    function encriptarTexto(text) {
        return text.replace(/[eioua]/g, match => encriptarMap[match]);
    }

    function desencriptarTexto(text) {
        return text.replace(/enter|imes|ai|ober|ufat/g, match => desencriptarMap[match]);
    }

    function copiarTexto(texto) {
        const textarea = document.createElement('textarea');
        textarea.value = texto;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('¡Texto copiado al portapapeles!');
    }

    function hasUppercase(str) {
        return /[A-Z]/.test(str);
    }

    function hasAccent(str) {
        return /[áéíóúÁÉÍÓÚ]/.test(str);
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.color = 'red';
    }

    function actualizarUI(texto) {
        // Encriptar el texto solo una vez
        desencriptarMensaje.value = texto;
        desencriptarMensaje.style.display = 'block';
        desencriptarMensaje.style.width = '90%';
        desencriptarMensaje.style.height = '100%';
        desencriptarMensaje.style.border = 'none';
        desencriptarMensaje.style.resize = 'none';
        desencriptarMensaje.disabled = true;
        desencriptarMensaje.style.backgroundColor = 'transparent';
        copiarButton.style.display = 'block';

         // Ocultar la imagen y el texto por defecto
        desencritarImg.style.display = 'none';
        desencritarTexto.style.display = 'none';

        // Aplicar estilos al div 'desencritar'
        desencritarDiv.style.justifyContent = 'space-between';
        errorMessage.textContent = ''; // Limpiar mensaje de error
    }

    function mostrarErrorUI(message) {
        showError(message);
        desencriptarMensaje.style.display = 'none';
        copiarButton.style.display = 'none';
        // Ocultar la imagen y el texto por defecto
        desencritarImg.style.display = 'block';
        desencritarTexto.style.display = 'block';
        // Aplicar estilos al div 'desencritar'
        desencritarDiv.style.justifyContent = 'center';
    }

    function validarTexto(texto) {
        if (hasUppercase(texto) && hasAccent(texto)) {
            return 'Error: palabra con tilde - ingresaste una letra mayúscula.';
        } else if (hasUppercase(texto)) {
            return 'Error: ingresaste una letra mayúscula.';
        } else if (hasAccent(texto)) {
            return 'Error: palabra con tilde.';
        }
        return '';
    }

    encriptarButton.addEventListener('click', () => {
        const texto = inputTexto.value;
        const errorMessage = validarTexto(texto);

        if (errorMessage) {
            mostrarErrorUI(errorMessage);
        } else {
            const textoEncriptado = encriptarTexto(texto);
            actualizarUI(textoEncriptado);
        }
    });

    desencriptarButton.addEventListener('click', () => {
        const texto = inputTexto.value;
        const errorMessage = validarTexto(texto);

        if (errorMessage) {
            mostrarErrorUI(errorMessage);
        } else {
            const textoDesencriptado = desencriptarTexto(texto);
        actualizarUI(textoDesencriptado);
        }
    });

    copiarButton.addEventListener('click', () => {
        copiarTexto(desencriptarMensaje.value);
    });
});
