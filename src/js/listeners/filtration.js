import {checkedCheckbox, toggleFilterButton} from "../utils/util.js";
import {addCheckboxStateToLS} from "../utils/localStorage.js";
export function filtration(targetElement){
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
                if(activeFilterBtn.dataset.filter === 'favourites'){
                    toggleFilterButton(item, myCheckbox, 'favourite');
                }
                if(activeFilterBtn.dataset.filter === 'comparison'){
                    toggleFilterButton(item, myCheckbox, 'comparison');
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
                toggleFilterButton(item, myCheckbox, 'favourite');
                break;

            case
            'comparison'
            :
                toggleFilterButton(item, myCheckbox, 'comparison');
                break;
        }
    })
}