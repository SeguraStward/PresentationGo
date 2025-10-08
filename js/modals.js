// Funciones para manejar modales en las slides de Ventajas y Desventajas

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        // Prevenir que Reveal.js navegue mientras el modal está abierto
        Reveal.configure({ keyboard: false });
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        // Restaurar navegación de Reveal.js
        Reveal.configure({ keyboard: true });
    }
}

// Funciones para modales de características
function openFeatureModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        // Prevenir navegación de Reveal.js
        Reveal.configure({ keyboard: false });
        // Scroll al inicio del modal
        const modalContent = modal.querySelector('.feature-modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
    }
}

function closeFeatureModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        // Restaurar navegación de Reveal.js
        Reveal.configure({ keyboard: true });
    }
}

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        // Cerrar modales antiguos
        const activeModal = document.querySelector('.modal-overlay.active');
        if (activeModal) {
            activeModal.classList.remove('active');
            Reveal.configure({ keyboard: true });
        }
        
        // Cerrar modales de características
        const openFeatureModal = document.querySelector('.feature-modal[style*="display: block"]');
        if (openFeatureModal) {
            openFeatureModal.style.display = 'none';
            Reveal.configure({ keyboard: true });
        }
    }
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('feature-modal')) {
        event.target.style.display = 'none';
        Reveal.configure({ keyboard: true });
    }
});

// Prevenir que los clics en las tarjetas avancen la presentación
document.addEventListener('DOMContentLoaded', function() {
    const interactiveCards = document.querySelectorAll('.interactive-card');
    interactiveCards.forEach(card => {
        card.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
    
    // Prevenir que clics en tarjetas clickeables avancen slides
    const clickableFeatures = document.querySelectorAll('.clickable-feature');
    clickableFeatures.forEach(card => {
        card.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
    
    // Prevenir que clics en el contenido del modal avancen slides
    const modalContents = document.querySelectorAll('.feature-modal-content');
    modalContents.forEach(content => {
        content.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
    
    // Navegación por zonas de clic (izquierda/derecha)
    const revealDiv = document.querySelector('.reveal');
    if (revealDiv) {
        revealDiv.addEventListener('click', function(event) {
            // Ignorar si hay un modal abierto
            const modalOpen = document.querySelector('.modal-overlay.active') || 
                             document.querySelector('.feature-modal[style*="display: block"]');
            if (modalOpen) {
                return;
            }
            
            // Ignorar si se hizo clic en un elemento interactivo
            if (event.target.closest('.interactive-card') || 
                event.target.closest('.clickable-feature') ||
                event.target.closest('.feature-modal-content') ||
                event.target.closest('button') ||
                event.target.closest('a')) {
                return;
            }
            
            // Obtener el ancho de la ventana y la posición del clic
            const windowWidth = window.innerWidth;
            const clickX = event.clientX;
            
            // Definir zona de navegación (30% a cada lado)
            const leftZone = windowWidth * 0.3;
            const rightZone = windowWidth * 0.7;
            
            // Navegar según la zona
            if (clickX < leftZone) {
                // Zona izquierda: ir atrás
                Reveal.left();
            } else if (clickX > rightZone) {
                // Zona derecha: ir adelante
                Reveal.right();
            }
            // Zona central (30%-70%): no hacer nada para evitar navegación accidental
        });
    }
});
