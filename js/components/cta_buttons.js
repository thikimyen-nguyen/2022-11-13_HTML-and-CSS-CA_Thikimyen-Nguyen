function getHome() {
    window.location.href = "index.html";
}
function getCheckOut() {
    window.location.href = "checkout.html";
}
function viewYourCart() {
    window.location.href = "../yourcart.html";
}
function cartAdded() {
    window.location.href = "../addtocart-success.html";
}

function checkOutSuccess() {
    window.location.href = "checkoutsuccess.html";
}

const card = document.querySelector(".card");
const vipps = document.querySelector(".vipps");

function paymentMaster() {
    card.classList.add("cta_price");
    vipps.classList.remove("cta_price");
}
function paymentVisa() {
    vipps.classList.add("cta_price");
    card.classList.remove("cta_price");
    
}