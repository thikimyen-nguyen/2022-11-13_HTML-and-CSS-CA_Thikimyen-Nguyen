const productsURL = "http://34.145.12.23/wp-json/wc/store/products";

const querryString = document.location.search;
const param = new URLSearchParams(querryString);
const id = param.get("id");



console.log(querryString);
const productDetailURL = productsURL + "/" + id;
async function getProductDetail() {
    const response = await fetch(productDetailURL);
    const product = await response.json();
    console.log(product);
    return product
}

const productImageContainer = document.querySelector(".product_image");
function createHTML(product) {
    productImageContainer.innerHTML += `<img src="${product.images[0].src}" alt="${product.images[0].alt}">`
}


async function createDetailHTML() {
    const product = await getProductDetail();
    createHTML(product);
}
createDetailHTML();