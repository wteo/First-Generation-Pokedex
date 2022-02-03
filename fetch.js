function getPokemon (data) {
    //console.log(data);
    for (let pokemon of data.results) {
        const section = document.createElement("section");
        section.innerText = pokemon.name;
        section.setAttribute("class", "pokemon");
        body.appendChild(section);

        fetch(pokemon.url).then((response) => {
            response.json().then((data) => {
                //console.log(data);
                getImage(data, section);
                getType(data, section); 
                getHeight (data, section);
                getWeight (data, section);
            });
        })
    };
}

function fetchFirst20Pokemon (data) {
    console.log("FETCHED 20 POKEMONS.")
    getPokemon(data);
    return fetch(data.next);
}

function fetch20MorePokemon (data) {
    console.log("FETCHED 20 MORE POKEMONS.")
    getPokemon(data);
    return fetch(data.next);
}

function fetchFinal11Pokemon (data) {
    console.log("FETCHED FINAL 11 POKEMONS.")
    for (let i = 0; i < 11; i++) {
        const section = document.createElement("section");
        section.innerText = data.results[i].name;
        section.setAttribute("class", "pokemon");
        body.appendChild(section);

        fetch(data.results[i].url).then((response) => {
            response.json().then((data) => {
                //console.log(data);
                getImage(data, section);
                getType(data, section); 
                getHeight (data, section);
                getWeight (data, section);
            });
        })
    };
}