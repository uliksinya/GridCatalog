import {createTile} from "./src/utils/tileCreation.js";
import {
    addComparisonTileIdInLS,
    addFavouritesTileIdInLS,
    addHideTileIdInLS,
    removeComparisonTileIdInLS,
    removeFavoritesTileIdInLS,
    removeHideTileIdInLS
} from "./src/utils/localStorage.js";
import {getIdNum, hideTile, showTile} from "./src/utils/util.js";
import {filtration} from "./src/listeners/filtrationListener.js";

const tilesContainer = document.querySelector('.cards-container');

for (let i = 0; i < 12; i++) {
    tilesContainer.innerHTML += createTile(i, `assets/img/book${i}.jpg`, 3.4);
}
const filter = document.querySelector(".cards-filtration");
filter.addEventListener('click', function(e) {
    let targetElement = e.target;
    if (targetElement.classList.contains('button') && !targetElement.classList.contains('button-selected')) {
        document.querySelectorAll('.button').forEach((button) => {
            if (button.dataset.filter === targetElement.dataset.filter) {
                button.classList.add('button-selected');
            } else {
                button.classList.remove('button-selected');
            }
        })
    }
    filtration(targetElement);
})

const cardsContainer = document.querySelector('.cards-container');
cardsContainer.addEventListener('click', (e) => {
    let targetElement = e.target;

    if (targetElement.classList.contains('product-tile__content-dropdown-buttons-item') || targetElement.classList.contains('icon')){
        let btnId;
        if (targetElement.tagName.toLowerCase() === 'button') {
            btnId = targetElement.id
        } else {
            btnId = targetElement.parentNode.id;
        }
        const btn = document.getElementById(btnId);
        const btnNumID = getIdNum(btn);
        const productTile = document.getElementById(`productTile-${btnNumID}`);
        const productId = getIdNum(productTile);

        switch (btn.dataset.button) {
            case 'hideBtn':
                btn.classList.toggle('active-hide');
                productTile.classList.toggle('hide');
                if (productTile.classList.contains('hide')) {
                    addHideTileIdInLS(productId);
                } else {
                    removeHideTileIdInLS(productId);
                }
                break;
            case 'favoritesBtn':
                btn.classList.toggle('active-fav');
                productTile.classList.toggle('favourite');
                if (productTile.classList.contains('favourite')) {
                    showTile(productTile);
                    addFavouritesTileIdInLS(productId);
                } else {
                    hideTile(productTile);
                    removeFavoritesTileIdInLS(productId);
                }
                break;
            case 'comparisonBtn':
                btn.classList.toggle('active-comparison');
                productTile.classList.toggle('comparison');
                if (productTile.classList.contains('comparison')) {
                    showTile(productTile);
                    addComparisonTileIdInLS(productId);
                } else {
                    hideTile(productTile);
                    removeComparisonTileIdInLS(productId);
                }
                break;
            default:
                break;
        }
    }
})
const myCheckbox = document.getElementById('show');
myCheckbox.addEventListener('click', function() {
    const tiles = document.querySelectorAll('.product-tile');
    if (this.checked) {
        tiles.forEach((tile) => {
            if (tile.classList.contains('hide')) {
                showTile(tile)
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