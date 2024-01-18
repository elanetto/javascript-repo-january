import productsData from "./data/products.js";

console.log("products: ", productsData);
// 1. select the products container
const productsContainer = document.querySelector(".products-container");
// 2. fill the container of the products with products

const savedFavoritesProducts = JSON.parse(window.localStorage.getItem("favorites")); //not working? undefined?
console.log("savedFavoritesProducts: ",savedFavoritesProducts);


for (let i = 0; i < productsData.length; i++) {
    let cssClass = "";
    if(savedFavoritesProducts){
        const doesObjectExist = savedFavoritesProducts.find(function (fav){
            return parseInt(fav.id) === productsData[i].id
        });

        if(doesObjectExist){
            cssClass = "active-heart";
        }
    }
    console.log("Product: ",productsData[i]);
    productsContainer.innerHTML += `
            <div class="product">
                <img alt="random photo" src="https://picsum.photos/200" />
                <h3>${productsData[i].name}</h3>
                <h4>NOK ${productsData[i].price}</h4>
                <span class="heart-container">
                    <svg class="heart ${cssClass}" 
                    data-name="${productsData[i].name}"
                    data-id="${productsData[i].id}"
                    data-price="${productsData[i].price}"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="#000000" 
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 
                        1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </span>
            </div>
    `;
}


const hearts = document.querySelectorAll(".heart");
console.log("favorites: ", hearts);

for (let x = 0; x < hearts.length; x++) {
    hearts[x].addEventListener("click", function () {
        console.log("hey you clicked me i am the heart with index", hearts[x]);
        
        console.log("this. classList: ",this.classList);
        this.classList.toggle("active-heart");
    })
};

// Ok, so the hearts change color when they are clicked, but so what?
// We need the local storage to remember that we have liked something,
// or else, it will all be gone when we refresh the page.

// Save to local storage when a heart is activated
// When we refresh the site, we need to have a function that checks
// the local storage, and then shows us the active ones from the info there

let favToSave = [];
for (let x = 0; x < hearts.length; x++) {
    hearts[x].addEventListener("click", function () {
        this.classList.toggle(".active-heart");
        let productILikeToSave = {
            id: this.dataset.id,
            name: this.dataset.name,
            price: this.dataset.price
        }
        favToSave.push(productILikeToSave);
        saveFav(favToSave);
    });
}

function saveFav(favoriteProducts){
    window.localStorage.setItem("favorites", JSON.stringify(favoriteProducts));
}

