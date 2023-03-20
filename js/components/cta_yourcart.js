const backHome = document.querySelector("#back_home");
const checkOut = document.querySelector("#check_out");
function getHome() {
    window.location.href = "index.html";
}

function getCheckOut() {
    window.location.href = "checkout.html";
}
backHome.addEventListener("click", getHome);
checkOut.addEventListener("click", getCheckOut);