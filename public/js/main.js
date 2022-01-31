import {fetchPokemon} from "./fetchPokemon.js"
import {fetchPokemonAbilities} from "./fetchPokemonAbilities.js"
export const pokeP = document.getElementById('pokeInfo');
export const pokeAbilityBtn = document.getElementById('ability');
window.addEventListener('DOMContentLoaded', () => {
    /** 
     * @param {string} pokeP - <Div> Affichant les pokémon
     * @param {EventListener} pokeAbilityBtn - Bouton d'affichage d'aptitudes
     * @param {string} pokeDiv - <p> Affichant les infos du pokémon
     * @param {function} invoquePokemon - Fonction d'affichage du résultat
     * @param {EventListener} pokeBtn - Bouton d'affichage du nom du pokémon
                                             l'aptitude du pokémon
     *@param {function} pokemonAbility - Fonction d'affichage d'aptitudes
     */
    const pokeDiv = document.getElementById('pokemon-info');
    fetchPokemon;
    fetchPokemonAbilities;
    
    const invoquePokemon = () => {
      const pokeBtn = document.getElementById('pokemon');
      pokeBtn.addEventListener('click', fetchPokemon);
      pokeDiv.appendChild(pokeP);
    };
  
    const pokemonAbility = () => {
      pokeAbilityBtn.addEventListener('click', fetchPokemonAbilities);
      pokeDiv.appendChild(pokeAbility);
    };
  
    (function startAll() {
      invoquePokemon();
      pokemonAbility();
    })();
  });
  