// api call for genres list
import { genresApiURL, getProducts } from "./components/API_endpoint.js";

async function getGenres() {
    const response = await fetch(genresApiURL);
    const genres = await response.json();
    return genres
}

function createGenresNav(genres) {
    for (let i = 0; i < genres.length; i++) {
        const genresNavList = document.createElement("li");
        const genresLink = document.createElement("a");
       
        const genreName = genres[i].name;
        const genreID = genres[i].id;
        const hrefLink = "../films/action.html?id=" + genreID;
        genresLink.innerText = genreName;
        genresLink.setAttribute("href", hrefLink);
        genresNavList.appendChild(genresLink);
      
        document.getElementById("genres_nav").appendChild(genresNavList);
        const requestedID = getRequestedGenreID();
        if (genreID === requestedID) {
            genresLink.classList.add("genres_active");
        }
    }
}
// Get genre ID param
function getRequestedGenreID() {
    const querryString = document.location.search;
    const param = new URLSearchParams(querryString);
    const stringID = param.get("id");
    const getID = parseInt(stringID);
    return getID
};

// call function
async function createGenresNavHTML() {
    const genres = await getGenres();
    createGenresNav(genres);
}
createGenresNavHTML();

async function createFilmsHTML() {
    const products = await getProducts();
    createRequestedProducts(products); 
}
createFilmsHTML();

// create genres products list
const productsContainer = document.querySelector(".products");
function createRequestedProducts(products) {
    console.log(products)
    for (let i = 0; i < products.length; i++) {
        const genresArray = products[i].categories;
        console.log(genresArray)
        for (let u = 0; u < genresArray.length; u++) {
            const genresID = genresArray[u].id;
            console.log(genresID)
            const requestedID = getRequestedGenreID();
                    if (genresID === requestedID) {
                        const image = products[i].images[0].src;
                        const altText = products[i].images[0].alt;
                        productsContainer.innerHTML += `<a href="../products/product_detail.html?id=${products[i].id}"><img src="${image}" alt="${altText}"></a>`
                    }
            
        }
    } 
};


