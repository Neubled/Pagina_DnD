//funcion de creacion para el dropdown
function myDropdown_opt() {
  document.getElementById("myDropdown").racesList.toggle("show");
}

//funcion de evento de dropdown
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByRacesName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.racesList.contains("show")) {
        openDropdown.racesList.remove("show");
      }
    }
  }
};

document.querySelector(".foto2").addEventListener("click", myDropdown_opt);

const loadRaces = () => {
  const hash = window.location.hash;

  const aux = {};
};

//lista de razas
let objet = {
  dragonborn: "/razas/drac.jpg",
  elf: "/razas/elfo.jpg",
  dwarf: "/razas/enano.jpg",
  gnome: "/razas/gnome.jpg",
  human: "/razas/humano.jpg",
  halfling: "/razas/mediano.jpg",
  "half-elf": "/razas/medioElfo.jpg",
  "half-orc": "/razas/medioOrc.jpg",
  tiefling: "/razas/tiefling.jpg",
};
//cargar info de razas
loadRaces();

//cargar info de hash
function loadAct() {
  const hash = window.location.hash.substr(1);
  setInfo(hash);
}
//seteo de info
async function setInfo(info) {
  let result = {};

  const response = await fetch("https://www.dnd5eapi.co/api/races/" + info);
  const data = await response.json();

  let objet2 = {
    size: data.size,
    speed: data.speed,
  };
  //carga de toda la data
  loadsubraces(data.subraces);
  loadAttribute(objet2);
  loadproficiencies(data.starting_proficiencies);
  loadtraits(data.traits);

  const nombreRazaElement = document.getElementById("nombreRaza");

  nombreRazaElement.innerHTML +=
    data.name +
    "<img class='foto4' id='imagenRaza' src='" +
    objet[info] +
    "#'/>";
  const fotodeRazaElement = document.getElementById("imagenRaza");

  fotodeRazaElement.setAttribute("src", objet[info]);
}

loadAct();

//funcion de carga de las subrazas
function loadsubraces(subraces) {
  const content = document.getElementById("subrs");

  if (subraces.length !== 0) {
    content.innerHTML += `<div class=><span>subraces</span><div> ${subraces[0].name} </div></div>`;
  } else {
    content.innerHTML += `<p> Esta Raza no tiene subraza </p>`;
  }
}

//funcion de carga de los atributos
function loadAttribute(Attribute) {
  const content = document.getElementById("DataAttribute");
  content.innerHTML += `<div><span>Attribute</span><div> Tamaño: ${Attribute.size}</div><div> Velocidad: ${Attribute.speed} pies</div></div>`;
}

//funcion de carga de las proficiencias
async function loadproficiencies(proficiencies) {
  const body = document.getElementById("prof");
  if (proficiencies.length !== 0) {
    proficiencies.forEach(async (proficiencie) => {
      const res = await fetch("https://www.dnd5eapi.co" + proficiencie.url);
      const proficiencieData = await res.json();

      body.innerHTML += `<li>nombre: ${proficiencieData.name} , tipo:${proficiencieData.type}</li>`;
    });
  } else {
    body.innerHTML += `<p> Esta Raza no tiene proficiencies </p>`;
  }
}

//funcion de carga de los traits
async function loadtraits(traits) {
  const body = document.getElementById("trt");
  if (traits.length !== 0) {
    traits.forEach(async (traits) => {
      const res = await fetch("https://www.dnd5eapi.co" + traits.url);
      const traitsData = await res.json();

      body.innerHTML += `<li >nombre: ${traitsData.name} </li> <li class="spellLista"> Descripcion:${traitsData.desc}</li>`;
    });
  } else {
    body.innerHTML += `<p> Esta Raza no tiene traits </p>`;
  }
}

//funcion para scrolleo rapido
window.scroll({
  top: 500,
  behavior: "smooth",
});
window.scroll({
  top: 8800,
  behavior: "smooth",
});
window.scroll({
  top: 9200,
  behavior: "smooth",
});
