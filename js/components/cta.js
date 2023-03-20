const addToCart = document.querySelector("#add_to_cart");
const buyNow = document.querySelector("#buy_now");

addToCart.addEventListener("click", cartAdded());

function cartAdded() {
    addToCart.innerHTML += `<a href="../addtocart-success.html"></a>`
}