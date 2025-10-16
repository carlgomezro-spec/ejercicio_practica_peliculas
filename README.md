# 🎬 Film Catalog Blockbuster

Aplicación web interactiva para gestionar un catálogo de películas.  
Permite **ver, agregar, editar, eliminar, buscar y filtrar** películas por género, con una interfaz limpia y responsive construida con **HTML, CSS y JavaScript puro**.

---

## 🚀 Características principales

- 📋 **Listado dinámico de películas** renderizado en una tabla.
- ➕ **Agregar nuevas películas** mediante un formulario validado.
- ✏️ **Editar y eliminar** registros en tiempo real.
- 🔍 **Filtro de búsqueda** por título.
- 🎭 **Filtro por género**, con normalización de acentos (ej. “Acción” = “Accion”).
- 🧩 **Diseño responsive**, con encabezado, formulario centrado y estilos personalizados.
- ⚙️ Sin dependencias externas (solo [SweetAlert2](https://sweetalert2.github.io/) opcional para alertas).

---

📚 Tecnologías utilizadas

- HTML5
- CSS3 (Flexbox, variables, responsive design)
- JavaScript ES6 Modules
- SweetAlert2 (para alertas, opcional)

🧩 Mejoras futuras

- Agregar persistencia local con localStorage.
- Animaciones suaves al renderizar la tabla.
- Validación visual del formulario.
- Filtro combinado (género + búsqueda simultánea).

## 🧠 Estructura del proyecto
📁 film-catalog/
│
├── index.html
├── style.css
├── films.js
├── app.js
└── assets/
├── mad-max.jpg
├── inception.jpg
├── pride-prejudice.jpg
├── la-la-land.jpg
├── hereditary.jpg
├── the-conjuring.jpg
├── the-grand-budapest-hotel.jpg
└── superbad.jpg


---

🧪 Validaciones

Año: Solo entre 1800 y el año actual.

Descripción: Hasta 200 caracteres, sin símbolos extraños.

Si hay un error, se muestra un SweetAlert2 con el mensaje correspondiente.

💬 Uso

Clona o descarga el repositorio.

Asegúrate de tener los archivos en la misma carpeta.

Abre index.html en tu navegador.

Interactúa con:

El menú de géneros para filtrar películas.

El campo de búsqueda para filtrar por título.

El formulario para agregar nuevas películas.
