# 🌿 SolucionArte — Desarrollo & Automatización a la Medida

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.1.0-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

> **"Construimos la herramienta que tu negocio realmente necesita."**

**SolucionArte** es una aplicación web y landing page de alta conversión desarrollada para un estudio de consultoría independiente en software, automatización de procesos e inteligencia artificial aplicada a PyMEs y profesionales no técnicos.

---

## ✨ Características Principales

- 🎛️ **Panel de Control Interactivo (Hero Widget)**:
  Simulación en tiempo real de automatizaciones en ejecución, switch de encendido/pausa, métricas de eficiencia (+85%) y feed de eventos en vivo.
- 📊 **Calculadora Interactiva de ROI y Ahorro de Tiempo**:
  Los visitantes pueden deslizar controles para indicar cuántos colaboradores tienen y cuántas horas pierden a la semana. Calcula automáticamente el tiempo recuperado e inversión/ahorro anual en USD.
- 🛠️ **Catálogo de Capacidades**:
  Tarjetas con modales interactivos que detallan el alcance de cada servicio (Software a Medida, Webs de Alta Conversión, Workflows Automáticos y Agentes de IA 24/7) junto con su stack tecnológico.
- 🛣️ **Proceso Transparente en 4 Pasos**:
  Visualizador interactivo de metodología de trabajo (Charla Diagnóstico ➔ Propuesta Clara ➔ Desarrollo Ágil ➔ Entrega y Acompañamiento) con entregables y tiempos claros.
- 💬 **Integración Avanzada con WhatsApp**:
  Formularios con prellenado de mensajes dinámicos, selección de tipo de proyecto, botón de acción rápida y feedback visual con confeti festivo (`canvas-confetti`).
- 📱 **Diseño 100% Adaptable & Responsive**:
  Navegación pegajosa (*sticky*) con menú tipo *drawer* lateral para dispositivos móviles.

---

## 🎨 Sistema de Diseño (Organic Professional)

Basado en la filosofía de **Profesionalismo Cálido y Cercano**:

| Elemento | Especificación |
| :--- | :--- |
| **Color Principal (Bosque)** | `#0f5238` |
| **Color Secundario (Sage)** | `#2d6a4f` |
| **Fondo Base (Crema Cálido)** | `#faf9f7` |
| **Superficie de Tarjetas** | `#ffffff` / `#f4f3f1` |
| **Tipografía Titulares (H1-H3)** | **Outfit** (Google Fonts) |
| **Tipografía Cuerpo & Etiquetas** | **Plus Jakarta Sans** (Google Fonts) |

---

## 🛠️ Stack Tecnológico

- **Core**: [React 19](https://react.dev/) + [JSX](https://reactjs.org/)
- **Build Tool / Bundler**: [Vite 6](https://vite.dev/)
- **Estilos & Utility-first CSS**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Iconografía**: [Lucide React](https://lucide.dev/)
- **Efectos Visuales**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Control de Versiones**: Git & GitHub

---

## 📁 Estructura del Proyecto

```text
solucionarte/
├── public/                 # Archivos públicos y favicon
├── src/
│   ├── components/         # Componentes modulares de la interfaz
│   │   ├── Navbar.jsx            # Barra de navegación pegajosa y drawer móvil
│   │   ├── Hero.jsx              # Sección de bienvenida y propuesta de valor
│   │   ├── DashboardWidget.jsx   # Widget interactivo simulador de automatizaciones
│   │   ├── Philosophy.jsx       # Sección "Primero Escuchar, Luego Desarrollar"
│   │   ├── DiagnosticMatrix.jsx # Matriz de dolores + Calculadora ROI
│   │   ├── Capabilities.jsx     # Catálogo de servicios con modales técnicos
│   │   ├── Process.jsx          # Visualizador interactivo de metodología
│   │   ├── CTASection.jsx       # Cierre persuasivo y selector de opciones rápido
│   │   ├── WhatsAppModal.jsx    # Modal interactivo con generador de mensajes WA
│   │   └── Footer.jsx           # Pie de página y modales de Privacidad/Términos
│   ├── App.jsx             # Componente principal ensamblador y estado del modal
│   ├── index.css           # Configuración de Tailwind CSS v4 y tokens de diseño
│   └── main.jsx            # Punto de entrada de React 19
├── index.html              # HTML5 con fuentes y metadatos SEO
├── package.json            # Dependencias y scripts de npm
├── vite.config.js          # Configuración del servidor y plugins de Vite
└── README.md               # Documentación del proyecto
```

---

## 🚀 Instalación y Uso Local

### Prerrequisitos
Asegúrate de tener instalado **Node.js** (versión 18 o superior) y **npm**.

```bash
node -v
npm -v
```

### Pasos para ejecutar

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/Alvarog0218/solucionarte.git
   cd solucionarte
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Abre tu navegador en `http://localhost:3000` para ver la aplicación en vivo.

4. **Compilar para producción**:
   ```bash
   npm run build
   ```

5. **Previsualizar la compilación de producción**:
   ```bash
   npm run preview
   ```

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo para más información.

---

Desarrollado con ❤️ para **SolucionArte**.
