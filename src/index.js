import {createTile} from "./utils/tileCreation.js";
import { hideTile } from "./utils/util.js";
import {handleFilter} from "./listeners/btnFiltrationListener.js";
import {handleTileButtonClick} from "./listeners/tileButtonsListener.js";
import {loadDataFromLS} from "./utils/loadDataFromLS.js";

const tilesContainer = document.querySelector('.cards-container');
for (let i = 0; i < 12; i++) {
    tilesContainer.innerHTML += createTile(i, `assets/img/book${i}.jpg`, 3.4);
}

document.addEventListener('DOMContentLoaded', loadDataFromLS());

const filter = document.querySelector(".cards-filtration");
filter.addEventListener('click', handleFilter);

const cardsContainer = document.querySelector('.cards-container');
cardsContainer.addEventListener('click', (e) => {
    let targetElement = e.target;
    if (targetElement.classList.contains('product-tile__content-dropdown-buttons-item') || targetElement.classList.contains('icon')){
        handleTileButtonClick(targetElement);
    }
})
const myCheckbox = document.getElementById('show');
myCheckbox.addEventListener('click', function() {
    const tiles = document.querySelectorAll('.product-tile');
    if (this.checked) {
        tiles.forEach((tile) => {
            if (tile.classList.contains('hide')) {
                tile.classList.remove('remote')
            }
        })
    }
    else {
        tiles.forEach((tile) => {
            if (tile.classList.contains('hide')) {
                hideTile(tile)
            }
        })
    }
})