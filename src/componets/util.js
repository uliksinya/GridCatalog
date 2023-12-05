import {getComparisonTileMas, getFavouritesTilesMas, getHideTilesMas} from "./localStorage";

document.addEventListener('DOMContentLoaded', () => {
    const hideTilesArr = getHideTilesMas();
    const favouriteTilesArr = getFavouritesTilesMas();
    const comparisonTilesArr = getComparisonTileMas();

    // Пройдемся по кнопкам и добавим классы в соответствии с id
    const hideBtn = document.getElementById("hideBtn");
    const favoritesBtn = document.getElementById("favoritesBtn");
    const comparisonBtn = document.getElementById("comparisonBtn");

    const productTiles = document.querySelectorAll('.product-tile');
    const ids = [];

    productTiles.forEach(tile => {
        const id = tile.getAttribute('id').split('-')[1];
        ids.push(id);
    });

    const addClassIfIdExists = (arrFromLS, tileModifierName, btn, btnModifierName) => {
        for (let i = 0; i < ids.length; i++) {
            if (arrFromLS.includes(ids[i])) {
                const tile = document.getElementById(`productTile-${ids[i]}`);
                tile.classList.add(tileModifierName);
                btn.classList.add(btnModifierName)
            }
        }
    };


    addClassIfIdExists(hideTilesArr, "hide", hideBtn, "active-hide" ); // Замените yourId на конкретный id


    addClassIfIdExists(favouriteTilesArr,"favourite", favoritesBtn, "active-fav" );


    addClassIfIdExists(comparisonTilesArr, "comparison", comparisonBtn, "active-comparison");
});