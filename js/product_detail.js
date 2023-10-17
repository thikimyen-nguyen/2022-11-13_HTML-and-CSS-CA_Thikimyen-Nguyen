// Fetch a single product data
import { allProductsURL } from "./components/API_endpoint.js";;
const querryString = document.location.search;
const param = new URLSearchParams(querryString);
const id = param.get("id");
const productDetailURL = allProductsURL + "/" + id;

async function getProductDetail() {
    try {
        const response = await fetch(productDetailURL);
        const product = await response.json();
        console.log(product)
        return product
        
    } catch (error) {
        detailTitle.innerHTML = message("error_fetching", error)
    }
  
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
        if (attributeID === 1) {
            return releasedYear
        }
    }
}

function getRating(product) {
    const productAttributes = product.attributes;
    for (let i = 0; i < productAttributes.length; i++) {
        const attributeID = productAttributes[i].id;
        const rating = productAttributes[i].terms[0].name;
        if (attributeID === 2) {
            return rating
        }
    }
}
function getGenres(product) {
    const genresArray = product.categories;
     // turn genres array to text
    const genreArray = genresArray.map((genres) => {
        return `${genres.name}`
    })
    const genres = genreArray.join(", ");
    return genres
}
function getProducer(product) {
    const productAttributes = product.attributes;
    for (let i = 0; i < productAttributes.length; i++) {
        const attributeID = productAttributes[i].id;
        const producer = productAttributes[i].terms[0].name;
        if (attributeID === 4) {
            return producer
        }
    }
}
function getDirector(product) {
    const productAttributes = product.attributes;
    for (let i = 0; i < productAttributes.length; i++) {
        const attributeID = productAttributes[i].id;
        const director = productAttributes[i].terms[0].name;
        if (attributeID === 5) {
            return director
        }
    }
}
function getCasts(product) {
    const productAttributes = product.attributes;
    for (let i = 0; i < productAttributes.length; i++) {
        const attributeID = productAttributes[i].id;
        const casts = productAttributes[i].terms[0].name;
        if (attributeID === 3) {
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

