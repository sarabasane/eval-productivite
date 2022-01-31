import { pokeP, pokeAbilityBtn } from "./main.js"; 

 /**
 * Données chargées depuis l'URL.
 * @async
 * @function fetchPokemon - fonction asynchrone
 * @param {number} pokedexNum - calcule un pokémon aléatoirement
 * @param {string} foundPokemon - affiche le nom du pokémon
 * @param {string} jsonPokemon - base de donnée listant les pokémon
 * @param {object} pokeInfo - affiche les aptitudes du pokémon trouvé
 * @return {Promise} Données de l'URL.
 */
export const fetchPokemon = async () => {
    const pokedexNum = Math.floor(Math.random() * 897);
    let foundPokemon = '';
    let jsonPokemon = '';
    const pokeInfo = {};
    try {
      foundPokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokedexNum}`,
          {method: 'GET', headers: {'Content-Type': 'application/json'}},
      );
    } catch (error) {
      console.error(error.message);
    }

    if (foundPokemon) {
      try {
        jsonPokemon = await foundPokemon.json();
        pokeInfo.name = `${String(jsonPokemon.species.name)
            .slice(0, 1)
            .toUpperCase()}${String(jsonPokemon.species.name)
            .slice(1, jsonPokemon.species.name.length)
            .toLowerCase()}`;
      } catch (error) {
        console.error(error.message);
      }
    } else {
      jsonPokemon = 'No Pokémon found...';
    }

    if (pokeP.innerText !== '') {
      pokeP.innerText = '';
    }
    pokeP.innerText = `Your Pokémon is ${pokeInfo.name}.`;
    pokeAbilityBtn.removeAttribute('disabled');
  };