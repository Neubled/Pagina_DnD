const URL = "http://www.dnd5eapi.co/api"; //carga de api

let options = document.getElementById("myDropdownSerch").children;
options = [...options];

//funcion de creacion para el dropdown
function myDropdown_opt() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//funcion de evento de dropdown
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

document.querySelector(".foto2").addEventListener("click", myDropdown_opt);

//funcion de creacion para el dropdown (clases)
function myClass() {
  document.getElementById("myDropdownClases").classList.toggle("show");
}
//funcion de creacion para el dropdown (razas)
function myRaces() {
  document.getElementById("myDropdownRazas").classList.toggle("show");
}

const btnirFicha = document.getElementById("btnirFicha");
if (btnirFicha) {
  document.getElementById("btnirFicha").addEventListener("click", function () {
    // Redirigir al otro index
    window.location.href = "/pages/Ficha.html"; //redireccion a pestaña de ficha
  });
}

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
      document.getElementById("content").innerHTML = html;
    })
    .catch((error) => {
      console.error("Error fetching the page:", error);
    });
}

// Función para manejar el cambio de rutas
function handleRoute() {
  var path = window.location.hash.substr(1);

  if (path === "" || path === "/") {
    path = "/pages/home.html"; // Pestaña predeterminada o página de inicio
  } else {
    path = "pages/" + path + ".html";
  }
  loadPage(path);
}

// Función para manejar el cambio de rutas
function handleAll_Clases() {
  let hash = window.location.hash.substr(1);
  let path = `/pages/pg2.html#${hash}`; // Pestaña a info de clases

  if (location.href.includes("/pages/pg2.html")) {
    location.reload();
  } else {
    location.href = path;
  }
}

// Función para manejar el cambio de rutas
function handleAll_Razas() {
  let hash = window.location.hash.substr(1);

  let path = `/pages/pg2_races.html#${hash}`; //Pestaña a info de razas

  if (location.href.includes("/pages/pg2_races.html")) {
    location.reload();
  } else {
    location.href = path;
  }
}

// Función para cargar las clases
function loadclases() {
  const btns = [...document.querySelectorAll(".btnC")];

  btns.map((btnC) => {
    btnC.addEventListener("click", () => {
      window.location.hash = btnC.id;
      handleAll_Clases("");
    });
  });
}
loadclases();

// Función para cargar las razas
function loadraces() {
  const btns = [...document.querySelectorAll(".btnR")];

  btns.map((btnR) => {
    btnR.addEventListener("click", () => {
      window.location.hash = btnR.id;
      handleAll_Razas("");
    });
  });
}
loadraces();

//funcion para volver al inicio
const btnirinicio = document.getElementById("btnirinicio");
if (btnirinicio) {
  document.getElementById("btnirinicio").addEventListener("click", function () {
    // Redirigir al otro index
    window.location.href = "/index.html";
  });
}

//buscador
document.getElementsByClassName("buscador")[0].onkeyup = function (e) {
  e.preventDefault();
  document.getElementById("myDropdownSerch").classList.add("show");

  const value = e.target.value;
  options.forEach((opt) => {
    const real = document.getElementById(opt.id);

    if (!opt.innerHTML.toLowerCase().startsWith(value.toLowerCase())) {
      real.classList.add("hidden");
    } else {
      real.classList.remove("hidden");
    }
    if (value === "") {
      real.classList.remove("hidden");
    }
  });
};

document
  .getElementsByClassName("buscador")[0]
  .addEventListener("dblclick", function (e) {
    e.preventDefault();
    document.getElementById("myDropdownSerch").classList.add("show");
  });
