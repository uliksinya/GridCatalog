import {getTilesMasFromLS} from "./localStorage.js";

export function loadDataFromLS(){
    const hidesArr = getTilesMasFromLS('HideTiles');
    const favouritesArr = getTilesMasFromLS('FavouritesTiles');
    const comparisonArr = getTilesMasFromLS('ComparisonTiles');

    updateTile(hidesArr, 'hide', 'hide', 'active-hide');
    updateTile(favouritesArr, 'fav', 'favourite', 'active-fav');
    updateTile(comparisonArr, 'comp', 'comparison', 'active-comparison');
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