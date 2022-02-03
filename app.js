// Fetching pokemon data from PokeAPI

const url = "https://pokeapi.co/api/v2/pokemon/";
const body = document.querySelector("body");

fetch(url)
    .then(check404Error)
    .then(fetchFirst20Pokemon)
    .then(check404Error)
    .then(fetch20MorePokemon)
    .then(check404Error)
    .then(fetch20MorePokemon)
    .then(check404Error)
    .then(fetch20MorePokemon)
    .then(check404Error)
    .then(fetch20MorePokemon)
    .then(check404Error)
    .then(fetch20MorePokemon)
    .then(check404Error)
    .then(fetch20MorePokemon)
    .then(check404Error)
    .then(fetchFinal11Pokemon)
    .catch(catchError)