function validateEmail(stringToValidate) {
    let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (pattern.test(stringToValidate)) {
        document.getElementById("emailField").style.backgroundColor = "white";
        console.log("Proper email was provided.");
        return true;
    } else {
        document.getElementById("emailField").style.backgroundColor = "darkred";
        console.error("Invalid email provided!");
        return false;
    }
}

function validateNumber(stringToValidate) {
    let pattern = /^(0|-*[1-9]+[0-9]*)$/;
    if (pattern.test(stringToValidate)) {
        document.getElementById("favoriteNumber").style.backgroundColor = "white";
        console.log("Proper number was provided.");
        return true;
    } else {
        document.getElementById("favoriteNumber").style.backgroundColor = "darkred";
        console.error("Invalid number provided!");
        return false;
    }
}

function validateBothFields() {
    validateNumber(document.getElementById("favoriteNumber").value);
    validateEmail(document.getElementById("emailField").value);
}
