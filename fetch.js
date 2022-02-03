function getPokemon (response) {
    //console.log(data);
    for (let pokemon of response.data.results) {
        const section = document.createElement("section");
        section.innerText = pokemon.name;
        section.setAttribute("class", "pokemon");
        body.appendChild(section);

        axios.get(pokemon.url).then((response) => {
            const data = response.data;
            getImage(data, section);
            getType(data, section); 
            getHeight (data, section);
            getWeight (data, section);
        })
    };
}

function fetchFirst20Pokemon (response) {
    console.log("FETCHED 20 POKEMONS.")
    getPokemon(response);
    return axios.get(response.data.next);
}

function fetch20MorePokemon (response) {
    console.log("FETCHED 20 MORE POKEMONS.")
    getPokemon(response);
    return axios.get(response.data.next);
}

function fetchFinal11Pokemon (response) {
    console.log("FETCHED FINAL 11 POKEMONS.");
    for (let i = 0; i < 11; i++) {
        const section = document.createElement("section");
        section.innerText = response.data.results[i].name;
        section.setAttribute("class", "pokemon");
        body.appendChild(section);

        axios.get(response.data.results[i].url).then((response) => {
            const data = response.data;
            getImage(data, section);
            getType(data, section); 
            getHeight (data, section);
            getWeight (data, section);
        })
    };
}
