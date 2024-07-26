document.addEventListener('DOMContentLoaded', () => {
    
    const desencritarImg = document.querySelector('.desencritar__img__oscuro');
    const desencritarImg1 = document.querySelector('.desencritar__img__claro');
    const cambiarTono = document.getElementById('cambio__modo');

    cambiarTono.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const modo_oscuro = document.body.classList.contains('dark-mode');
        const icon = cambiarTono.querySelector('i');

        if (modo_oscuro) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            desencritarImg.style.display = 'block';
            desencritarImg.style.width='50%'
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            desencritarImg1.style.display = 'block';
            desencritarImg.style.display = 'none';
        }
    });
});