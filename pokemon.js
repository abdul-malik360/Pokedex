let base_URL = "https://pokeapi.co/api/v2/pokemon";

function getPokemonList(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let pokemon = data.results;
      let container = document.querySelector(".pokemon-list-container");
      container.innerHTML = "";
      pokemon.forEach((btn) => {
        container.innerHTML += `<button class="pokebtn" onclick="getPokemonInfo('${btn.url}')">${btn.name}</button>`;
      });
      container.innerHTML += `<br><br><button class="npbtn" onclick="getPokemonList('${data.previous}')"><i class="far fa-arrow-alt-circle-left"></i></button>`;
      container.innerHTML += `<button class="npbtn" onclick="getPokemonList('${data.next}')"><i class="far fa-arrow-alt-circle-right"></i></button>`;
    });
}
getPokemonList(base_URL);

function getPokemonInfo(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector(
        ".pokepic"
      ).innerHTML = `<img src= "${data.sprites.other["official-artwork"].front_default}"> <img src= "${data.sprites.back_default}">`;
      document.querySelector(".pokemon-info").innerHTML = `

      
      <div> 
      <h2>Pokemon: ${data.name}</h2>
      <p>Abilities: ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}</p>
      <p>Moves: ${data.moves[0].move.name}, ${data.moves[1].move.name}</p>
      <p>Type: ${data.types[0].type.name}, ${data.types[1].type.name}</p>
      <p>Weight: ${data.weight}</p>
      <p>height: ${data.height}</p>
      </div>`;
    });
}

//
