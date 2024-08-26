document.addEventListener('DOMContentLoaded', () => {
    //declaramos constantes para el encriptado
        const encriptarButton = document.getElementById('Encriptar');
        const desencriptarButton = document.getElementById('Desencriptar');
        const inputTexto = document.querySelector('.encriptar__Texto');
        const desencriptarMensaje = document.getElementById('desencriptar__mensaje');
        const copiarButton = document.getElementById('desencriptar__boton');
        const desencritarImg = document.querySelector('.desencritar__img');
        const desencritarTexto = document.querySelector('.desencritar__texto');
        const desencritarDiv = document.querySelector('.desencritar');
    
    //declaramos constantes para el modal
        const modal = document.getElementById('modal');
        const closeButton = document.querySelector('.boton_cerrar');
        const modalMessage = document.getElementById('modal_mensaje');
        const img_modal = document.getElementById('img_modal');
        let autoCloseTimeout;
    
    //decalaramos constantes sobre los valores a cambiar en el encriptador
        const encriptarMap = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
        const desencriptarMap = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
    
        
    //Funciones para dar apariencia, detalle a los modales
        function showModal(message,boxShadow) {
            modalMessage.textContent = message;
            modal.style.display = 'flex';
            modal.style.justifyContent='center';
            modal.style.alignItems='center';
            modal.querySelector('.modal_contenido').style.boxShadow = boxShadow;
    
    // Configurar el cierre del modal al hacer clic en la "X"
            closeButton.onclick = function () {
                modal.style.display = 'none';
            };
    
    // Configurar el cierre del modal al hacer clic fuera del contenido del modal
            window.onclick = function (event) {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            };
        }
    
    //funcion encriptar texto
        function encriptarTexto(text) {
            return text.replace(/[eioua]/g, match => encriptarMap[match]);
        }
    
    //Funcion desencriptar tecto    
        function desencriptarTexto(text) {
            return text.replace(/enter|imes|ai|ober|ufat/g, match => desencriptarMap[match]);
        }
    
    //Funcion copiar texto    
        function copiarTexto(texto) {
            const textarea = document.createElement('textarea');
            textarea.value = texto;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            showModal('¡El texto fue copiado correctamente!','0px 0px 80px rgba(255, 255, 255)');
            img_modal.src="img/copia_alerta.png";   //Se modifica la imagen del modal
    
        }
    
    //Funcion para actualizar el div con la clase desencriptar    
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
                showModal('Error: Intentaste ingresar una palabra con tilde.','0px 0px 80px rgba(255, 0, 0)');
                img_modal.src="img/error_alerta.png";   //Se modifica la imagen del modal
                valor = valor.replace(/[áéíóúÁÉÍÓÚ]/g, '');  // Eliminar tildes
            }
    
    // Verificar y alertar si se intenta ingresar un carácter especial
            if (/[^a-z\s]/.test(valor)) {
                showModal('Error: Se intentó ingresar un carácter especial.','0px 0px 80px rgba(255, 0, 0)');
                img_modal.src="img/error_alerta.png";   //Se modifica la imagen del modal 
                valor = valor.replace(/[^a-z\s]/g, ''); // Eliminar caracteres especiales
            }
    
            // Actualizar el valor del textarea
            inputTexto.value = valor;
        });
    
    // Evento para manejar la accion del boton encriptar
        encriptarButton.addEventListener('click', () => {
            const texto = inputTexto.value;
            const textoEncriptado = encriptarTexto(texto);
            actualizarUI(textoEncriptado);
    
            alertaExito();
            showModal('Exito: Mensaje encriptado correctamente.','0px 0px 80px rgba(0, 255, 0)');
        // Llamar a la función una vez al cargar la página
        resizeDiv();
    
        /*// Configurar el event listener para redimensionar la ventana
        window.addEventListener('resize', resizeDiv);*/
        });
    
    // Evento para manejar la accion del boton desencriptar
        desencriptarButton.addEventListener('click', () => {
            const texto = inputTexto.value;
            const textoDesencriptado = desencriptarTexto(texto);
            actualizarUI(textoDesencriptado);
            
    
            alertaExito();
            showModal('Exito: Mensaje desencriptado correctamente.','0px 0px 80px rgba(0, 255, 0)');
    // Llamar a la función una vez al cargar la página
        resizeDiv();
    
    
        });
    
    // Evento para manejar la accion del boton copiar
        copiarButton.addEventListener('click', () => {
            copiarTexto(desencriptarMensaje.value);
        });
    
    
        function resizeDiv() {
            if (window.innerWidth < 768) { // Ajusta el valor a 80 si eso es lo que quieres
                desencritarDiv.style.height = '400px'; // O el tamaño que desees
            } else {
                desencritarDiv.style.height = '100%'; // Tamaño predeterminado
            }
        }
        
    
    
        function alertaExito(){ 
            // Limpiar el temporizador de cierre automático si el modal ya está visible
            clearTimeout(autoCloseTimeout);
            img_modal.src="img/exito_alerta.png";
            // Configurar el cierre automático después de 2 segundos
            autoCloseTimeout = setTimeout(() => {
            modal.style.display = 'none';
            }, 2500);
        }
    });
    