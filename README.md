# First Generation PokeDex

Get to know more about the original 151 Pokemon here. A web page that lists all the first generation Pokemon in the order of the official Pokedex.

![image](https://user-images.githubusercontent.com/87306585/152667362-258816e2-9e56-4c79-917d-5367a7e9cf2f.png)

(Preview of the PokeDex)


Link: https://wteo.github.io/firstGenPokedex/



# About

To better understand the basic concepts of a fetch request and Axios, I created this online Pokedex. I fetched the JSON file containing the height, weight and images of each pokemon from the PokeApi server (https://pokeapi.co/).

I first make a request via the fetch method and subequently, refactored the codes into an Axious get request. I have also experimented with the async function and await keyword. Whilst these have simplified the codes a fair bit, I find they are not very useful in this particular case. I wanted the order listing of the pokemon to be an exact match to the official listing of the Pokedex. As an example, Bulbasaur will always be the first pokemon in Pokedex, followed by its evolutionary line.  With async / await,  the order of the pokemon don't run in a sequence. Hence, I left the codes as they are with the then() and catch() method.

Each URL lists only 20 pokemon. Hence, I could call on the getPokemon() function up to 7 times. I needed to create a separate function to call on the final 11 pokemon. The next 7 are second-generation pokemon, which I didn't want to include in this Pokedex. The "For… of loop" would have picked all 20 pokemon. To pick only the pokemon I want, I instead used the traditional "for loop" method. 
