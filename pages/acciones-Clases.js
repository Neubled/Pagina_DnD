//funcion de creacion para el dropdown
function Dropdown_opt() {
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

document.querySelector(".foto2").addEventListener("click", Dropdown_opt);

const loadClass = () => {
  const hash = window.location.hash;

  const aux = {};
};
//lista de clases
let objet = {
  barbarian: "/clases/barbaro.jpg",
  bard: "/clases/bardo.jpg",
  cleric: "/clases/clerigo.jpg",
  druid: "/clases/druida.jpg",
  fighter: "/clases/luchador.jpg",
  monk: "/clases/monje.jpg",
  paladin: "/clases/paladin.jpg",
  ranger: "/clases/ranger.jpg",
  rogue: "/clases/picaro.jpg",
  sorcerer: "/clases/sorcerer.jpg",
  warlock: "/clases/warlock.jpg",
  wizard: "/clases/mago.jpg",
};
//cargar info de clases
loadClass();

//cargar info de hash
function loadAct() {
  const hash = window.location.hash.substr(1);
  setInfo(hash);
}

async function setInfo(info) {
  let result = {};

  const response = await fetch("https://www.dnd5eapi.co/api/classes/" + info);
  const data = await response.json();

  //carga de toda la data
  loadsubclasses(data.subclasses);
  showLevlMenu(data.class_levels);
  loadproficiencies(data.proficiencies);
  showSpellsMenu(data.spells);

  const nombreClaseElement = document.getElementById("nombreClase");

  const fotodeclaseElement = document.getElementById("imagenClase");

  nombreClaseElement.innerHTML +=
    data.name +
    "<img class='foto4' id='imagenClase' src='" +
    objet[info] +
    "#'/>";

  fotodeclaseElement.setAttribute("src", objet[info]);
}

loadAct();

//funcion de carga de las subclases
function loadsubclasses(subclasses) {
  const content = document.getElementById("subcl");

  content.innerHTML += `<div><span>subclasses</span><div> ${subclasses[0].name} </div></div>`;
}

//funcion de carga de elemtos por nivel
async function showLevlMenu(levels) {
  const head = document.getElementById("head");
  const body = document.getElementById("body");

  const response = await fetch("https://www.dnd5eapi.co" + levels);
  const data = await response.json();

  const headers = Object.keys(data[0]);

  headers.pop();
  headers.pop();
  headers.pop();
  headers.pop();

  headers.forEach((element) => {
    head.innerHTML += `<th class="thead">${element}</th>`;
  });

  data.forEach((element) => {
    body.innerHTML += `<tr> <td>${element.level} </td><td> ${
      element.ability_score_bonuses
    } </td> <td> ${element.prof_bonus} </td> 
<td>${Object.entries(element.class_specific)
      .map(([name, value]) => `<p>${name}: ${value}</p>`)
      .join("")} </td>  

      ${
        element.spellcasting
          ? `  <td> ${Object.entries(element.spellcasting)
              .map(([name, value]) => `<p>${name}: ${value}</p>`)
              .join("")} </td>`
          : ""
      }
        </tr> `;
  });
}
//funcion de carga de las proficiencias
async function loadproficiencies(proficiencies) {
  const body = document.getElementById("prof");

  proficiencies.forEach(async (proficiencie) => {
    const res = await fetch("https://www.dnd5eapi.co" + proficiencie.url);
    const proficiencieData = await res.json();

    body.innerHTML += `<li>nombre: ${proficiencieData.name} , tipo:${proficiencieData.type}</li>`;
  });
}

//funcion de lista de spells
async function showSpellsMenu(spells) {
  const body = document.getElementById("spl");
  if (spells) {
    const response = await fetch("https://www.dnd5eapi.co" + spells);
    const data = await response.json();

    body.innerHTML += `<p>total de hechizos = ${data.count} </p>`;
    body.innerHTML += `<p> Esta calse no tiene hechizos </p>`;
    data.results.forEach(async (spell) => {
      const res = await fetch("https://www.dnd5eapi.co" + spell.url);
      const spellData = await res.json();

      body.innerHTML += `<li class="spellLista" >${spellData.name} : ${spellData.desc}</li>`;
    });
  } else {
    body.innerHTML += `<p> Esta Clase no tiene hechizos </p>`;
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
