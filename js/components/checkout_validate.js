const inputname = document.querySelector("#name");
const nameError = document.querySelector("#name_error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email_error");
const dateOfBirth = document.querySelector("#dob");
const dobError = document.querySelector("#dob_error");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#password_error");
const cardNumber = document.querySelector("#card_number");
const cardError = document.querySelector("#card_error");
const cardName = document.querySelector("#card_name");
const cardNameError = document.querySelector("#card_name_error");
const expiredDate = document.querySelector("#expired_date");
const expiredDateError = document.querySelector("#expired_error");
const cvc = document.querySelector("#cvc");
const cvcError = document.querySelector("#cvc_error");
const purchaseSubmit = document.querySelector("#purchase");

const now = new Date()
console.log(now);

function validateForm(event) {
    event.preventDefault();
    validateName(inputname);
    validateEmail(email);
}

function validateName(inputname) {
    if (inputname.value.trim().length > 0) {
        nameError.style.display = "none";
        return true;
    } else {
        nameError.style.display = "block";
        return false;
    }
}
function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email.value);
    if (patternMatches === true) {
        emailError.style.display = "none";
        return true;
    } else {
        emailError.style.display = "block";
        return false;
    }
}

function validateDob(dateOfBirth) {
    const givenDob = dateOfBirth.value;
    if (givenDob < now) {
        dobError.style.display = "none";
        return true;
    } else {
        dobError.style.display = "block";
        return false;
    }
}