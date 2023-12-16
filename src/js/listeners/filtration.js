import {checkedCheckbox} from "../utils/util.js";
import {addCheckboxStateToLS} from "../utils/localStorage.js";

export function filtration(targetElement){
    console.log('filtration');
    document.querySelectorAll('.product-tile').forEach((item) => {
        const myCheckbox = document.getElementById('show');
        const activeFilterBtn = document.querySelector('.button-selected');

        switch (targetElement.dataset.filter) {
            case
            'checkbox'
            :
                addCheckboxStateToLS(myCheckbox.checked);
                if(activeFilterBtn.dataset.filter === 'all'){
                    checkedCheckbox(item, myCheckbox);
                }
                if(activeFilterBtn.dataset.filter === 'favourites' && item.classList.contains('favourite')){
                    item.classList.toggle('remote', !item.classList.contains('favourite'));
                    checkedCheckbox(item, myCheckbox);
                }
                if(activeFilterBtn.dataset.filter === 'comparison' && item.classList.contains('comparison')){
                    item.classList.toggle('remote', !item.classList.contains('comparison'));
                    checkedCheckbox(item, myCheckbox);
                }
                break;

            case
            'all'
            :
                checkedCheckbox(item, myCheckbox);
                break;

            case
            'favourites'
            :
                item.classList.toggle('remote', !item.classList.contains('favourite'));
                if (item.classList.contains('favourite')){
                    checkedCheckbox(item, myCheckbox);
                }
                break;

            case
            'comparison'
            :
                item.classList.toggle('remote', !item.classList.contains('comparison'));
                if (item.classList.contains('comparison')){
                    checkedCheckbox(item, myCheckbox);
                }
                break;
        }
    })
}