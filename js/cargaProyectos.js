document.addEventListener("DOMContentLoaded", function () {
  style = "";
  if (actualMode == "dark") style = "dark-mode";

  // Realizar una solicitud HTTP para cargar el archivo JSON
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var proyectos = JSON.parse(xhr.responseText).proyectos;
      var carouselHTML = "";
      // Recorrer cada proyecto y construir el HTML para el carrusel
      proyectos.forEach(function (proyecto) {
        carouselHTML += '<div class="col-lg-4 col-md-6 col-12 mb-4">';
        carouselHTML +=
          '<a href="projects/?id=' + proyecto.id + '" class="project-link">';

        carouselHTML += '<div class="card">';
        carouselHTML +=
          '<img src="images/projects/' +
          proyecto.image +
          '" class="card-img-top" alt="' +
          proyecto.project +
          '">';
        carouselHTML += `<div class="card-body projects-body ${style}">`;
        carouselHTML += '<h5 class="card-title">' + proyecto.project + "</h5>";
        carouselHTML += '<p class="card-text">' + proyecto.description + "</p>";
        carouselHTML += "</div>";
        carouselHTML += "</div>";
        carouselHTML += "</a>";

        carouselHTML += "</div>";
      });
      // Agregar el HTML al contenedor del carrusel
      document.getElementById("projectCarousel").innerHTML = carouselHTML;
    }
  };
  // Abrir la solicitud y especificar la ruta del archivo JSON
  xhr.open("GET", "../proyectos.json", true);

  xhr.send();
});
