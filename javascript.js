// Model
let pikachu = {
    name: "Pikachu",
    health: 45,
    image: "Img/pikachu.png",
    level: 8,
};

let eevee = {
    name: "Eevee",
    health: 40,
    image: "Img/eevee.png",
    level: 7,
};

let bulbasaur = {
    name: "Bulbasaur",
    health: 70,
    image: "Img/bulbasaur.png",
    level: 12,
};

let charmander = {
    name: "Charmander",
    health: 60,
    image: "Img/charmander.png",
    level: 10,
};

let squirtle = {
    name: "Squirtle",
    health: 30,
    image: "Img/squirtle.png",
    level: 5,
};

let player = {
    name: "Jens",
    image: "Img/pokemonplayer.png",
    playerPokemon: [],

};

let possiblePokemon = [pikachu, eevee, bulbasaur, charmander, squirtle];
let randomPokemon;
let pokemonView = '';
// let currentView = '';

let app = document.getElementById("app");

// View 
updateView();

function updateView(view) {
    if (view == 'game') gameView()
    else if (view == 'caughtPokemon') caughtPokemonView()
    else if (view == 'showPokemon') showPokemonView()
}

function gameView() {
    getRandomPokemon();
    app.innerHTML = /*HTML*/ ` 
    <div class="container">
        <div class="opposingPokemon">
            <div>${randomPokemon.name}</div>
            <div>Level: ${randomPokemon.level}</div>
            <img src="${randomPokemon.image}">
    </div>
    
    <div class="bottomScreen">
        <div class="player">
            <img src="${player.image}" class="playerImage">
            <div>${player.name}</div>
        </div>
    
        <div class="buttonContainer">
            <button onclick="catchPokemon()" class="button">Fang pokemon</button>
            <button onclick="updateView()"  class="button">Finn ny pokemon</button>
            <button onclick="updateView('showPokemon')"  class="button">Vis dine pokemon</button>
            <!---<button onclick="${currentView = 'showPokemon'}, updateView()"  class="button">Vis dine pokemon</button> -->
            <!--- button onclick="updateView = 'currentView") -->
        </div>
    </div>
</div>
    `;
}

function caughtPokemonView() {
    app.innerHTML = /*HTML*/ ` 
    <div class="caughtContainer">
        <h1>Du fanget ${player.playerPokemon[player.playerPokemon.length - 1].name}</h1>
        <div class="buttonContainer">
            <button onclick="updateView()"  class="button">Finn ny pokemon</button>
            <button onclick="showPokemon()"  class="button">Vis dine pokemon</button>
        </div>
    </div>
    `;
}

function showPokemonView() {
    showAllPokemon();
    app.innerHTML = /*HTML*/ ` 
    <div class="collectionContainer">
        <div class="pokemonList">
            <h1>Dette er dine pokemon: </h1>
            <div class="pokemonView">${pokemonView}</div>
        </div>
        <div class="buttonContainer">
            <button onclick="updateView()" class="button">Finn ny pokemon</button>
        </div>
    </div>
    `;
}

function showAllPokemon() {
    pokemonView = '';
    for (let i = 0; i < player.playerPokemon.length; i++) {
        pokemonView += `
        <div>
            <div>${player.playerPokemon[i].name}</div>
            <div>Health: ${player.playerPokemon[i].health}</div>
            <div>Level: ${player.playerPokemon[i].level}</div>
            <img src="${player.playerPokemon[i].image}">
        </div>
        `;
    }
}

// Controller
function catchPokemon() {
    player.playerPokemon.push(randomPokemon);
    caughtPokemonView();
}

function showPokemon() {
    showPokemonView();
}

function getRandomPokemon() {
    let randomNumber = Math.floor(Math.random() * possiblePokemon.length);
    randomPokemon = possiblePokemon[randomNumber];
}