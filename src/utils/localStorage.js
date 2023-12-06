export function addHideTileIdInLS(id){
    const itemFromLS = localStorage.getItem('HideTiles');
    if(itemFromLS){
        const hideTilesArr = JSON.parse(itemFromLS);
        if(!hideTilesArr.includes(id)) {
            hideTilesArr.push(id);
            localStorage.setItem('HideTiles', JSON.stringify(hideTilesArr));
        }
    }
    else{
        const idString = id.toString()
        localStorage.setItem('HideTiles', JSON.stringify([idString]));
    }
}
export function removeHideTileIdInLS(id){
    const itemFromLS = localStorage.getItem('HideTiles');
    if(itemFromLS){
        const hideTilesArr = JSON.parse(itemFromLS);
        if(hideTilesArr.includes(id)){
            const updatedHideTilesArr = hideTilesArr.filter(item => item !== id);
            localStorage.setItem('HideTiles', JSON.stringify(updatedHideTilesArr));
        }
    }
}
export function getHideTilesMas(){
    const itemFromLS = localStorage.getItem('HideTiles');
    if(itemFromLS){
       return JSON.parse(itemFromLS);
    }
}

export function addFavouritesTileIdInLS(id){
    const itemFromLS = localStorage.getItem('FavouritesTiles');
    if(itemFromLS){
        const favTilesArr = JSON.parse(itemFromLS);
        if(!favTilesArr.includes(id)) {
            favTilesArr.push(id);
            localStorage.setItem('FavouritesTiles', JSON.stringify(favTilesArr));
        }
    }
    else{
        const idString = id.toString()
        localStorage.setItem('FavouritesTiles', JSON.stringify([idString]));
    }
}
export function removeFavoritesTileIdInLS(id){
    const itemFromLS = localStorage.getItem('FavouritesTiles');
    if(itemFromLS){
        const favTilesArr = JSON.parse(itemFromLS);
        if(favTilesArr.includes(id)){
            const updatedHideTilesArr = favTilesArr.filter(item => item !== id);
            localStorage.setItem('FavouritesTiles', JSON.stringify(updatedHideTilesArr));
        }
    }
}
export function getFavouritesTilesMas(){
    const itemFromLS = localStorage.getItem('FavouritesTiles');
    if(itemFromLS){
        return JSON.parse(itemFromLS);
    }
}

export function addComparisonTileIdInLS(id){
    const itemFromLS = localStorage.getItem('ComparisonTiles');
    if(itemFromLS){
        const comparisonTilesArr = JSON.parse(itemFromLS);
        if(!comparisonTilesArr.includes(id)) {
            comparisonTilesArr.push(id);
            localStorage.setItem('ComparisonTiles', JSON.stringify(comparisonTilesArr));
        }
    }
    else{
        const idString = id.toString()
        localStorage.setItem('ComparisonTiles', JSON.stringify([idString]));
    }
}
export function removeComparisonTileIdInLS(id){
    const itemFromLS = localStorage.getItem('ComparisonTiles');
    if(itemFromLS){
        const comparisonTilesArr = JSON.parse(itemFromLS);
        if(comparisonTilesArr.includes(id)){
            const updatedHideTilesArr = comparisonTilesArr.filter(item => item !== id);
            localStorage.setItem('ComparisonTiles', JSON.stringify(updatedHideTilesArr));
        }
    }
}
export function getComparisonTileMas(){
    const itemFromLS = localStorage.getItem('ComparisonTiles');
    if(itemFromLS){
        return JSON.parse(itemFromLS);
    }
}