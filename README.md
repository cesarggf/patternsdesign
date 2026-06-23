# Patrones de Diseño — Referencia en Español

Sitio estático con **40 patrones de diseño** documentados completamente en español: los 23 patrones clásicos GoF, 9 patrones de integración (EIP) y 8 patrones de arquitectura.

## 🌐 Demo

Publica en GitHub Pages y accede en:
`https://<tu-usuario>.github.io/<nombre-del-repo>/`

## 📦 Contenido de cada página

- **Propósito** — qué problema resuelve
- **Descripción** — cómo funciona
- **Casos de uso** — dos ejemplos prácticos reales
- **Código** — implementación en JavaScript y Java (con tabs)
- **Diagrama** — diagrama de clases, flujo o estados con Mermaid
- **Software que lo implementa** — frameworks y herramientas reales
- **Cuándo NO usar** — antipatrones y advertencias

---

## 🗂 Patrones incluidos

### Creacionales GoF (5)
| Patrón | Descripción |
|---|---|
| Singleton | Una única instancia global |
| Factory Method | Subclases deciden qué instanciar |
| Abstract Factory | Familias de objetos relacionados |
| Builder | Construcción paso a paso |
| Prototype | Creación por clonación |

### Estructurales GoF (7)
| Patrón | Descripción |
|---|---|
| Adapter | Traducción entre interfaces incompatibles |
| Bridge | Abstracción desacoplada de implementación |
| Composite | Estructuras árbol parte-todo |
| Decorator | Extensión dinámica de funcionalidad |
| Facade | Interfaz simplificada a subsistema complejo |
| Flyweight | Compartición para eficiencia de memoria |
| Proxy | Control de acceso a otro objeto |

### Comportamiento GoF (11)
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

### Integración — EIP (9)
| Patrón | Descripción |
|---|---|
| Message Channel | Canal de mensajes que desacopla emisor y receptor |
| Pipes and Filters | Pipeline de procesamiento con filtros independientes |
| Message Router | Enrutamiento de mensajes por contenido |
| Message Translator | Transformación de formato entre sistemas |
| Publish-Subscribe | Difusión a múltiples suscriptores |
| Dead Letter Channel | Canal para mensajes no procesables |
| Saga | Transacciones distribuidas con compensación |
| API Gateway | Punto de entrada único para microservicios |
| Correlation ID | Rastreo de flujos distribuidos |

### Arquitectura (8)
| Patrón | Descripción |
|---|---|
| MVC | Model-View-Controller |
| MVVM | Model-View-ViewModel con data-binding |
| Arquitectura en Capas | Separación en capas horizontales (N-Tier) |
| Hexagonal | Ports & Adapters — core aislado de infraestructura |
| CQRS | Separación de modelos de lectura y escritura |
| Event Sourcing | Estado como log inmutable de eventos |
| Microservicios | Servicios pequeños e independientes |
| Orientada a Eventos | Comunicación asíncrona mediante eventos |

---

## 🚀 Publicar en GitHub Pages

1. Crea un repositorio en GitHub
2. Sube todo el contenido de esta carpeta al branch `main`
3. Ve a **Settings → Pages → Source → Deploy from branch → main → / (root)**
4. El sitio estará disponible en la URL indicada en unos segundos

## 🛠 Tecnologías

- HTML5 / CSS3 / JavaScript vanilla — sin dependencias de build
- [Mermaid.js](https://mermaid.js.org/) — diagramas declarativos (CDN)
- Compatible con GitHub Pages, Netlify, Vercel o cualquier servidor de archivos estáticos

## 📁 Estructura

```
├── index.html
├── README.md
├── css/
│   └── estilos.css
└── patrones/
    ├── (23 patrones GoF)
    ├── (9 patrones de integración)
    └── (8 patrones de arquitectura)
```
