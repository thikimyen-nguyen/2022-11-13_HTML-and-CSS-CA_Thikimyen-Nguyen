// Fetch a single product data
const productsURL = "http://34.145.12.23/wp-json/wc/store/products";
const querryString = document.location.search;
const param = new URLSearchParams(querryString);
const id = param.get("id");
const productDetailURL = productsURL + "/" + id;

async function getProductDetail() {
    
    const response = await fetch(productDetailURL);
    const product = await response.json();
    return product
}

// Create HTML
const productImageContainer = document.querySelector(".product_image");
const detailTitle = document.querySelector(".product_detail_title");
const detailInfo = document.querySelector(".product_detail_info");
const loader = document.querySelector(".loader");
loader.innerHTML = "Loading..."
function createHTML(product) {
    const image = product.images[0].src;
    const alt = product.images[0].alt;
    const productName = product.name.toUpperCase();
    const releasedYear = getYear(product);
    const rating = getRating(product);
    const genresList = getGenres(product);
    const producer = getProducer(product);
    const director = getDirector(product);
    const casts = getCasts(product);
    const description = product.description;
    loader.style.display = "none";
    productImageContainer.innerHTML += `<img src="${image}" alt="${alt}">`
    detailTitle.innerHTML += `<h1 class="title">${productName} <span>- ${releasedYear}</span></h1>
                            <ul class="genres_list">${genresList}</ul>
                            <i id="review" class="fa-sharp fa-solid fa-star"> ${rating}</i>`
    detailInfo.innerHTML += `<p class="selling_point">PRODUCER/SELLER:</p>
                            <p>${producer}</p>
                            <p>DIRECTED BY:</p>
                            <p>${director}</p>
                            <p>CASTS:</p>
                            <p>${casts}</p>
                            <div class="title">${description}</div>     
                            `
}


function getYear(product) {
    const productAttributes = product.attributes;
    for (let i = 0; i < productAttributes.length; i++) {
        const attributeID = productAttributes[i].id;
        const releasedYear = productAttributes[i].terms[0].name;
        if (attributeID === 5) {
            return releasedYear
        }
    }
}

function getRating(product) {
    const productAttributes = product.attributes;
    for (let i = 0; i < productAttributes.length; i++) {
        const attributeID = productAttributes[i].id;
        const rating = productAttributes[i].terms[0].name;
        if (attributeID === 6) {
            return rating
        }
    }
}
function getGenres(product) {
    const productAttributes = product.attributes;
    for (let i = 0; i < productAttributes.length; i++) {
        const genresID = productAttributes[i].id;
        if (genresID === 10) {
            const genresArray = productAttributes[i].terms;
            let genresList = "";
            for (let u = 0; u < genresArray.length; u++) {
                const genres = productAttributes[i].terms[u].name;
                genresList += "<li>" + genres + "</li>";
            }
            return genresList
        }
    }
}
function getProducer(product) {
    const productAttributes = product.attributes;
    for (let i = 0; i < productAttributes.length; i++) {
        const attributeID = productAttributes[i].id;
        const producer = productAttributes[i].terms[0].name;
        if (attributeID === 7) {
            return producer
        }
    }
}
function getDirector(product) {
    const productAttributes = product.attributes;
    for (let i = 0; i < productAttributes.length; i++) {
        const attributeID = productAttributes[i].id;
        const director = productAttributes[i].terms[0].name;
        if (attributeID === 8) {
            return director
        }
    }
}
function getCasts(product) {
    const productAttributes = product.attributes;
    for (let i = 0; i < productAttributes.length; i++) {
        const attributeID = productAttributes[i].id;
        const casts = productAttributes[i].terms[0].name;
        if (attributeID === 9) {
            return casts
        }
    }
}
// main
async function createDetailHTML() {
    const product = await getProductDetail();
    createHTML(product);
   
}
createDetailHTML();

