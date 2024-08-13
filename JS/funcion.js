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
        alert('¡El texto fue copiado correctamente!');
    }

    function actualizarUI(texto) {
        desencriptarMensaje.value = texto;
        desencriptarMensaje.style.display = 'block';
        desencriptarMensaje.style.width = '90%';
        desencriptarMensaje.style.height = '100%';
        desencriptarMensaje.style.border = 'none';
        desencriptarMensaje.style.resize = 'none';
        desencriptarMensaje.disabled = true;
        desencriptarMensaje.style.backgroundColor = 'transparent';
        copiarButton.style.display = 'block';
        desencritarImg.style.display = 'none';
        desencritarTexto.style.display = 'none';
        desencritarDiv.style.justifyContent = 'space-between';
        
    }

    // Evento para manejar entrada de texto
    inputTexto.addEventListener('input', () => {
    // Convertir mayúsculas a minúsculas automáticamente
    let valor = inputTexto.value.toLowerCase();

    // Verificar y alertar si se intenta ingresar una letra con tilde
    if (/[áéíóúÁÉÍÓÚ]/.test(inputTexto.value)) {
        alert('Error: Intentaste ingresar una palabra con tilde.');
        valor = valor.replace(/[áéíóúÁÉÍÓÚ]/g, ''); // Eliminar tildes
    }

    // Verificar y alertar si se intenta ingresar un carácter especial
    if (/[^a-z\s]/.test(valor)) {
        alert('Error: Se intentó ingresar un carácter especial.');
        valor = valor.replace(/[^a-z\s]/g, ''); // Eliminar caracteres especiales
    }

    // Actualizar el valor del textarea
    inputTexto.value = valor;
});


    encriptarButton.addEventListener('click', () => {
        const texto = inputTexto.value;
            const textoEncriptado = encriptarTexto(texto);
            actualizarUI(textoEncriptado);
        
    });

    desencriptarButton.addEventListener('click', () => {
        const texto = inputTexto.value;
        const textoDesencriptado = desencriptarTexto(texto);
        actualizarUI(textoDesencriptado);
        
    });

    copiarButton.addEventListener('click', () => {
        copiarTexto(desencriptarMensaje.value);
    });
});
