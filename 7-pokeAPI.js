
async function fetchPokemonData(pokemonName) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

  // Get response object with info about how it went 
  console.log(response)
  console.log(response.status)

  const pokemonData = await response.json();
  console.log(pokemonData);

  return pokemonData;
}

document.addEventListener("DOMContentLoaded", async () => {
  // Homework: Get the pokemon from search input (DOM)
  // searchForPokemon = document.getElementById("search-pokemon").value 

  searchForPokemon = "pikachu" // emulating getting the user input from pokeApi.htmml 
  const pikachuData = await fetchPokemonData(searchForPokemon)
  const pokeInfoElement = document.getElementById("pokemon-info")

  pokeInfoElement.innerHTML = `
        <h2>${pikachuData.name}</h2>
        <img src="${pikachuData.sprites.front_default}" alt="${pikachuData.name}">
        <h3>Abilities</h3>
        <p>${pikachuData.abilities[0].ability.name}</p>
        <p>${pikachuData.abilities.map(item => `<li>${item.ability.name}</li>`)}</p>
        <ul>
          ${pikachuData.abilities.map(a => `<li>${a.ability.name}</li>`).join("")}
        </ul>
        <h3>Base Experience</h3>
        <p>${pikachuData.base_experience}</p>
        
        // additional 
        <h3>Sounds:</h3>
        <audio src="${pikachuData.cries.latest}" controls></audio><br>
        <audio src="${pikachuData.cries.legacy}" controls></audio>
      `
})