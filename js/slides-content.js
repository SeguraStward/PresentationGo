// Contenido de las slides
const slides = [
    {
        id: 'intro',
        title: 'Introducción',
        content: `
            <div class="slide-content">
                <h1 class="slide-title">Introducción a Go</h1>
                <div class="slide-text">
                    <p>Go, también conocido como Golang, es un <strong>lenguaje de programación de código abierto y moderno</strong> diseñado para construir software simple, confiable y eficiente.</p>
                    
                    <p>Desarrollado por Google, Go combina la <strong>facilidad de escritura</strong> de los lenguajes interpretados con la <strong>eficiencia y seguridad</strong> de los lenguajes compilados.</p>
                    
                    <div class="highlight-box">
                        <h3>Características Principales</h3>
                        <ul>
                            <li>Compilación rápida</li>
                            <li>Ejecución eficiente</li>
                            <li>Facilidad de programación</li>
                            <li>Concurrencia nativa</li>
                        </ul>
                    </div>
                    
                    <p class="accent-text">Empresas líderes como <strong>Google</strong>, <strong>Netflix</strong>, <strong>Uber</strong> y <strong>SoundCloud</strong> utilizan Go para construir sistemas escalables y de alto rendimiento.</p>
                </div>
            </div>
        `
    },
    {
        id: 'antecedentes',
        title: 'Antecedentes',
        content: `
            <div class="slide-content">
                <h1 class="slide-title">Antecedentes</h1>
                <div class="slide-text">
                    <p class="subtitle">La historia de Go</p>
                    
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="year">2007</div>
                            <p>Ingenieros de Google luchando con proyectos en crecimiento...</p>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="year">2009</div>
                            <p>Primera versión pública del lenguaje</p>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="year">2012</div>
                            <p>Go 1.0 - Primera versión estable</p>
                        </div>
                    </div>
                    
                    <div class="creators-box">
                        <h3>Creadores</h3>
                        <p><strong>Robert Griesemer</strong>, <strong>Rob Pike</strong> y <strong>Ken Thompson</strong></p>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 'caracteristicas',
        title: 'Características',
        content: `
            <div class="slide-content">
                <h1 class="slide-title">Características de Go</h1>
                <div class="slide-text">
                    <div class="features-grid">
                        <div class="feature-card">
                            <h3>Simplicidad</h3>
                            <p>Sintaxis limpia y minimalista que facilita el aprendizaje y la lectura del código.</p>
                        </div>
                        
                        <div class="feature-card">
                            <h3>Concurrencia</h3>
                            <p>Goroutines y channels para manejo eficiente de tareas concurrentes.</p>
                        </div>
                        
                        <div class="feature-card">
                            <h3>Rendimiento</h3>
                            <p>Compilación a código nativo con optimizaciones avanzadas.</p>
                        </div>
                        
                        <div class="feature-card">
                            <h3>Recolección de Basura</h3>
                            <p>Gestión automática de memoria sin sacrificar rendimiento.</p>
                        </div>
                        
                        <div class="feature-card">
                            <h3>Tipado Estático</h3>
                            <p>Seguridad en tiempo de compilación con inferencia de tipos.</p>
                        </div>
                        
                        <div class="feature-card">
                            <h3>Biblioteca Estándar</h3>
                            <p>Amplia colección de paquetes para desarrollo web, redes, criptografía y más.</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 'ejemplos',
        title: 'Ejemplos Prácticos',
        content: `
            <div class="slide-content">
                <h1 class="slide-title">Ejemplos Prácticos</h1>
                <div class="slide-text">
                    <div class="code-example">
                        <h3>Hola Mundo</h3>
                        <pre><code>package main

import "fmt"

func main() {
    fmt.Println("¡Hola, Go!")
}</code></pre>
                    </div>
                    
                    <div class="code-example">
                        <h3>Goroutines - Concurrencia</h3>
                        <pre><code>package main

import (
    "fmt"
    "time"
)

func worker(id int) {
    fmt.Printf("Worker %d starting\n", id)
    time.Sleep(time.Second)
    fmt.Printf("Worker %d done\n", id)
}

func main() {
    for i := 1; i <= 5; i++ {
        go worker(i)
    }
    time.Sleep(2 * time.Second)
}</code></pre>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 'instalacion',
        title: 'Instalación',
        content: `
            <div class="slide-content">
                <h1 class="slide-title">Instalación y Primeros Pasos</h1>
                <div class="slide-text">
                    <div class="install-section">
                        <h3>Instalación en Linux/macOS</h3>
                        <pre><code>wget https://go.dev/dl/go1.21.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.21.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin</code></pre>
                    </div>
                    
                    <div class="install-section">
                        <h3>Instalación en Windows</h3>
                        <p>Descarga el instalador MSI desde <a href="https://go.dev/dl/" target="_blank">go.dev/dl</a></p>
                    </div>
                    
                    <div class="verify-section">
                        <h3>Verificar Instalación</h3>
                        <pre><code>go version</code></pre>
                    </div>
                    
                    <div class="first-project">
                        <h3>Crear tu Primer Proyecto</h3>
                        <pre><code>mkdir mi-proyecto-go
cd mi-proyecto-go
go mod init ejemplo.com/mi-proyecto
</code></pre>
                    </div>
                    
                    <p class="footer-text">Documentación completa en <a href="https://go.dev/doc/" target="_blank">go.dev/doc</a></p>
                </div>
            </div>
        `
    }
];
