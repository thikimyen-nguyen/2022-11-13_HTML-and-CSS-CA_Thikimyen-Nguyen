const optionOne = document.querySelector(".option_one");
const optionTwo = document.querySelector(".option_two");
const priceShown =  document.querySelector(".price_show");
const price = "";
priceShown.innerHTML += ""; 


optionOne.onclick = function () {
    optionOne.classList.add("cta_price");
    optionTwo.classList.remove("cta_price");
    priceShown.innerHTML = "NOK" + 39; 
}
optionTwo.onclick = function () {
    optionTwo.classList.add("cta_price");
    optionOne.classList.remove("cta_price");
    priceShown.innerHTML = "NOK" + 79; 
}