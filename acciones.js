/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
console.log(document.querySelector(".foto2"));
document.querySelector(".foto2").addEventListener("click", myFunction);

function myClass() {
  document.getElementById("myDropdownClases").classList.toggle("show");
}

function myRaces() {
  document.getElementById("myDropdownRazas").classList.toggle("show");
}

document.getElementById("btnirFicha").addEventListener("click", function () {
  // Redirigir al otro index
  window.location.href = "../Ficha.html";
});

//----------------------------------------------------------------------

// Función para cargar el contenido HTML en el div "content"
function loadPage(page) {
  fetch(page)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((html) => {
      console.log(html);
      document.getElementById("content").innerHTML = html;
    })
    .catch((error) => {
      console.error("Error fetching the page:", error);
    });
}

// Funciones para cargar páginas específicas al hacer clic en los botones
function loadHome() {
  window.location.hash = "home";
  handleRoute();
}
function loadAbout() {
  window.location.hash = "about";
  handleRoute();
}

function loadContact() {
  window.location.hash = "contact";
  handleRoute();
}

function loadInfo() {
  window.location.hash = "info";
  setInfo("info");
}

function loadClases() {
  window.location.hash = "claes";
  setInfo("claes");
}

function loadRaces() {
  window.location.hash = "Races";
  setInfo("Races");
}

function loadBarbarian() {
  window.location.hash = "Barbarian";
  setInfo("Barbarian");
}

function setInfo(info) {
  let result = {};
  // Agregar Fetch a la API
  if (info === "info") {
    result = { titulo: "Informacion", img: "Imagen informativa" };
  } else {
    result = { titulo: "Barbarian", img: "barbaro.jpg" };
  }

  // Cambiar ese IF por llamada a la API

  const title = document.querySelector("#title");
  const img = document.querySelector("#img");

  title.innerHTML = result.titulo;
  img.innerHTML = result.img;
}

// Función para manejar el cambio de rutas
function handleRoute() {
  var path = window.location.hash.substr(1);
  if (path === "" || path === "/") {
    path = "pages/home.html"; // Página predeterminada o página de inicio
  } else {
    path = "pages/" + path + ".html";
  }
  loadPage(path);
}

// Evento para manejar el cambio de rutas al cargar la página
// Aquí puedes invocar handleRoute() para cargar la página predeterminada al inicio
//   window.addEventListener("load", handleRoute);
