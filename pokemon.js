fetch("https://pokeapi.co/api/v2/pokemon")
.then(response => response.json())
.then(data => {
    let pokemon =data.results;
    console.log(pokemon)
    pokemon.forEach(btn =>{
        document.querySelector(".pokemon-list-container").innerHTML += `<button onclick="getPokemonInfo('${btn.url}')">${btn.name}</button>`
    })
})
function getPokemonInfo(url){
    // console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.querySelector(".pokemon-info").innerHTML = `<img src= "${ data.sprites.front_default}">`
    })
}