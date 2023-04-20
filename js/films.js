// api call for genres list
const genresApiURL = "https://howareyounorway.no/wp-json/wc/store/products/attributes/10/terms";

async function getGenres() {
    const response = await fetch(genresApiURL);
    const genres = await response.json();
    return genres
    
}

const productsURL = "https://howareyounorway.no/wp-json/wc/store/products";
async function getProducts() {
    const response = await fetch(productsURL);
    const products = await response.json();
    return products; 
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
    for (let i = 0; i < products.length; i++) {
        const attributesArray = products[i].attributes;
        
        for (let u = 0; u < attributesArray.length; u++) {
            const attributeID = attributesArray[u].id;
           
            if (attributeID === 10) {
                const genreTerms = attributesArray[u].terms;
                for (let e = 0; e < genreTerms.length; e++) {
                    const genreID = genreTerms[e].id;
                    const requestedID = getRequestedGenreID();
                    if (genreID === requestedID) {
                        const image = products[i].images[0].src;
                        const altText = products[i].images[0].alt;
                        productsContainer.innerHTML += `<a href="../products/product_detail.html?id=${products[i].id}"><img src="${image}" alt="${altText}"></a>`
                    }
                }
            }
        }
    } 
};


