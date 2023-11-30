let input = document.getElementById("userinput");
let maxPoke = 151,
  minPoke = 1;

let btn = document.getElementById("submit");

input.addEventListener("keypress", function (event) {
  if (event.key == 13) {
    getPokemon(input.value, maxPoke, minPoke);
    // console.log ("funziona stai buono");
  }
});
btn.addEventListener("click", function () {
  getPokemon(input.value, maxPoke, minPoke);
});
function getPokemon(inputNumber, max, min) {
  input.value = "";
  if (inputNumber <= max && inputNumber >= min) {
    getPokedexEntry(inputNumber);
  } else {
    alert("Inserisci numero nel range [1,151]");
  }
}

async function getPokedexEntry(inputNumber) {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + inputNumber
  );
  console.log(response);

  const pokeData = await response.json();

  const pokemonContainer = document.getElementById("pokemon-container");
  pokemonContainer.innerHTML = "";

  // Carta del pokemon
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemon-card");

  // Nome del pokemon
  const pokemonName = document.createElement("h2");
  pokemonName.textContent = "# " + inputNumber + " - " + pokeData.name;

  // Fotografia del pokemon
  const pokemonImage = document.createElement("img");
  pokemonImage.src = pokeData.sprites.other['official-artwork'].front_default;
  pokemonImage.alt = pokeData.name;
  pokemonImage.classList.add("pokemon-img");

  // Abilità del pokemon
  const pokemonAbility = document.createElement ("p");
  pokemonAbility.innerText = "Ability: " + pokeData.abilities[0].ability.name;

  const savedMoves = []
  let i = 0;
  do {
    let uniqueMove = true;
    savedMoves [i] = pokeData.moves[getRandomNumber(0,pokeData.moves.length - 1)].move.name;
    for (let j = 0; j< savedMoves.length - 1; j++){
        if (savedMoves[i] == savedMoves[j]){
            console.log (savedMoves[i]);
            uniqueMove = false;
        }
    }
    if (uniqueMove){
        i++;
    }
  } while (i < 4 );

  const pokemonMoves = document.createElement("p");
  pokemonMoves.innerText ="Moves: " + savedMoves[0] + " " + savedMoves[1] + " " + savedMoves[2] + " " + savedMoves[3];
  pokemonMoves.classList.add("card-moves");

  pokemonCard.appendChild(pokemonName);
  pokemonCard.appendChild(pokemonImage);
  pokemonCard.appendChild(pokemonAbility);
  pokemonCard.appendChild(pokemonMoves);
  pokemonContainer.appendChild(pokemonCard);
}

function getRandomNumber(min, max) {
    let range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
  }