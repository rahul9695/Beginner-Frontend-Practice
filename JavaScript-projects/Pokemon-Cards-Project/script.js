
function createPokemonCard(pokemon) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = 
    `<p class="card-ID">#${pokemon.id}</p>
    <img src="pokemon-ball.png" alt="pokemon-image" class="poke-img">
    <h3 class="poke-name">${pokemon.name}</h3>
    <div class="front-face">
        <p class="poke-ability">${pokemon.types[0].type.name}</p>
    </div>
    <div class="back-face">
        <p class="ability">Abilities : ${pokemon.abilities
            .map((ability) => ability.ability.name)
            .join(", ")}</p>
    </div>`
    return card;
}

const pokeTypeURL = 'https://pokeapi.co/api/v2/type';
const fetchPokemonTypes = async () => {
    try {
        const response = await fetch(pokeTypeURL);
        const pokemonTypes = await response.json();
        // console.log(data);
        const pokemonCategory = pokemonTypes.results.map(
            (obj) => obj.name
        );
        // console.log(pokemonCategory);
        return pokemonCategory;
    } catch (error) {
        console.log(err);
        alert("Something went wrong, please try again later");
    }
}

const renderPokemonTypes = async () => {
    const pokemonCategoryList = await fetchPokemonTypes();
    const pokemonType = document.getElementById("pokemonTypes");

    console.log(pokemonCategoryList);
    pokemonCategoryList.forEach((category) => {
    //     const searchParams = new URLSearchParams(window.location.search);
    // const categoryName = searchParams.get('pokemonType');
    // console.log(categoryName);
      const option = document.createElement("option");
      option.value = category;
      option.innerText = category;
      pokemonType.append(option);
    });
  };
  
  renderPokemonTypes();

const fetchPokemonDetails = async (id) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
        (response) => response.json()
    );
}

let pokemonList = [];
const cardsContainer = document.getElementById('cards-container');

const arrayOfPokemonDetailPromised = [];
for(let i = 1; i <= 150; i++){
    const pokemonPromise = fetchPokemonDetails(i);
    arrayOfPokemonDetailPromised.push(pokemonPromise);
}


Promise.all(arrayOfPokemonDetailPromised)
.then((pokemonDetails) => {
    // console.log(pokemonDetails);
    pokemonList = pokemonDetails;
    pokemonList.forEach((pokemon) => {
        // console.log(pokemon);
        const card = createPokemonCard(pokemon);
        cardsContainer.append(card);
    })
});

const formTag = document.querySelector('form');
formTag.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the selected type from the dropdown
    const selectedType = document.getElementById('pokemonTypes').value.toLowerCase();

    // Filter the Pokemon list based on the selected type
    const filteredPokemonList = pokemonList.filter((obj) => {
        return obj.types[0].type.name.toLowerCase().includes(selectedType);
    });

    // Clear the cardsContainer and append the filtered Pokemon
    cardsContainer.innerHTML = "";
    filteredPokemonList.forEach((pokemon) => {
        const card = createPokemonCard(pokemon);
        cardsContainer.append(card);
    });
});

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup', (e) => {
    // console.log(e.target.value);
    // console.log(pokemonList);
    const filteredPokemonlist = pokemonList.filter((obj) => obj.name.toLowerCase().includes((e.target.value).toLowerCase()));
    cardsContainer.innerHTML = "";
    filteredPokemonlist.forEach((pokemon) => {
        cardsContainer.append(createPokemonCard(pokemon));
    });
});

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    window.location.reload();
})




