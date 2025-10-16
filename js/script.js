import { films } from './films.js';

// Función para renderizar películas en una tabla
function renderFilmsTable(filmsData) {
  const container = document.getElementById("films");
  container.innerHTML = ""; // limpiar antes de renderizar

  // Crear tabla
  const table = document.createElement("table");
  table.border = "1";
  table.style.width = "100%";
  table.style.borderCollapse = "collapse";

  // Crear encabezado
  const header = `
    <thead>
      <tr>
        <th>Título</th>
        <th>Año</th>
        <th>Descripción</th>
        <th>URL</th>
        <th>Género</th>
        <th>Acciones</th>
      </tr>
    </thead>
  `;
  table.innerHTML = header;

  // Crear cuerpo de la tabla
  const tbody = document.createElement("tbody");

  filmsData.forEach((film, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="${film.url}"</img></td>
      <td>${film.title}</td>
      <td>${film.year}</td>
      <td>${film.description}</td>
      <td>${film.gender}</td>
      <td>
        <button class="delete-button">🗑️</button>
        <button class="edit-button">✏️</button>
      </td>
    `;

    // Borrar película
    row.querySelector(".delete-button").addEventListener("click", () => {
      filmsData.splice(index, 1);
      renderFilmsTable(filmsData);
    });

    // Editar película
    row.querySelector(".edit-button").addEventListener("click", () => {
      const newTitle = prompt("Nuevo título:", film.title);
      const newYear = prompt("Nuevo año:", film.year);
      const newDesc = prompt("Nueva descripción:", film.description);
      const newUrl = prompt("Nueva URL:", film.url);
      const newGenre = prompt("Nuevo género:", film.gender);

      // Actualizar valores
      film.title = newTitle.trim();
      film.year = parseInt(newYear);
      film.description = newDesc.trim();
      film.url = newUrl.trim();
      film.gender = newGenre.trim();

      renderFilmsTable(filmsData);
    });

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  container.appendChild(table);
}

// Agregar nuevas películas desde el formulario
const form = document.getElementById("film-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("name").value.trim();
  const year = document.getElementById("year").value.trim();
  const description = document.getElementById("description").value.trim();
  const url = document.getElementById("url").value.trim();
  const gender = document.getElementById("gender").value;

  // Validaciones REGEX
  const yearRegex = /^(18[0-9]{2}|19[0-9]{2}|20[0-1][0-9]|202[0-9])$/;
  if (!yearRegex.test(year) || year > new Date().getFullYear()) {
    Swal.fire("(Por favor, introduce un año válido (entre 1800 y el actual).");
    return;
  }

  const descriptionRegex = /^[\wÀ-ÿ0-9\s.,!?:-]{1,200}$/;
  if (!descriptionRegex.test(description)) {
    Swal.fire("Por favor, introduce una descripción válida (máx. 200 caracteres).");
    return;
  }

  // Crear nueva película
  const newFilm = { title, year: parseInt(year), description, url, gender };

  films.push(newFilm);
  renderFilmsTable(films);
  form.reset();
});

//Filtro por genero
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const generoSeleccionado = this.textContent.trim().toLowerCase();

    const pelisFiltradas = films.filter(film => film.gender.toLowerCase() === generoSeleccionado);

    navLinks.forEach(l => l.classList.remove("activo"));
    this.classList.add("activo");

    renderFilmsTable(pelisFiltradas);
  });
});

// Reset filtro al clicar el logo
const logo = document.querySelector(".logo img");
logo.addEventListener("click", function() {
  renderFilmsTable(films);
});

// Filtro de búsqueda
const searchInput = document.getElementById("search");

// Escuchar el evento cuando el usuario escribe
searchInput.addEventListener("input", function() {
  const textoBuscado = this.value.trim().toLowerCase();

  const peliculasFiltradas = [];

  // Recorrer todas las películas y comparar título
  for (let i = 0; i < films.length; i++) {
    if (films[i].title.toLowerCase().includes(textoBuscado)) {
      peliculasFiltradas.push(films[i]);
    }
  }

  // Renderizar las películas filtradas
  renderFilmsTable(peliculasFiltradas);
});


// Render inicial
renderFilmsTable(films);