import {eventOnFilterButton, getIdNum} from "../utils/util.js";

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

    switch (btn.dataset.button) {
        case 'hideBtn':
            eventOnFilterButton(btn, productTile, 'active-hide', 'hide', productId, 'HideTiles');
            break;
        case 'favoritesBtn':
            eventOnFilterButton(btn, productTile, 'active-fav', 'favourite', productId, 'FavouritesTiles');
            break;
        case 'comparisonBtn':
            eventOnFilterButton(btn, productTile, 'active-comparison', 'comparison', productId, 'ComparisonTiles');
            break;
    }
}