# Presentación sobre Go (Golang)

Una presentación web moderna, minimalista y elegante sobre el lenguaje de programación Go.

## 🏗️ Estructura del Proyecto

```
PresentationGo/
├── index.html              # Punto de entrada con carga modular
├── css/
│   └── styles.css         # Estilos personalizados para Reveal.js
├── js/
│   ├── main.js            # (Legacy - no se usa actualmente)
│   └── slides-content.js  # (Legacy - no se usa actualmente)
├── slides/
│   ├── intro.html         # Slides de Introducción (4 slides)
│   └── antecedentes.html  # Slides de Antecedentes (9 slides)
└── README.md
```

## ✨ Características

- **Diseño Modular**: Cada sección en su propio archivo HTML
- **Reveal.js Framework**: Presentación profesional con modo fullscreen
- **Layouts Avanzados**: Columnas, grids y diseños estratégicos
- **Minimalista y Formal**: Sin emojis, colores corporativos de Go
- **Responsive**: Adaptable a diferentes tamaños de pantalla

## 🚀 Cómo Usar

### Iniciar Servidor

```bash
# Desde el directorio del proyecto
python3 -m http.server 8000
```

### Abrir en Navegador

Visita: `http://localhost:8000`

### Navegación

- **Flechas ← →**: Navega entre slides
- **Espacio**: Avanza a la siguiente slide
- **F**: Modo fullscreen
- **ESC**: Vista general de todas las slides
- **S**: Modo speaker notes (si disponible)
- **Home/End**: Primera/Última slide

## 📝 Contenido

### Introducción (4 slides)
1. **Portada**: Logo y título de la presentación
2. **Visión General**: Características principales y adopción empresarial
3. **Objetivos de la Investigación**: 4 objetivos principales en grid
4. **Alcance del Estudio**: Análisis teórico y componente práctico

### Antecedentes (9 slides)
1. **El Problema (2007)**: Desafíos en Google y dilema de lenguajes
2. **Los Creadores**: Robert Griesemer, Rob Pike, Ken Thompson
3. **Contexto Tecnológico**: Estado de la industria en 2007
4. **Diseño y Visión**: Consideraciones clave e influencias
5. **Cronología**: Timeline 2007-2009-2012
6. **Go 1.0 (2012)**: Fundación estable
7. **Go 1.5 (2015)**: Reescritura completa en Go
8. **Go 1.11 (2018)**: Gestión de dependencias con módulos
9. **Go 1.18 (2022)**: Llegada de los genéricos

## 🎨 Personalización

### Agregar Nueva Sección

1. Crea un nuevo archivo en `slides/` (ej: `slides/caracteristicas.html`)
2. Sigue la estructura de las slides existentes con `<section>` tags
3. Agrega el archivo a la lista en `index.html`:
   ```javascript
   const slideFiles = [
       'slides/intro.html', 
       'slides/antecedentes.html',
       'slides/caracteristicas.html'  // Nueva sección
   ];
   ```

### Modificar Contenido

Edita directamente el archivo HTML de la sección en `slides/`:
- `slides/intro.html` - Modificar introducción
- `slides/antecedentes.html` - Modificar antecedentes

### Cambiar Estilos

Edita `css/styles.css` para personalizar:
- Colores de Go (variables CSS en `:root`)
- Layouts de columnas (`.two-column-layout`, `.content-grid`)
- Tipografía y espaciado
- Animaciones y transiciones

## 🛠️ Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Animaciones y diseño responsive
- **JavaScript ES6+**: Módulos y lógica de presentación
- **Google Fonts**: Inter y JetBrains Mono

## 🎯 Colores de Go

- **Cyan Principal**: `#00ADD8`
- **Azul Secundario**: `#5DC9E2`
- **Fondo Oscuro**: `#0a0e27`
- **Fondo Extra Oscuro**: `#050811`

## 📱 Compatibilidad

- Chrome/Edge (última versión)
- Firefox (última versión)
- Safari (última versión)
- Navegadores móviles modernos

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo.

---

**Creado con ❤️ para aprender Go**
