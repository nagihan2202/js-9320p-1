const characters = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 18,
    name: "Wedge Antilles",
    pic: "", //resimden Failed to load resource: the server responded with a status of 404 (Not Found)Understand this errorAI WedgeHelmetless-ROTJHD.jpg:1 hatası alındı
    homeworld: "corellia",
  },
  {
    id: 19,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 20,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: 21,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];

let charactersVisible = false;

function renderCharacters() {
  const characterContainer = document.getElementById("characterContainer");
  characterContainer.innerHTML = "";
  characters.forEach((character) => {
    const characterCard = document.createElement("div");
    characterCard.className = "col-md-4";
    characterCard.innerHTML = `
    <div class="card mb-4 box-shadow bg-light">
      <div class="card-body">
        <img class="card-img-top img-fluid" src="${character.pic}" alt="${character.name}">
        <h5 class="card-title pt-4">Name: ${character.name}</h5>
        <p class="card-text">Homeworld: ${character.homeworld}</p>
      </div>
    </div>
  `;
    characterContainer.appendChild(characterCard);
  });
  toggleButtonState();
}

function removeCharacters() {
  const characterContainer = document.getElementById("characterContainer");
  characterContainer.innerHTML = "";
  toggleButtonState();
}

function toggleButtonState() {
  const button = document.getElementById("showCharactersButton");
  if (charactersVisible) {
    button.innerText = "Karakterleri Göster";
    button.classList.remove("btn-danger");
    button.classList.add("btn-success");
  } else {
    button.innerText = "Karakterleri Gizle";
    button.classList.remove("btn-success");
    button.classList.add("btn-danger");
  }
  charactersVisible = !charactersVisible;
}

document
  .getElementById("showCharactersButton")
  .addEventListener("click", () => {
    if (charactersVisible) {
      removeCharacters();
    } else {
      renderCharacters();
    }
  });

const homeworldsRaw = characters.map((character) =>
  character.homeworld ? character.homeworld.toLowerCase() : "other"
);
const homeworldsUnique = [...new Set(homeworldsRaw)];

const homeworldLowercase = homeworldsUnique.map((homeworld) =>
  homeworld.toLowerCase()
);

const homeworlds = homeworldLowercase;

console.log(homeworlds);
const form = document.getElementById("homeworldForm");
homeworlds.forEach((homeworld, index) => {
  const radioId = `homeworld-${index}`;
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "homeworld";
  radio.value = homeworld;
  radio.id = radioId;

  const label = document.createElement("label");
  label.textContent = homeworld.charAt(0) + homeworld.slice(1);
  label.setAttribute("for", radioId);

  form.classList.add("form-check-input");
  label.classList.add("form-check-label");

  const formGroup = document.createElement("div");
  formGroup.classList.add("form-check");
  formGroup.appendChild(radio);
  formGroup.appendChild(label);
  form.appendChild(formGroup);

  radio.addEventListener("change", () => {
    const selectedHomeworldDiv = document.getElementById("selectedHomeworld");
    selectedHomeworldDiv.textContent = `Seçilen Anavatan: ${
      homeworld.charAt(0) + homeworld.slice(1)
    }`;
  });
});

document.getElementById("filterButton").addEventListener("click", () => {
  const selectedHomeworld = document.querySelector(
    'input[name="homeworld"]:checked'
  );
  const filteredHomeworld = selectedHomeworld ? selectedHomeworld.value : null;

  const selectedHomeworldDiv = document.getElementById("selectedHomeworld");
  selectedHomeworldDiv.textContent = `Seçilen Anavatan: ${
    filteredHomeworld
      ? filteredHomeworld.charAt(0).toUpperCase() + filteredHomeworld.slice(1)
      : "Bilinmiyor"
  }`;

  const filteredCharacters = characters.filter((character) => {
    if (filteredHomeworld === "other") {
      return !character.homeworld;
    }
    return character.homeworld?.toLowerCase() === filteredHomeworld;
  });

  const characterContainer = document.getElementById("characterContainer");
  characterContainer.innerHTML = "";

  filteredCharacters.forEach((character) => {
    const characterCard = document.createElement("div");
    characterCard.className = "col-md-4";
    characterCard.innerHTML = `
      <div class="card mb-4 box-shadow bg-light">
        <div class="card-body">
          <img class="card-img-top img-fluid" src="${character.pic}" alt="${
      character.name
    }">
          <h5 class="card-title pt-4">Name: ${character.name}</h5>
          <p class="card-text">Homeworld: ${
            character.homeworld || "Bilinmiyor"
          }</p>
        </div>
      </div>
    `;
    characterContainer.appendChild(characterCard);
  });
});
