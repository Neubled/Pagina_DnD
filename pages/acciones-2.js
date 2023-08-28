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

let objet = {
  barbarian: "barbaro.jpg",
  bard: "bardo.jpg",
  cleric: "clerigo.jpg",
  druid: "druida.jpg",
  fighter: "luchador.jpg",
  monk: "monje.jpg",
  paladin: "paladin.jpg",
  ranger: "ranger.jpg",
  rogue: "picaro.jpg",
  sorcerer: "sorcerer.jpg",
  warlock: " warlock.jpg",
  wizard: " mago.jpg",
};

let busq = "barbarian";

//clases(){
// let  titulo = doc.qS("#titulo");
// titulo.innerText  = info.titulo
// let  foto = doc.qS("#foto");
//   foto.src = obj[busq];
// };
