export function filtration(targetElement){
    document.querySelectorAll('.product-tile').forEach((item) => {
        switch (targetElement.dataset.filter) {
            case
            'all'
            :
                item.style.display = 'flex';
                break;

            case
            'favourites'
            :
                if (item.classList.contains('favourite')) {
                    item.style.display = 'flex';
                }
                else {
                    item.style.display = 'none';
                }
                break;

            case
            'comparison'
            :
                if (item.classList.contains('comparison')) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
                break;
        }
    })
}