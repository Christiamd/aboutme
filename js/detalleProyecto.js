var urlParams = new URLSearchParams(window.location.search);
var idp = parseInt(urlParams.get("id"));
if (idp < 1 || isNaN(idp)) window.location.href = "./..";

const urlProyectos = "./../proyectos.json";

fetch(urlProyectos)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    filter = data.proyectos.filter((item) => item.id == idp);

    let imagen = document.getElementById("image");
    imagen.src = "./../images/projects/" + filter[0].image;

    let tittle = document.getElementById("tittle");
    tittle.innerHTML = filter[0].project;

    let description = document.getElementById("description");
    description.innerHTML = filter[0].description;

    let tecnology = document.getElementById("tecnologias");
    tecnology.innerHTML = filter[0].tecnologies;

    let github = document.getElementById("github");
    if (filter[0].github == null || filter[0].github == undefined)
      link = "https://github.com/Christiamd?tab=repositories";
    else link = filter[0].github;
    github.href = link;
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch
    console.error("Fetch error:", error);
    //window.location.href = "./..";
  });
