const addToCart = document.querySelector("#add_to_cart");
const buyNow = document.querySelector("#buy_now");

function cartAdded() {
    window.location.href = "../addtocart-success.html";
}

function viewCart() {
    window.location.href = "../yourcart.html";
}

buyNow.addEventListener("click", viewCart);
addToCart.addEventListener("click", cartAdded);
