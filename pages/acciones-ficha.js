//funcion para darle una subclase a la clase seleccionada
document.querySelector("#clases_op").addEventListener("change", async (e) => {
  const response = await fetch(
    "https://www.dnd5eapi.co/api/classes/" + e.target.value + "/subclasses"
  );
  const data = await response.json();

  const subcl = document.querySelector("#subclases_op");
  subcl.innerHTML = " ";

  data.results.forEach((subclase) => {
    subcl.innerHTML += `<option value="${subclase.name}">${subclase.name}</option>`;
  });
});

//funcion para darle una subraza a la raza seleccionada
document.querySelector("#razas_op").addEventListener("change", async (e) => {
  const raza = e.target.value;

  const response = await fetch(
    `https://www.dnd5eapi.co/api/races/${raza.trim()}`
  );
  const data = await response.json();

  const subraz = document.querySelector("#subrazas_op");
  subraz.innerHTML = "";

  if (data.subraces.length !== 0) {
    data.subraces.forEach((subrazas) => {
      subraz.innerHTML += `<option value="${subrazas.name}">${subrazas.name}</option>`;
    });
  } else {
    subraz.innerHTML += `<option value="${raza.trim()}">${raza.trim()}</option>`;
  }
});
