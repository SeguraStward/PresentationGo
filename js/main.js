// Estado de la aplicación
let currentSlideIndex = 0;
let sidebarOpen = false;

// Inicializar la presentación
function startPresentation() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    const presentation = document.getElementById('presentation');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const navControls = document.getElementById('navControls');
    const slideCounter = document.getElementById('slideCounter');
    
    // Ocultar pantalla de bienvenida
    welcomeScreen.classList.add('hidden');
    
    // Mostrar presentación después de un delay
    setTimeout(() => {
        presentation.classList.add('active');
        sidebarToggle.classList.add('visible');
        navControls.classList.add('visible');
        slideCounter.classList.add('visible');
        
        // Cargar primera slide
        loadSlide(0);
    }, 800);
}

// Cargar slide
function loadSlide(index) {
    const slideElement = document.getElementById('currentSlide');
    const slide = slides[index];
    
    // Efecto de salida
    slideElement.classList.remove('active');
    slideElement.classList.add('exit-left');
    
    setTimeout(() => {
        // Cargar contenido
        slideElement.innerHTML = slide.content;
        
        // Efecto de entrada
        slideElement.classList.remove('exit-left');
        setTimeout(() => {
            slideElement.classList.add('active');
        }, 50);
        
        // Actualizar UI
        updateUI(index);
    }, 350);
}

// Actualizar UI
function updateUI(index) {
    currentSlideIndex = index;
    
    // Actualizar contador
    document.getElementById('currentNum').textContent = index + 1;
    document.getElementById('totalNum').textContent = slides.length;
    
    // Actualizar barra de progreso
    const progress = ((index + 1) / slides.length) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
    
    // Actualizar botones de navegación
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (index === 0) {
        prevBtn.classList.add('disabled');
    } else {
        prevBtn.classList.remove('disabled');
    }
    
    if (index === slides.length - 1) {
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.classList.remove('disabled');
    }
    
    // Actualizar navegación lateral
    updateSidebarNav(slides[index].id);
}

// Actualizar navegación lateral
function updateSidebarNav(activeId) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (item.dataset.section === activeId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Navegación
function nextSlide() {
    if (currentSlideIndex < slides.length - 1) {
        loadSlide(currentSlideIndex + 1);
    }
}

function prevSlide() {
    if (currentSlideIndex > 0) {
        loadSlide(currentSlideIndex - 1);
    }
}

function goToSection(sectionId) {
    const index = slides.findIndex(slide => slide.id === sectionId);
    if (index !== -1) {
        loadSlide(index);
        // Cerrar sidebar en móvil
        if (window.innerWidth <= 768) {
            toggleSidebar();
        }
    }
}

// Toggle sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebarOpen = !sidebarOpen;
    
    if (sidebarOpen) {
        sidebar.classList.add('active');
    } else {
        sidebar.classList.remove('active');
    }
}

// Event listeners para teclado
document.addEventListener('keydown', (e) => {
    const presentation = document.getElementById('presentation');
    if (presentation.classList.contains('active')) {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            nextSlide();
        }
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevSlide();
        }
        if (e.key === 'Escape') {
            const sidebar = document.getElementById('sidebar');
            if (sidebar.classList.contains('active')) {
                toggleSidebar();
            }
        }
    }
});

// Cerrar sidebar al hacer click fuera
document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    
    if (sidebarOpen && 
        !sidebar.contains(e.target) && 
        !sidebarToggle.contains(e.target)) {
        toggleSidebar();
    }
});

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Event listener para la pantalla de bienvenida
    const welcomeScreen = document.getElementById('welcomeScreen');
    if (welcomeScreen) {
        welcomeScreen.addEventListener('click', startPresentation);
    }
});
