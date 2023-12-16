export const createTile = (ID, image, extraText, grade, title, oldPrice, newPrice) => {
    return `
        <figure class="product-tile" id="productTile-${ID}" data-hide="false">
            <div class="product-tile__content">
                <div class="product-tile__content-img">
                    <img src="../../../src/assets/img/book${image}.jpg" alt="Book Image" title="Book Image"/>
                </div>
                <div class="product-tile__content-icon-new">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 69.4" xml:space="preserve">
                        <style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style>
                        <g><path class="st0" d="M7.85,0h107.18c4.32,0,7.85,3.53,7.85,7.85v53.69c0,4.32-3.53,7.85-7.85,7.85H7.85C3.53,69.4,0,65.87,0,61.55 V7.85C0,3.53,3.53,0,7.85,0L7.85,0z M44.22,14.59v39.37h-9.48l-5.63-17.9v17.9h-9.05V14.59h9.05l6.05,17.73V14.59H44.22 L44.22,14.59z M48.56,14.59h18.06v7.86h-7.21v7.52h6.74v7.47h-6.74v8.66h7.95v7.86H48.56V14.59L48.56,14.59z M111.18,14.59 l-4.83,39.37H92.86c-1.21-6.05-2.31-12.94-3.29-20.67c-0.45,3.33-1.46,10.22-3.03,20.67H73.13l-4.85-39.37h10.53l1.14,13.75 l1.1,13.29c0.41-6.88,1.41-15.89,3-27.04h11.21c0.13,1.17,0.52,5.5,1.15,13.01l1.22,14.98c0.64-9.53,1.65-18.86,3.03-27.99H111.18 L111.18,14.59z"/></g>
                    </svg>
                </div>
                <figcaption class="product-tile__content-description">
                    <span class="product-tile__content-description-extra">${extraText}</span>
                    <div class="product-grade" data-rating="${grade}">
                        <div class="product-grade__stars">

                            <div><i class="fa-regular fa-star"></i></div>
                            <div><i class="fa-regular fa-star"></i></div>
                            <div><i class="fa-regular fa-star"></i></div>
                            <div><i class="fa-regular fa-star"></i></div>
                            <div><i class="fa-regular fa-star"></i></div>

                            <div class="product-grade__stars-active">
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                                <div><i class="fa-solid fa-star"></i></div>
                            </div>
                        </div>
                    </div>
                    <h2 class="product-tile__content-description-title">${title}</h2>
                    <div class="product-tile__content-description-price">
                        <span class="old">${oldPrice}</span>
                        <span class="new">${newPrice}</span>
                    </div>
                </figcaption>
                <div class="product-tile__content-dropdown-buttons">
                    <button class="product-tile__content-dropdown-buttons-item" id="hide-${ID}" data-button="hideBtn" ><i class="icon fa-regular fa-eye"></i></button>
                    <button class="product-tile__content-dropdown-buttons-item" id="fav-${ID}" data-button="favoritesBtn"><i class="icon fa-regular fa-heart"></i></button>
                    <button class="product-tile__content-dropdown-buttons-item" id="comp-${ID}" data-button="comparisonBtn"><i class="icon fa-solid fa-scale-balanced"></i></button>
                </div>                 
            </div>
            <button class="product-tile__add-button">
                <i class="fa-solid fa-bag-shopping"></i>
                <span class="btn-content">add to cart</span>
            </button> 
        </figure>
    `
}
