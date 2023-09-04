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

const loadClass = () => {
  const hash = window.location.hash;

  const aux = {};
};

let objet = {
  barbarian: "clases/barbaro.jpg",
  bard: "clases/bardo.jpg",
  cleric: "clases/clerigo.jpg",
  druid: "clases/druida.jpg",
  fighter: "clases/luchador.jpg",
  monk: "clases/monje.jpg",
  paladin: "clases/paladin.jpg",
  ranger: "clases/ranger.jpg",
  rogue: "clases/picaro.jpg",
  sorcerer: "clases/sorcerer.jpg",
  warlock: "clases/warlock.jpg",
  wizard: "clases/mago.jpg",
};

loadClass();

function loadAct() {
  const hash = window.location.hash.substr(1);
  setInfo(hash);
}

async function setInfo(info) {
  let result = {};
  // Agregar Fetch a la API

  const response = await fetch("https://www.dnd5eapi.co/api/classes/" + info);
  const data = await response.json();
  console.log(data);

  // Cambiar ese IF por llamada a la API
  img.src = objet[hash];

  const title = document.querySelector("#title");
  const img = document.querySelector("#img");

  title.innerHTML = result.titulo;
  img.innerHTML = result.img;
}

document.addEventListener("DOMContentLoaded", function () {
  const urlClase = "https://www.dnd5eapi.co/api/classes/barbarian";

  fetch(urlClase)
    .then((response) => response.json())
    .then((data) => {
      const nombreClaseElement = document.getElementById("nombreClase");
      const descripcionClaseElement =
        document.getElementById("descripcionClase");

      nombreClaseElement.textContent = data.name;
      descripcionClaseElement.textContent = data.description;
    })
    .catch((error) => {
      console.error("Error al obtener información de la clase:", error);
    });
});

loadAct();
