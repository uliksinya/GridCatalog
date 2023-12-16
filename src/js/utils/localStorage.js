export function addTileIdInLS(id, itemInLSKey){
    const itemFromLS = localStorage.getItem(itemInLSKey);
    if(itemFromLS){
        const arrFromLS = JSON.parse(itemFromLS);
        if(!arrFromLS.includes(id)) {
            arrFromLS.push(id);
            localStorage.setItem(itemInLSKey, JSON.stringify(arrFromLS));
        }
    }
    else{
        const idString = id.toString()
        localStorage.setItem(itemInLSKey, JSON.stringify([idString]));
    }
}

export function removeTileIdFromLS(id, itemInLSKey){
    const itemFromLS = localStorage.getItem(itemInLSKey);
    if(itemFromLS){
        const hideTilesArr = JSON.parse(itemFromLS);
        if(hideTilesArr.includes(id)){
            const updatedHideTilesArr = hideTilesArr.filter(item => item !== id);
            localStorage.setItem(itemInLSKey, JSON.stringify(updatedHideTilesArr));
        }
    }
}
export function getTilesMasFromLS(itemInLSKey){
    const itemFromLS = localStorage.getItem(itemInLSKey);
    if(itemFromLS){
       return JSON.parse(itemFromLS);
    }
}
export function addCheckboxStateToLS(isChecked){
    localStorage.setItem('CheckboxState', JSON.stringify(isChecked));
}
export function getCheckboxStateFromLS(){
    const itemFromLS = localStorage.getItem('CheckboxState');
    if(itemFromLS){
        return JSON.parse(itemFromLS);
    }else{
        localStorage.setItem('CheckboxState', JSON.stringify(true));
        return true;
    }
}