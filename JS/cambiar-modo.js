document.addEventListener('DOMContentLoaded', () => {

    const cambiarTono = document.getElementById('cambio__modo');

    cambiarTono.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const modo_oscuro = document.body.classList.contains('dark-mode');
        const icon = cambiarTono.querySelector('i');

        if (modo_oscuro) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
});