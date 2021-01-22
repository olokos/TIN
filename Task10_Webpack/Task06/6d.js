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
    let validatedNumber = validateNumber(document.getElementById("favoriteNumber").value);
    let validatedEmail = validateEmail(document.getElementById("emailField").value);
    if (validatedEmail && validatedEmail) {
        return true;
    } else {
        return false;
    }
}


function addNewTableRow() {
    if (validateBothFields()) {
        let tr = document.createElement("tr");
        let tdNumber = document.createElement("td");
        let tdEmail = document.createElement("td");
        let tdNumberText = document.createTextNode(document.getElementById("favoriteNumber").value);
        let tdEmailText = document.createTextNode(document.getElementById("emailField").value);
        tr.appendChild(tdNumber);
        tr.appendChild(tdEmail);
        tdNumber.appendChild(tdNumberText);
        tdEmail.appendChild(tdEmailText);
        document.getElementById("rows").append(tr);
    } else {
        console.error("Invalid data provided, not appending to table!");
    }
}
