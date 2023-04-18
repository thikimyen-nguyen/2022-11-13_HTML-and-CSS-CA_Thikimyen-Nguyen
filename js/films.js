// create genres menu
const genresApiURL = "http://34.145.12.23/wp-json/wc/store/products/attributes/10/terms";

async function getGenres() {
    const response = await fetch(genresApiURL);
    const genres = await response.json();
    return genres
    
}
const genresNavContainer = document.querySelector(".genres_nav");
function createGenresNav(genres) {
    
    for (let i = 0; i < genres.length; i++) {
        const genreName = genres[i].name;
        const genreID = genres[i].id;
        genresNavContainer.innerHTML += `<li><a href="../films/action.html?id=${genreID}">${genreName}</a></li>`
        
    }
}
// main
async function createGenresNavHTML() {
    const genres = await getGenres();
    createGenresNav(genres);
}
createGenresNavHTML();

// create genres products list
const productsContainer = document.querySelector(".products");

const querryString = document.location.search;
const param = new URLSearchParams(querryString);
const id = param.get("id");
console.log(id);
const productsURL = "http://34.145.12.23/wp-json/wc/store/products";
async function getProducts() {
    const response = await fetch(productsURL);
    const products = await response.json();
    return products;
        
}

function createProductsThumbnails(products) {
    for (let i = 0; i < products.length; i++) {
        const attributesArray = products[i].attributes;
        for (let u = 0; u < attributesArray.length; u++) {
            const genreTerm = attributesArray[u].terms;
            for (let e = 0; e < genreTerm.length; e++) {
                const genreID = genreTerm[e].id;
                if (genreID === 84) {
                    const image = products[i].images[0].src;
                    const altText = products[i].images[0].alt;
                    productsContainer.innerHTML += `<a href="../products/product_detail.html?id=${products[i].id}"><img src="${image}" alt="${altText}"></a>`
                }
            }
        }
    }
};

async function createFilmsHTML() {
    const products = await getProducts();
    createProductsThumbnails(products);
}
createFilmsHTML();
