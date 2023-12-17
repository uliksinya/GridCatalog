import {checkedCheckbox, eventOnFilterButton, getIdNum, toggleFilterButton} from "../utils/util.js";
export function handleTileButtonClick (targetElement) {
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

    const myCheckbox = document.getElementById('show');
    const activeFilterBtn = document.querySelector('.button-selected');

    switch (btn.dataset.button) {
        case 'hideBtn':
            eventOnFilterButton(btn, productTile, 'active-hide', 'hide', productId, 'HideTiles');
            break;
        case 'favoritesBtn':
            eventOnFilterButton(btn, productTile, 'active-fav', 'favourite', productId, 'FavouritesTiles');
            if(activeFilterBtn.dataset.filter === 'favourites') {
                toggleFilterButton(productTile, myCheckbox, 'favourite')
            }
            break;
        case 'comparisonBtn':
            eventOnFilterButton(btn, productTile, 'active-comparison', 'comparison', productId, 'ComparisonTiles');
            if(activeFilterBtn.dataset.filter === 'comparison') {
                toggleFilterButton(productTile, myCheckbox, 'comparison')
            }
            break;
    }
}