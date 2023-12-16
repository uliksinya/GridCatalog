import {filtration} from "./filtration.js";

export function handleFilter(e){
    let targetElement = e.target;
    if (targetElement.classList.contains('button') && !targetElement.classList.contains('button-selected')) {
        document.querySelectorAll('.button').forEach((button) => {
            button.classList.toggle('button-selected', button.dataset.filter === targetElement.dataset.filter);
        })
    }
    console.log('handleFilter');
    filtration(targetElement);
}