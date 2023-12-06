export function getIdNum(component){
    return component.getAttribute('id').split("-")[1]
}
export function addClassIfIdExists(ids, arrFromLS, tileModifierName, btn, btnModifierName){
    if(arrFromLS.length !== 0) {
        for (let i = 0; i < ids.length; i++) {
            if (arrFromLS.includes(ids[i])) {
                const tile = document.getElementById(`productTile-${ids[i]}`);
                tile.classList.add(tileModifierName);
                btn.classList.add(btnModifierName)
            }
        }
    }
}
/*document.addEventListener('DOMContentLoaded', () => {
    const hideTilesArr = getHideTilesMas();
    const favouriteTilesArr = getFavouritesTilesMas();
    const comparisonTilesArr = getComparisonTileMas();

    const hideBtn = document.getElementById(`hide-${i}`);
    const favoritesBtn = document.getElementById(`fav-${i}`);
    const comparisonBtn = document.getElementById(`comp-${i}`);

    const productTiles = document.querySelectorAll('.product-tile');
    const ids = [];

    productTiles.forEach(tile => {
        const id = getIdNum(tile);
        ids.push(id);
    });
    addClassIfIdExists(ids, hideTilesArr, "hide",hideBtn, 'active-hide' );
    addClassIfIdExists(ids, favouriteTilesArr,"favourite", favoritesBtn, 'active-fav');
    addClassIfIdExists(ids, comparisonTilesArr, "comparison", comparisonBtn, 'active-comparison');
});*/