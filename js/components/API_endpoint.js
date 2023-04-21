const apiBase = "https://howareyounorway.no";
const productsBase = "/wp-json/wc/store/products";
export const featuredProductBase = "?featured=true";
export const allProductsURL = apiBase + productsBase;
export const featuredProductsURL = allProductsURL + featuredProductBase;
const genresApiBase = "/attributes/10/terms";
export const genresApiURL = allProductsURL + genresApiBase
// fetch an array of products data
export async function getProducts() {
    try {
     const response = await fetch(allProductsURL);
     const products = await response.json();
     return products;
         
    } catch (error) {
     console.log(message);
     productsContainer.innerHTML = message("error_fetching", error) 
    }
     
 }
 