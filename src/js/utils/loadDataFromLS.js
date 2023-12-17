import {getCheckboxStateFromLS, getTilesMasFromLS} from "./localStorage.js";
import {checkedCheckbox} from "./util.js";
export function loadDataFromLS() {
    try {
        const hidesArr = getTilesMasFromLS('HideTiles') || [];
        const favouritesArr = getTilesMasFromLS('FavouritesTiles') || [];
        const comparisonArr = getTilesMasFromLS('ComparisonTiles') || [];

        const checkboxState = getCheckboxStateFromLS();

        updateTile(hidesArr, 'hide', 'hide', 'active-hide');
        updateTile(favouritesArr, 'fav', 'favourite', 'active-fav');
        updateTile(comparisonArr, 'comp', 'comparison', 'active-comparison');

        const myCheckbox = document.getElementById('show');
        myCheckbox.checked = checkboxState;
        return true;

    } catch (error) {
        console.error('Error loading data:', error);
        return false;
    }
}

export function updateTile(tilesIdsArr, btnIdType, tileType, btnType){
    if (tilesIdsArr.length !== 0){
        tilesIdsArr.forEach((id) =>{
            const tile = document.getElementById(`productTile-${id}`);
            const btn = document.getElementById(`${btnIdType}-${id}`)
            tile.classList.add(tileType);
            btn.classList.add(btnType);
        })
    }
}