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
async function createFilmsHTML() {
    const genres = await getGenres();
    createGenresNav(genres);
}
createFilmsHTML()

// create genres products list
const productsContainer = document.querySelector(".products");

const querryString = document.location.search;
const param = new URLSearchParams(querryString);
const id = param.get("id");
console.log(id);

