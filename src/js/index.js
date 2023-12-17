import {createTile} from "./utils/tileCreation.js";
import {handleFilter} from "./listeners/btnFiltrationListener.js";
import {handleTileButtonClick} from "./listeners/tileButtonsListener.js";
import {loadDataFromLS} from "./utils/loadDataFromLS.js";
import {tilesArray} from "./data/tilesArray.js";
import {filterStartTiles} from "./utils/util.js";

const tilesContainer = document.querySelector('.cards-container');
tilesArray.forEach((tile, id) => {
    tilesContainer.innerHTML += createTile(id, tile.image, tile.extraText, tile.grade, tile.title, tile.oldPrice, tile.newPrice);
})
document.addEventListener('DOMContentLoaded', () => {
    loadDataFromLS();
    filterStartTiles();
});

const filter = document.querySelector(".cards-filtration");
filter.addEventListener('click', handleFilter);

const cardsContainer = document.querySelector('.cards-container');
cardsContainer.addEventListener('click', (e) => {
    let targetElement = e.target;
    if (targetElement.classList.contains('product-tile__content-dropdown-buttons-item') || targetElement.classList.contains('icon')){
        handleTileButtonClick(targetElement);
    }
})