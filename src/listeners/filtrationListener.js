import {hideTile, showTile} from "../utils/util.js";

export function filtration(targetElement){
    document.querySelectorAll('.product-tile').forEach((item) => {
        switch (targetElement.dataset.filter) {
            case
            'all'
            :
                item.classList.remove('remote');
                break;

            case
            'favourites'
            :
                item.classList.toggle('remote', !item.classList.contains('favourite'));
                break;

            case
            'comparison'
            :
                item.classList.toggle('remote', !item.classList.contains('comparison'));
                break;
        }
    })
}