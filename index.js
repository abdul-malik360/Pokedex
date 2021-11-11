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
            <div class="pokemon-image-container">
            <img src="${pokemons.sprites.back_default}" class="pokemon-image back-pic">
            <img src="${pokemons.sprites.front_default}" class="pokemon-image front-pic">
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
