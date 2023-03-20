const backHome = document.querySelector("#back_home");
const viewCart = document.querySelector("#view_cart");
backHome.addEventListener("click", getHome);
function getHome() {
    window.location.href = "index.html";
}
viewCart.addEventListener("click", viewYourcart);

function viewYourcart() {
    window.location.href = "yourcart.html";
}



