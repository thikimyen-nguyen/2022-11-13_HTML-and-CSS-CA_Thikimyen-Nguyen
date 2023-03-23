
const optionOne = document.querySelector(".option_one");
const optionTwo = document.querySelector(".option_two");
const priceShown =  document.querySelector(".price_show");
const discountShow = document.querySelector(".discount");
const totalPrice = document.querySelector(".total_price");
const discount = 0;
priceShown.innerHTML = ""; 
discountShow.innerHTML = "NOK" + " " + discount; 


function getPrice(price1, price2) {
    optionOne.classList.add("cta_price");
    priceShown.innerHTML = "NOK" + " " + price1;
    sumPrice = price1 + discount;
    totalPrice.innerHTML = "NOK"+ " " + sumPrice;
    optionOne.onclick = function() {
        optionOne.classList.add("cta_price");
        optionTwo.classList.remove("cta_price");
        priceShown.innerHTML = "NOK" + " " + price1;
        sumPrice = price1 + discount;
        totalPrice.innerHTML = "NOK"+ " " + sumPrice;
    }
    optionTwo.onclick = function() {
        optionTwo.classList.add("cta_price");
        optionOne.classList.remove("cta_price");
        priceShown.innerHTML = "NOK" + " " + price2;
        sumPrice = price2 + discount;
        totalPrice.innerHTML = "NOK"+ " " + sumPrice;
    }
}
getPrice(39,79);

