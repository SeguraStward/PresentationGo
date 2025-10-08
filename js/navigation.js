// Sistema de navegación por zonas de clic

document.addEventListener('DOMContentLoaded', function() {
    // Crear indicadores visuales de navegación
    const leftIndicator = document.createElement('div');
    leftIndicator.className = 'nav-indicator nav-indicator-left';
    leftIndicator.innerHTML = '<span>←</span>';
    
    const rightIndicator = document.createElement('div');
    rightIndicator.className = 'nav-indicator nav-indicator-right';
    rightIndicator.innerHTML = '<span>→</span>';
    
    document.body.appendChild(leftIndicator);
    document.body.appendChild(rightIndicator);
    
    // Mostrar/ocultar indicadores según la posición del mouse
    document.addEventListener('mousemove', function(event) {
        // Ignorar si hay un modal abierto
        const modalOpen = document.querySelector('.modal-overlay.active') || 
                         document.querySelector('.feature-modal[style*="display: block"]');
        if (modalOpen) {
            leftIndicator.style.opacity = '0';
            rightIndicator.style.opacity = '0';
            return;
        }
        
        const windowWidth = window.innerWidth;
        const mouseX = event.clientX;
        
        const leftZone = windowWidth * 0.3;
        const rightZone = windowWidth * 0.7;
        
        // Mostrar indicador izquierdo
        if (mouseX < leftZone) {
            leftIndicator.style.opacity = '0.5';
            rightIndicator.style.opacity = '0';
        } 
        // Mostrar indicador derecho
        else if (mouseX > rightZone) {
            leftIndicator.style.opacity = '0';
            rightIndicator.style.opacity = '0.5';
        } 
        // Zona central: ocultar ambos
        else {
            leftIndicator.style.opacity = '0';
            rightIndicator.style.opacity = '0';
        }
    });
    
    // Ocultar indicadores cuando el mouse sale de la ventana
    document.addEventListener('mouseleave', function() {
        leftIndicator.style.opacity = '0';
        rightIndicator.style.opacity = '0';
    });
    
    // Efecto de clic en los indicadores
    leftIndicator.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(-5px)';
    });
    
    leftIndicator.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
    
    rightIndicator.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
    });
    
    rightIndicator.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});
