document.addEventListener('DOMContentLoaded', () => {
    const surpriseButton = document.querySelector('.surprise-button');
    const nosotrosLink = document.getElementById('nosotros-link');
    const acercaLink = document.getElementById('acerca-link');
    const siLink = document.getElementById('si-link');
    const inicioLink = document.getElementById('inicio-link');
    const mainImage = document.getElementById('main-image');
    const welcomeSection = document.querySelector('.welcome');
    const surpriseContent = document.getElementById('surprise-content');

    // Función para ocultar la imagen y la sección de bienvenida
    const hideMainContent = () => {
        mainImage.style.display = 'none';
        welcomeSection.style.display = 'none';
    };

    // Función para mostrar la imagen y la sección de bienvenida
    const showMainContent = () => {
        mainImage.style.display = 'block';
        welcomeSection.style.display = 'block';
        surpriseContent.style.display = 'none';
    };

    // Configura los eventos para los enlaces
    nosotrosLink.addEventListener('click', (e) => {
        e.preventDefault();
        hideMainContent();
        surpriseContent.innerHTML = '<iframe src="https://alejandroaron.github.io/siu/siu.html" title="Sorpresa" width="100%" height="500px" style="border:none;"></iframe>';
        surpriseContent.style.display = 'block';
    });

    acercaLink.addEventListener('click', (e) => {
        e.preventDefault();
        hideMainContent();
        surpriseContent.innerHTML = '<iframe src="https://alejandroaron.github.io/acerca/acercademi.html" title="Sorpresa" width="100%" height="500px" style="border:none;"></iframe>';
        surpriseContent.style.display = 'block';
    });

    siLink.addEventListener('click', (e) => {
        e.preventDefault();
        hideMainContent();
        surpriseContent.innerHTML = '<iframe src="https://alejandroaron.github.io/felis/feliz.html" title="Sorpresa" width="100%" height="500px" style="border:none;"></iframe>';
        surpriseContent.style.display = 'block';
    });

    inicioLink.addEventListener('click', (e) => {
        e.preventDefault();
        showMainContent();
    });

    // Evento para el botón de sorpresa (no afecta la imagen principal)
    surpriseButton.addEventListener('click', () => {
        alert('¡Sorpresa!, aquí no hay nada... sigue buscando...');
    });
});