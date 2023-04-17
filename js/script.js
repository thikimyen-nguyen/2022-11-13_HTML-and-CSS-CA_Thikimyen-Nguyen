
const apiBase = "http://34.145.12.23";
const productsBase = "/wp-json/wc/store/products";
const featuredProductBase = "?featured=true";
const allProductsURL = apiBase + productsBase;
const featuredProductsURL = allProductsURL + featuredProductBase;

// fetch an array of product data
async function getProducts() {
   
    const response = await fetch(allProductsURL);
    const products = await response.json();
    console.log(products);
    return products;
        
}

// create products thumbnails

const productsContainer = document.querySelector(".products");
const featuredContainer = document.querySelector(".featured_cover");
const coverContentCOntainer = document.querySelector(".cover_content");
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

async function createIndexHTML() {
    const products = await getProducts();
    createProductsThumbnails(products);
}
createIndexHTML();

// Filter Featured products
async function getFeaturedProducts() {
    const response = await fetch(featuredProductsURL);
    const featuredProducts = await response.json();
    console.log(featuredProducts);
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
        coverContentCOntainer.innerHTML += `<p class="blockbuster" >Blockbuster Now</p>
                                            <h1>${featuredProductName}</h1>
                                            <a href="products/hobbandshaw.html">Show more</a>
                                            <a href="products/hobbandshaw.html" aria-label="read more about hobbs and shaw movie"><i class="fa-solid fa-circle-chevron-right"></i></a>
                                            `
    }
        
    }
async function createFeaturedCover() {
    const featuredProducts = await getFeaturedProducts();
    getFeaturedCover(featuredProducts);
}
createFeaturedCover();