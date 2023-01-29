const form = document.querySelector("#Form");
const fullName = document.querySelector("#name");
const password = document.querySelector("#password");
const button = document.querySelector(".btn-submit");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");

function validateForm() {
    event.preventDefault();


    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block"
    }

    if (checklength(password.value, 8) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);


function formSubmit(event)  {
    event.preventDefault();
    message.innerHTML = `<div class="message">Login successful!</div>`;
    form.reset();
}

form.addEventListener("submit", formSubmit);

function checklength (value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const reqExample  = /\S+@\S+\.\S+/;
    const patternMatches = reqExample.test(email);
    return patternMatches;
}