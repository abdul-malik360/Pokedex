// the url to get pokemon data
let base_URL = "https://pokeapi.co/api/v2/pokemon";

// function to get the pokemon images to display
const getPokemonList = (url) => {
  // fetching the data from the pokemon api
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let pokemons = data.results;
      let pokemonList = document.querySelector(".pokemon-cards-container");
      pokemonList.innerHTML = "";
      pokemons.forEach((pokemon) => {
        fetch(pokemon.url)
          .then((res) => res.json())
          .then((pokemons) => {
            pokemonList.innerHTML += `
            <div class="pokemon-image-container" onclick="getPokemonInfo('${pokemon.url}')">
            <img src="${pokemons.sprites.back_default}" class="pokemon-image back-pic">
            <img src="${pokemons.sprites.other["official-artwork"].front_default}" class="pokemon-image front-pic">
            </div>`;
          });
      });
      pokemonList.innerHTML += `<button class="indicator next" onclick="getPokemonList('${data.previous}')">
      <i class="far fa-arrow-alt-circle-left"></i>
      </button>
      
      <button class="indicator prev" onclick="getPokemonList('${data.next}')">
      <i class="far fa-arrow-alt-circle-right"></i>
      </button>
      
      `;
    });
};
getPokemonList(base_URL);

const pokemonModal = document.querySelector(".pokemon-modal");
pokemonModal.addEventListener("click", toggleModal);

// get pokemon data
const getPokemonInfo = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let abilities = data.abilities;
      let types = data.types;

      abilities.forEach((a) => {});
      types.forEach((c) => {});
      pokemonModal.classList.toggle("active");

      pokemonModal.innerHTML = `
      <div class="back-drop">
        <div class="pokemon-card"> 
          <div class="modal-heading">
            <h2 class="pokemon-name">${data.name}</h2>
            <p ># ${data.order}</p>        
          </div>
          <img class="pokemon-modal-picture" src= "${data.sprites.other["official-artwork"].front_default}">
      
          <div class="modal-details">
            <p class="pokemon-type">Type: </p>
            <p class='pokemon-ability'>Abilities: </p>
            <p >Moves: ${data.moves[0].move.name} </p>
            <p >Height: ${data.height}m </p> 
            <p >Weight: ${data.weight}kg</p> 
          </div>

        </div>
      </div>
      `;

      abilities.forEach((a) => {
        document.querySelector(
          ".pokemon-ability"
        ).innerHTML += `<span class="abilityspan">${a.ability.name}</span>`;
      });

      types.forEach((c) => {
        document.querySelector(
          ".pokemon-type"
        ).innerHTML += `<span class="typespan">${c.type.name}</span>`;
      });
    });
};

function toggleModal() {
  pokemonModal.classList.toggle("active");
}
