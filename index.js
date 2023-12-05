import {createTile} from "./src/componets/tileCreation.js";
import {
    addComparisonTileIdInLS,
    addFavouritesTileIdInLS,
    addHideTileIdInLS,
    removeComparisonTileIdInLS,
    removeFavoritesTileIdInLS,
    removeHideTileIdInLS
} from "./src/componets/localStorage.js";

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
    document.querySelectorAll('.product-tile').forEach((item, i) => {
        switch (targetElement.dataset.filter) {
            case
            'all'
            :
                item.style.display = 'flex';
                break;

            case
            'favourites'
            :
                if (item.classList.contains('favourite')) {
                    item.style.display = 'flex';
                }
                else {
                    item.style.display = 'none';
                }
                break;

            case
            'comparison'
            :
                if (item.classList.contains('comparison')) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
                break;
        }
    })
})

const cardsContainer = document.querySelector('.cards-container');
cardsContainer.addEventListener('click', function(e) {
    let targetElement = e.target;

    if (targetElement.classList.contains('product-tile__content-dropdown-buttons-item') || targetElement.classList.contains('icon')){
        let btnId;
        if (targetElement.tagName.toLowerCase() === 'button') {
            btnId = targetElement.id
        } else {
            btnId = targetElement.parentNode.id;
        }
        const btn = document.getElementById(btnId);
        const btnNumID = btn.getAttribute('id').split("-")[1];
        const productTile = document.getElementById(`productTile-${btnNumID}`);
        const productId = productTile.getAttribute('id').split("-")[1];

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
                    addFavouritesTileIdInLS(productId);
                } else {
                    removeFavoritesTileIdInLS(productId);
                }
                break;
            case 'comparisonBtn':
                btn.classList.toggle('active-comparison');
                productTile.classList.toggle('comparison');
                if (productTile.classList.contains('comparison')) {
                    addComparisonTileIdInLS(productId);
                } else {
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
                tile.style.display = 'flex';
            }
        })
    }
    else {
        tiles.forEach((tile) => {
            if (tile.classList.contains('hide')) {
                tile.style.display = 'none';
            }
        })
    }
})
