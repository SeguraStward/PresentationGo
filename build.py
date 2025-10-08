#!/usr/bin/env python3
"""
Script para construir presentation.html desde archivos modulares
"""

def build_presentation():
    # Leer slides modulares
    with open('slides/intro.html', 'r', encoding='utf-8') as f:
        intro_slides = f.read()
    
    with open('slides/antecedentes.html', 'r', encoding='utf-8') as f:
        antecedentes_slides = f.read()
    
    with open('slides/analisis.html', 'r', encoding='utf-8') as f:
        analisis_slides = f.read()
    
    with open('slides/sintaxis.html', 'r', encoding='utf-8') as f:
        sintaxis_slides = f.read()
    
    with open('slides/caracteristicas.html', 'r', encoding='utf-8') as f:
        caracteristicas_slides = f.read()
    
    with open('slides/ventajas-desventajas.html', 'r', encoding='utf-8') as f:
        ventajas_slides = f.read()
    
    with open('slides/futuro.html', 'r', encoding='utf-8') as f:
        futuro_slides = f.read()
    
    with open('slides/instalacion.html', 'r', encoding='utf-8') as f:
        instalacion_slides = f.read()
    
    with open('slides/conclusion.html', 'r', encoding='utf-8') as f:
        conclusion_slides = f.read()
    
    # Combinar todas las slides
    all_slides = intro_slides + '\n' + antecedentes_slides + '\n' + analisis_slides + '\n' + sintaxis_slides + '\n' + caracteristicas_slides + '\n' + ventajas_slides + '\n' + futuro_slides + '\n' + instalacion_slides + '\n' + conclusion_slides
    
    # Crear el HTML completo
    html = f'''<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Investigación sobre Go - Presentación</title>
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/reveal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/theme/black.css">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div class="reveal">
        <div class="slides">
{all_slides}
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/dist/reveal.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@4.5.0/plugin/highlight/highlight.js"></script>
    <script src="js/modals.js"></script>
    <script src="js/navigation.js"></script>
    
    <script>
        Reveal.initialize({{
            hash: true,
            progress: true,
            slideNumber: 'c/t',
            showSlideNumber: 'all',
            transition: 'slide',
            backgroundTransition: 'fade',
            controlsLayout: 'bottom-right',
            controlsBackArrows: 'faded',
            width: 1280,
            height: 720,
            margin: 0.1,
            center: true,
            plugins: [ RevealHighlight ]
        }});
    </script>
</body>
</html>'''
    
    # Guardar presentation.html
    with open('presentation.html', 'w', encoding='utf-8') as f:
        f.write(html)
    
    # Contar slides
    intro_count = intro_slides.count('<section')
    antecedentes_count = antecedentes_slides.count('<section')
    analisis_count = analisis_slides.count('<section')
    sintaxis_count = sintaxis_slides.count('<section')
    caracteristicas_count = caracteristicas_slides.count('<section')
    ventajas_count = ventajas_slides.count('<section')
    futuro_count = futuro_slides.count('<section')
    instalacion_count = instalacion_slides.count('<section')
    conclusion_count = conclusion_slides.count('<section')
    total_count = intro_count + antecedentes_count + analisis_count + sintaxis_count + caracteristicas_count + ventajas_count + futuro_count + instalacion_count + conclusion_count
    
    print('✓ presentation.html generado exitosamente')
    print('✓ Slides incluidas:')
    print(f'  - Introducción ({intro_count} slides)')
    print(f'  - Antecedentes ({antecedentes_count} slides)')
    print(f'  - Análisis del Lenguaje ({analisis_count} slides)')
    print(f'  - Sintaxis y Conceptos ({sintaxis_count} slides)')
    print(f'  - Características ({caracteristicas_count} slides)')
    print(f'  - Ventajas y Desventajas ({ventajas_count} slides)')
    print(f'  - El Futuro de Go ({futuro_count} slides)')
    print(f'  - Instalación de Go ({instalacion_count} slides)')
    print(f'  - Conclusiones ({conclusion_count} slides)')
    print(f'  TOTAL: {total_count} slides')
    print('→ Abre http://localhost:8000/presentation.html')

if __name__ == '__main__':
    build_presentation()
