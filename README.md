# Supermercado — Sistema de Gestión de Inventario

Sitio web desarrollado en React para la gestión de inventario de un supermercado. Permite revisar el estado del stock de los productos y navegar entre distintas secciones del sitio usando React Router.

**Asignatura:** Desarrollo Frontend II (PFY2202) — DUOC UC
**Autor/a:** Emilia Acevedo

## Páginas

| Ruta | Página | Descripción |
|------|--------|-------------|
| `/` | Inicio | Inventario con resumen de stock, buscador y tabla de productos con su estado (disponible, stock bajo o sin stock). |
| `/quienes-somos` | Quiénes somos | Historia del supermercado, valores y cifras principales. |
| `/contactanos` | Contáctanos | Datos de contacto y formulario con validación de campos. |
| `*` | No encontrada | Se muestra cuando la ruta no existe. |

La navegación se realiza mediante un menú inferior fijo, visible en todas las páginas.

## Tecnologías

- **React** — construcción de la interfaz con componentes.
- **React Router** — navegación entre páginas sin recargar el sitio (`BrowserRouter`, `Routes`, `Route`, `NavLink`).
- **Vite** — creación del proyecto y servidor de desarrollo.
- **HTML, CSS y JavaScript**.

## Funcionalidades

- Navegación entre tres páginas con React Router y página 404 para rutas inexistentes.
- Menú inferior que destaca la página activa.
- Tabla de inventario con buscador por nombre o categoría.
- Indicadores de estado de stock calculados según el stock mínimo de cada producto.
- Formulario de contacto con validación de nombre, correo y mensaje.
- Diseño adaptable a pantallas de celular.

## Estructura del proyecto

```
src/
├── components/
│   └── MenuInferior.jsx   # Menú de navegación inferior
├── data/
│   └── productos.js       # Datos de ejemplo del inventario
├── pages/
│   ├── Home.jsx           # Página de inicio (inventario)
│   ├── QuienesSomos.jsx   # Página Quiénes somos
│   └── Contactanos.jsx    # Página Contáctanos
├── App.jsx                # Definición de rutas
├── App.css                # Estilos de las páginas
├── index.css              # Estilos globales, fuentes y paleta de colores
└── main.jsx               # Punto de entrada, configura BrowserRouter
```

## Cómo ejecutar el proyecto

Requisitos: tener instalado [Node.js](https://nodejs.org/) (versión LTS).

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/[tu-usuario]/supermercado-[nombre]-[apellido]-pfy2202.git
   ```
2. Entrar a la carpeta del proyecto:
   ```bash
   cd supermercado-[nombre]-[apellido]-pfy2202
   ```
3. Instalar las dependencias:
   ```bash
   npm install
   ```
4. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abrir en el navegador la dirección que aparece en la terminal (por defecto `http://localhost:5173`).

## Nota

Los datos del inventario y la información del supermercado son ficticios y se usan solo con fines académicos. El formulario de contacto valida los datos, pero no los envía a un servidor.