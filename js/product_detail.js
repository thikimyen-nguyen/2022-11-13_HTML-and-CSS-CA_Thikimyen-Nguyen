// Fetch a single product data
const productsURL = "http://34.145.12.23/wp-json/wc/store/products";
const querryString = document.location.search;
const param = new URLSearchParams(querryString);
const id = param.get("id");
const productDetailURL = productsURL + "/" + id;
async function getProductDetail() {
    const response = await fetch(productDetailURL);
    const product = await response.json();
    console.log(product);
    return product
}

// Create HTML
const productImageContainer = document.querySelector(".product_image");
const detailTitle = document.querySelector(".product_detail_title");
function createHTML(product) {
    const image = product.images[0].src;
    const alt = product.images[0].alt;
    const productName = product.name.toUpperCase();
    const releasedYear = getYear(product);
   
   
    
    productImageContainer.innerHTML += `<img src="${image}" alt="${alt}">`
    detailTitle.innerHTML += `<h1 class="title">${productName} <span>- ${releasedYear}</span></h1>
                            <p>Action - Comedy - Adventure - Thriller</p>
                            <i id="review" class="fa-sharp fa-solid fa-star"> </i>`
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

// main
async function createDetailHTML() {
    const product = await getProductDetail();
    createHTML(product);
   
}
createDetailHTML();