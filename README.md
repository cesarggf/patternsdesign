# Patrones de Diseño GoF — Referencia en Español

Sitio estático con los 23 patrones de diseño clásicos del libro *Design Patterns* (Gang of Four), documentados completamente en español.

## 🌐 Demo

Publica el sitio en GitHub Pages y accede en:  
`https://<tu-usuario>.github.io/<nombre-del-repo>/`

## 📦 Contenido

Cada patrón incluye:
- **Propósito** — qué problema resuelve
- **Descripción** — cómo funciona
- **Casos de uso** — dos ejemplos prácticos reales
- **Código** — implementación en JavaScript y Java
- **Diagrama** — diagrama de clases o estados con Mermaid
- **Cuándo NO usar** — antipatrones y advertencias

## 🗂 Patrones incluidos

### Creacionales (5)
| Patrón | Descripción |
|---|---|
| Singleton | Una única instancia global |
| Factory Method | Subclases deciden qué instanciar |
| Abstract Factory | Familias de objetos relacionados |
| Builder | Construcción paso a paso |
| Prototype | Creación por clonación |

### Estructurales (7)
| Patrón | Descripción |
|---|---|
| Adapter | Traducción entre interfaces incompatibles |
| Bridge | Abstracción desacoplada de implementación |
| Composite | Estructuras árbol parte-todo |
| Decorator | Extensión dinámica de funcionalidad |
| Facade | Interfaz simplificada a subsistema complejo |
| Flyweight | Compartición para eficiencia de memoria |
| Proxy | Control de acceso a otro objeto |

### Comportamiento (11)
| Patrón | Descripción |
|---|---|
| Chain of Responsibility | Cadena de manejadores de solicitudes |
| Command | Encapsular acciones como objetos |
| Iterator | Recorrido sin exponer estructura interna |
| Mediator | Comunicación centralizada entre objetos |
| Memento | Captura y restauración de estado |
| Observer | Notificación automática a dependientes |
| State | Comportamiento variable según estado |
| Strategy | Algoritmos intercambiables en tiempo de ejecución |
| Template Method | Esqueleto de algoritmo con pasos variables |
| Visitor | Operaciones sobre jerarquía sin modificar clases |
| Interpreter | Gramática e intérprete para un lenguaje |

## 🚀 Publicar en GitHub Pages

1. Crea un repositorio en GitHub
2. Sube todos los archivos de esta carpeta al branch `main`
3. Ve a **Settings → Pages → Source → Deploy from branch → main → / (root)**
4. En unos segundos el sitio estará disponible en la URL indicada

## 🛠 Tecnologías

- HTML5 / CSS3 / JavaScript vanilla — sin dependencias de build
- [Mermaid.js](https://mermaid.js.org/) — diagramas declarativos (cargado por CDN)
- Compatible con GitHub Pages, Netlify, Vercel o cualquier servidor de archivos estáticos

## 📁 Estructura

```
├── index.html          # Página principal con índice de los 23 patrones
├── css/
│   └── estilos.css     # Estilos globales
└── patrones/
    ├── singleton.html
    ├── factory-method.html
    ├── abstract-factory.html
    ├── builder.html
    ├── prototype.html
    ├── adapter.html
    ├── bridge.html
    ├── composite.html
    ├── decorator.html
    ├── facade.html
    ├── flyweight.html
    ├── proxy.html
    ├── chain-of-responsibility.html
    ├── command.html
    ├── iterator.html
    ├── mediator.html
    ├── memento.html
    ├── observer.html
    ├── state.html
    ├── strategy.html
    ├── template-method.html
    ├── visitor.html
    └── interpreter.html
```
