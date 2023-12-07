import {hideTile, showTile} from "../utils/util.js";

export function filtration(targetElement){
    document.querySelectorAll('.product-tile').forEach((item) => {
        switch (targetElement.dataset.filter) {
            case
            'all'
            :
                showTile(item);
                break;

            case
            'favourites'
            :
                if (!item.classList.contains('favourite')) {
                    hideTile(item);
                }
                else {
                    showTile(item);
                }
                break;

            case
            'comparison'
            :
                if (!item.classList.contains('comparison')) {
                    hideTile(item);
                } else {
                    showTile(item);
                }
                break;
        }
    })
}