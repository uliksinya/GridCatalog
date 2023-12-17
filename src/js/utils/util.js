import {addTileIdInLS, removeTileIdFromLS} from "./localStorage.js";
export function getIdNum(component){
    return component.getAttribute('id').split("-")[1]
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
export function checkedCheckbox(item, myCheckbox){
    if(item.classList.contains('hide') && myCheckbox.checked === false){
        item.classList.add('remote');
    }else{
        item.classList.remove('remote');
    }
}
export function filterStartTiles(){
    const myCheckbox = document.getElementById('show');
    document.querySelectorAll('.product-tile').forEach((item) => {
        checkedCheckbox(item, myCheckbox);
    })
}
export function toggleFilterButton(item, myCheckbox, className){
    item.classList.toggle('remote', !item.classList.contains(className));
    if (item.classList.contains(className)){
        checkedCheckbox(item, myCheckbox);
    }
}