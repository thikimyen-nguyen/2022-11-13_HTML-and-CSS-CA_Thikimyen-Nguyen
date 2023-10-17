// api call for genres list
import {getProducts } from "./components/API_endpoint.js";

const collectionURL = "https://yen-nguyen.no/wp-json/wc/store/products/attributes/6/terms";
async function getCollections() {
    const response = await fetch(collectionURL);
    const collections = await response.json();
    console.log(collections)
    return collections
}

function createCollectionNav(collections) {
    for (let i = 0; i < collections.length; i++) {
        const collectionsNavList = document.createElement("li");
        const collectionsLink = document.createElement("a");
       
        const collectionName = collections[i].name;
        const collectionID = collections[i].id;
        const hrefLink = "../collections/collections.html?id=" + collectionID;
        collectionsLink.innerText = collectionName;
        collectionsLink.setAttribute("href", hrefLink);
        collectionsNavList.appendChild(collectionsLink);
      
        document.getElementById("genres_nav").appendChild(collectionsNavList);
        const requestedID = getRequestedCollectionID();
        if (collectionID === requestedID) {
            collectionsLink.classList.add("genres_active");
        }
    }
}
// Get genre ID param
function getRequestedCollectionID() {
    const querryString = document.location.search;
    const param = new URLSearchParams(querryString);
    const stringID = param.get("id");
    const getID = parseInt(stringID);
    return getID
};

// call function
async function createCollectionsNavHTML() {
    const collections = await getCollections();
    createCollectionNav(collections)  ;
}
createCollectionsNavHTML();

async function createCollectionsHTML() {
    const products = await getProducts();
    createRequestedProducts(products); 
}
createCollectionsHTML();

// create genres products list
const productsContainer = document.querySelector(".products");
function createRequestedProducts(products) {
    for (let i = 0; i < products.length; i++) {
        const attributesArray = products[i].attributes;
        
        for (let u = 0; u < attributesArray.length; u++) {
            const attributeID = attributesArray[u].id;
            console.log(attributeID);
            if (attributeID === 6) {
                const collectionTerms = attributesArray[u].terms;
                
                for (let e = 0; e < collectionTerms.length; e++) {
                    const collectionID = collectionTerms[e].id;
                    const requestedID = getRequestedCollectionID();
                    if (collectionID === requestedID) {
                        const image = products[i].images[0].src;
                        const altText = products[i].images[0].alt;
                        productsContainer.innerHTML += `<a href="../products/product_detail.html?id=${products[i].id}"><img src="${image}" alt="${altText}"></a>`
                    }
                }
            }
        }
    } 
};


