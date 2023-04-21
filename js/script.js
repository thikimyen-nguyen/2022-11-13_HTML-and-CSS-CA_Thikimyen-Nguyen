
import { featuredProductsURL, getProducts } from "./components/API_endpoint.js";


// create products thumbnails html
const productsContainer = document.querySelector(".products");
const featuredContainer = document.querySelector(".featured_cover");
const coverContentContainer = document.querySelector(".cover_content");
const productsHeader = document.querySelector(".products_header");
const loader = document.querySelector(".loader");
loader.innerHTML = "Loading..."

function createProductsThumbnails(products) {
    for (let i = 0; i < products.length; i++) {
        const image = products[i].images[0].src;
        const altText = products[i].images[0].alt;
        productsHeader.innerHTML = `<h2>Popular</h2>`
        productsContainer.innerHTML += `<a href="products/product_detail.html?id=${products[i].id}"><img src="${image}" alt="${altText}"></a>`    
        
    }
};

// call functions
async function createIndexHTML() {
        const products = await getProducts();
        createProductsThumbnails(products);   
}
createIndexHTML();

// Filter Featured products
async function getFeaturedProducts() {
    try {
        const response = await fetch(featuredProductsURL);
        const featuredProducts = await response.json();
        return featuredProducts;
    } catch (error) {
        featuredContainer.innerHTML = message("error_fetching", error) 
    }
    
}
function getFeaturedCover(featuredProducts) {
    loader.style.display = "none";
    for (let i = 0; i < featuredProducts.length; i++) {
        const featuredImages = featuredProducts[i].images[1];
        if (!featuredImages) {
            continue;
        }
        const featuredProductName = featuredImages.alt.toUpperCase();
        featuredContainer.innerHTML += `<img class="cover" src="${featuredImages.src}" alt="${featuredImages.alt}">`
        coverContentContainer.innerHTML += `<p class="blockbuster" >Featured Movie</p>
                                            <h1>${featuredProductName}</h1>
                                            <a href="products/product_detail.html?id=${featuredProducts[i].id}">Show more</a>
                                            <a href="products/product_detail.html?id=${featuredProducts[i].id}" aria-label="read more"><i class="fa-solid fa-circle-chevron-right"></i></a>
                                            `
    }
        
    }
async function createFeaturedCover() {
    const featuredProducts = await getFeaturedProducts();
    getFeaturedCover(featuredProducts);
}
createFeaturedCover();