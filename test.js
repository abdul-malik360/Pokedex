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
      container.innerHTML += `<button class="npbtn" onclick="getPokemonList('${data.previous}')"><i class="far fa-arrow-alt-circle-left"></i></button>`;
      container.innerHTML += `<button class="npbtn" onclick="getPokemonList('${data.next}')"><i class="far fa-arrow-alt-circle-right"></i></button>`;
    });
}
getPokemonList(base_URL);

function getPokemonInfo(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let abilities = data.abilities;
      let types = data.types;

      abilities.forEach((a) => {});
      types.forEach((c) => {});

      document.querySelector(
        ".pokepic"
      ).innerHTML = `<img src= "${data.sprites.other["official-artwork"].front_default}"> <img src= "${data.sprites.back_default}">`;
      document.querySelector(".pokemon-info").innerHTML = `

      
      <div> 
      <h2>Pokemon: <span class="nameh2">${data.name}</span></h2>
      <p class="tspan">Type: </p>
      <p class='aspan'>Abilities: </p>
      <p class="mspan">Moves:  <span class="movespan">${data.moves[0].move.name}</span></p>
      <p class="hspan">height: <span class="heightspan">${data.height}m</span> </p> 
      <p class="wspan">Weight: <span class="weightspan">${data.weight}kg</span></p> 
      </div>`;

      abilities.forEach((a) => {
        document.querySelector(
          ".aspan"
        ).innerHTML += `<span class="abilityspan">${a.ability.name}</span>`;
      });

      types.forEach((c) => {
        document.querySelector(
          ".tspan"
        ).innerHTML += `<span class="typespan">${c.type.name}</span>`;
      });
    });
}

// moves.forEach((b) => {});
// let moves = data.moves;
// moves.forEach((b) => {
//   document.querySelector(
//     ".mspan"
//   ).innerHTML += `<span class="movespan">${b.move.name}</span>`;
// });
