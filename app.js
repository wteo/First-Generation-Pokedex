// Fetching pokemon data from PokeAPI

const url = "https://pokeapi.co/api/v2/pokemon/";
const body = document.querySelector("body");

axios.get(url)
    .then(fetchFirst20Pokemon)
    .then(fetch20MorePokemon)
    .then(fetch20MorePokemon)
    .then(fetch20MorePokemon)
    .then(fetch20MorePokemon)
    .then(fetch20MorePokemon)
    .then(fetch20MorePokemon)
    .then(fetchFinal11Pokemon)
    .catch(catchError)
