const pokemonName = document.getElementById("pokemon-name")
const sprite = document.getElementById("sprite");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const pokemonID = document.getElementById("pokemon-id");
const pokemonSearch = document.getElementById("search-input");
const hp = document.getElementById("hp");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const attack = document.getElementById("attack");
const speed = document.getElementById("speed");
const specialDefense = document.getElementById("special-defense");
const searchBtn = document.getElementById("search-button");
const type1Div = document.querySelector(".type1");
const type2Div = document.querySelector(".type2");
const type1 = document.getElementById("type1");
const type2 = document.getElementById("type2");
const startScreen = document.getElementById("start-screen");
const startGreeting = document.getElementById("start-greeting")

const errorMsg = () => {
    document.querySelector(".invalid-screen").classList.add("hidden");
    document.querySelector(".error-screen").classList.remove("hidden");
    hp.innerText = `HP: `;
    attack.innerText = `ATK: `;
    defense.innerText = `DEF: `;
    specialAttack.innerText = `SA: `;
    specialDefense.innerText = `SD: `;
    speed.innerText = `SPD: `;
    pokemonID.innerText = ``;
    type1.innerText = "";
    type2.innerText = "";
    type1Div.style.backgroundColor = "yellow";
    type2Div.style.backgroundColor = "yellow";
}

const fetchData = async () => {
    if (!pokemonSearch.value) {
        errorMsg();
        return;
    }
    
    try {
      document.querySelector(".error-screen").classList.add("hidden");
      document.querySelector(".invalid-screen").classList.add("hidden");
      const pokemonNameOrId = pokemonSearch.value.toLowerCase()
      const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`);
      const data = await res.json();
      pokemonName.innerText = data.name;
      pokemonID.innerText = `#${data.id}`;
      const details = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${data.id}/`);
      const detailsJSON = await details.json();
      sprite.src = detailsJSON.sprites.front_default;
      sprite.alt = data.name;
      weight.innerText = `WEIGHT: ${detailsJSON.weight}`
      height.innerText = `HEIGHT: ${detailsJSON.height}`
      hp.innerText = `HP: ${detailsJSON.stats[0].base_stat}`;
      attack.innerText = `ATK: ${detailsJSON.stats[1].base_stat}`;
      defense.innerText = `DEF: ${detailsJSON.stats[2].base_stat}`;
      specialAttack.innerText = `SA: ${detailsJSON.stats[3].base_stat}`;
      specialDefense.innerText = `SD: ${detailsJSON.stats[4].base_stat}`;
      speed.innerText = `SPD: ${detailsJSON.stats[5].base_stat}`;
      const type1Name = detailsJSON.types[0].type.name;
      type1.innerText = type1Name;
      if (type1Name === "normal") {
        type1Div.style.backgroundColor = "#EEEEEE";
      } else if (type1Name === "fighting") {
        type1Div.style.backgroundColor = "#BB5544";
      } else if (type1Name === "flying") {
        type1Div.style.backgroundColor = "#5588DD";
      } else if (type1Name === "poison") {
        type1Div.style.backgroundColor = "#AA5599";
      } else if (type1Name === "ground") {
        type1Div.style.backgroundColor = "#EECC99";
      } else if (type1Name === "rock") {
        type1Div.style.backgroundColor = "#DDCC99";
      } else if (type1Name === "bug") {
        type1Div.style.backgroundColor = "#AABB22";
      } else if (type1Name === "ghost") {
        type1Div.style.backgroundColor = "#9999CC";
      } else if (type1Name === "steel") {
        type1Div.style.backgroundColor = "#CCCCCC";
      } else if (type1Name === "fire") {
        type1Div.style.backgroundColor = "#FF4422";
      } else if (type1Name === "water") {
        type1Div.style.backgroundColor = "#3399FF";
      } else if (type1Name === "grass") {
        type1Div.style.backgroundColor = "#77CC55";
      } else if (type1Name === "electric") {
        type1Div.style.backgroundColor = "#FFBB22";
      } else if (type1Name === "psychic") {
        type1Div.style.backgroundColor = "#AA3366";
      } else if (type1Name === "ice") {
        type1Div.style.backgroundColor = "#77DDFF";
      } else if (type1Name === "dragon") {
        type1Div.style.backgroundColor = "#7766EE";
      } else if (type1Name === "dark") {
        type1Div.style.backgroundColor = "#775544";
      } else if (type1Name === "fairy") {
        type1Div.style.backgroundColor = "#EE99DD";
      } 
 
      if (detailsJSON.types[1]) {
        const type2Name = detailsJSON.types[1].type.name;
        type2.innerText = type2Name;
        if (type2Name === "normal") {
            type2Div.style.backgroundColor = "#EEEEEE";
          } else if (type2Name === "fighting") {
            type2Div.style.backgroundColor = "#BB5544";
          } else if (type2Name === "flying") {
            type2Div.style.backgroundColor = "#5588DD";
          } else if (type2Name === "poison") {
            type2Div.style.backgroundColor = "#AA5599";
          } else if (type2Name === "ground") {
            type2Div.style.backgroundColor = "#EECC99";
          } else if (type2Name === "rock") {
            type2Div.style.backgroundColor = "#DDCC99";
          } else if (type2Name === "bug") {
            type2Div.style.backgroundColor = "#AABB22";
          } else if (type2Name === "ghost") {
            type2Div.style.backgroundColor = "#9999CC";
          } else if (type2Name === "steel") {
            type2Div.style.backgroundColor = "#CCCCCC";
          } else if (type2Name === "fire") {
            type2Div.style.backgroundColor = "#FF4422";
          } else if (type2Name === "water") {
            type2Div.style.backgroundColor = "#3399FF";
          } else if (type2Name === "grass") {
            type2Div.style.backgroundColor = "#77CC55";
          } else if (type2Name === "electric") {
            type2Div.style.backgroundColor = "#FFBB22";
          } else if (type2Name === "psychic") {
            type2Div.style.backgroundColor = "#AA3366";
          } else if (type2Name === "ice") {
            type2Div.style.backgroundColor = "#77DDFF";
          } else if (type2Name === "dragon") {
            type2Div.style.backgroundColor = "#7766EE";
          } else if (type2Name === "dark") {
            type2Div.style.backgroundColor = "#775544";
          } else if (type2Name === "fairy") {
            type2Div.style.backgroundColor = "#EE99DD";
          }
      } else {
        type2.innerText = "";
      }

    } catch (err) {
      document.querySelector(".invalid-screen").classList.remove("hidden");
      hp.innerText = `HP: `;
      attack.innerText = `ATK: `;
      defense.innerText = `DEF: `;
      specialAttack.innerText = `SA: `;
      specialDefense.innerText = `SD: `;
      speed.innerText = `SPD: `;
      pokemonID.innerText = ``;
      type1.innerText = "";
      type2.innerText = "";
      type1Div.style.backgroundColor = "yellow";
      type2Div.style.backgroundColor = "yellow";
    }
  };
  
searchBtn.addEventListener("click", () => {
    startGreeting.remove();
    startScreen.remove();
    fetchData();
    pokemonSearch.value = "";
 })

 pokemonSearch.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        startGreeting.remove();
        startScreen.remove();
        fetchData();
        pokemonSearch.value = "";
    }
 })