# Supermercado — Sistema de Gestión de Inventario

Sitio web desarrollado en React para la gestión de inventario de un supermercado. Permite revisar el stock de los productos, registrar nuevos artículos y navegar entre distintas secciones del sitio usando React Router.

**Asignatura:** Desarrollo Frontend II (PFY2202) — DUOC UC
**Autor/a:** [Tu nombre y apellido]

**Actividades:**
- Semana 1 — "Utilizando tecnologías avanzadas de React en sitios web": React Router y menú inferior.
- Semana 2 — "Implementando gestión de estado en componentes frontend con React": estado global, formulario de ingreso, tabla de inventario y Tailwind CSS.

## Páginas

| Ruta | Página | Menú | Descripción |
|------|--------|------|-------------|
| `/` | Inicio | Inferior | Resumen de stock, buscador y tabla de productos con su estado (disponible, stock bajo o sin stock). |
| `/quienes-somos` | Quiénes somos | Inferior | Historia del supermercado, valores y cifras principales. |
| `/contactanos` | Contáctanos | Inferior | Datos de contacto y formulario con validación de campos. |
| `/agregar` | Agregar artículo | Superior | Formulario para ingresar nuevos artículos al inventario. |
| `/inventario` | Inventario | Superior | Tabla con todos los artículos del inventario, con búsqueda, filtro por tipo y opción de eliminar. |
| `*` | No encontrada | — | Se muestra cuando la ruta no existe. |

## Estado global

La lista de artículos se maneja con **Context API** de React, en la carpeta `src/context/`:

- `InventarioProvider` guarda la lista de artículos y expone las funciones `agregarArticulo` y `eliminarArticulo`. Envuelve toda la aplicación en `main.jsx`.
- `useInventario()` es un hook personalizado que permite a cualquier componente leer o modificar la lista.

Cada artículo contiene **nombre**, **marca**, **tipo de producto** y **cantidad**. La página *Agregar artículo* agrega elementos al estado y la página *Inventario* los lee, por lo que los cambios se reflejan de inmediato en ambas. La lista se guarda además en `localStorage` para que no se pierda al recargar la página.

## Tecnologías

- **React** — construcción de la interfaz con componentes.
- **React Router** — navegación entre páginas sin recargar el sitio (`BrowserRouter`, `Routes`, `Route`, `NavLink`).
- **Context API** — estado global de los artículos del inventario.
- **Tailwind CSS** — framework de estilos, configurado con la paleta de colores y fuentes del sitio mediante `@theme`.
- **Vite** — creación del proyecto y servidor de desarrollo.

## Funcionalidades

- Dos menús de navegación: inferior (Inicio, Quiénes somos, Contáctanos) y superior (Agregar artículo, Inventario).
- Formulario de ingreso de artículos con validación de todos los campos.
- Tabla de inventario con búsqueda por nombre o marca, filtro por tipo y eliminación con confirmación.
- Tabla de stock en el Inicio con indicadores de estado según el stock mínimo.
- Formulario de contacto con validación.
- Persistencia de los artículos en el navegador con `localStorage`.
- Diseño adaptable a pantallas de celular.

## Estructura del proyecto

```
src/
├── components/
│   ├── MenuInferior.jsx       # Menú de navegación inferior
│   └── MenuSuperior.jsx       # Menú de navegación superior (Tailwind)
├── context/
│   ├── InventarioContext.js   # Contexto, hook useInventario y tipos de producto
│   └── InventarioProvider.jsx # Estado global de los artículos
├── data/
│   └── productos.js           # Datos de ejemplo de la tabla del Inicio
├── pages/
│   ├── Home.jsx               # Inicio
│   ├── QuienesSomos.jsx       # Quiénes somos
│   ├── Contactanos.jsx        # Contáctanos
│   ├── AgregarArticulo.jsx    # Formulario de ingreso (Tailwind)
│   └── ListaInventario.jsx    # Tabla de inventario (Tailwind)
├── App.jsx                    # Definición de rutas y menús
├── App.css                    # Estilos de las páginas de la semana 1
├── index.css                  # Tailwind, paleta de colores y fuentes
└── main.jsx                   # Punto de entrada, configura BrowserRouter e InventarioProvider
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

Para volver a la lista inicial de artículos, ejecutar `localStorage.clear()` en la consola del navegador y recargar la página.

## Nota

Los datos del inventario y la información del supermercado son ficticios y se usan solo con fines académicos. El formulario de contacto valida los datos, pero no los envía a un servidor.