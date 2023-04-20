
// fetch an array of products data
const apiBase = "https://howareyounorway.no";
const productsBase = "/wp-json/wc/store/products";
const featuredProductBase = "?featured=true";
const allProductsURL = apiBase + productsBase;
const featuredProductsURL = allProductsURL + featuredProductBase;
async function getProducts() {
   
    const response = await fetch(allProductsURL);
    const products = await response.json();
    return products;
        
}

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
// export {createProductsThumbnails, getProducts}

// main
async function createIndexHTML() {
    const products = await getProducts();
    createProductsThumbnails(products);
}
createIndexHTML();

// Filter Featured products
async function getFeaturedProducts() {
    const response = await fetch(featuredProductsURL);
    const featuredProducts = await response.json();
    return featuredProducts;
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
        coverContentContainer.innerHTML += `<p class="blockbuster" >Blockbuster Now</p>
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