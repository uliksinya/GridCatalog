import {addTileIdInLS, removeTileIdFromLS} from "./localStorage.js";

export function getIdNum(component){
    return component.getAttribute('id').split("-")[1]
}
export function showTile(item){
    item.classList.remove('remote');
}
export function hideTile(item){
    item.classList.add('remote');
}

export function eventOnFilterButton(btn, productTile, activeBtn, activeTile, productId, itemInLSKey){
    btn.classList.toggle(activeBtn);
    productTile.classList.toggle(activeTile);
    if (productTile.classList.contains(activeTile)) {
        addTileIdInLS(productId, itemInLSKey);
    } else {
        removeTileIdFromLS(productId, itemInLSKey);
    }
}