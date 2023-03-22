const inputname = document.querySelector("#name");
const nameError = document.querySelector("#name_error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email_error");
// const dateOfBirth = document.querySelector("#dob");
// const dobError = document.querySelector("#dob_error");
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


function validateForm(event) {
    event.preventDefault();
    validateName(inputname);
    validateEmail(email);
    if (checkLength(password.value, 0) === true) {
        validatePassword(password);
    }
    validateCardNumber(cardNumber);
    validateCardName(cardName);
    validateCvc(cvc);

    if (validateName(inputname) &&  validateEmail(email) && validateCardNumber(cardNumber) && validateCardName(cardName) && validateCvc(cvc)) {
        window.location.href = "checkoutsuccess.html";
    }
}

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}
function validateName(inputname) {
    if (checkLength(inputname.value, 0) === true) {
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

function validatePassword(password) {
    if (checkLength(password.value, 7)) {
        passwordError.style.display = "none";
        return true;
    } else {
        passwordError.style.display = "block";
        return false;
    }
}
// Reference for card number validation at https://gist.github.com/brazilnut2000/8187771
function validateCardNumber(cardNumber) {
    const reVisa = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const visaMatch = reVisa.test(cardNumber.value);
    const reMaster = /^5[1-5][0-9]{14}$/;
    const masterMatch = reMaster.test(cardNumber.value);
    if(visaMatch === true || masterMatch === true) {
        cardError.style.display = "none";
        return true;
    } else {
        cardError.style.display = "block";
        return false;
    }
}

function validateCardName(cardName) {
    if (checkLength(cardName.value, 0) === true) {
        cardNameError.style.display = "none";
        return true;
    } else {
        cardNameError.style.display = "block";
        return false;
    }
}

function validateCvc(cvc) {
   
    if (cvc.value.trim().length == 3) {
        cvcError.style.display = "none";
        return true;
    } else {
        cvcError.style.display = "block";
        return false;
    }
}

