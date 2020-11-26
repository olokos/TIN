function calculateToFahrenheit() {
    let calculatedValue = document.getElementById("enteredTemp").value;
    console.log("enteredTemp " + enteredTemp.value);
    calculatedValue = ((calculatedValue * 1.8) + 32);
    console.log("calculatedValue " + calculatedValue);
    document.getElementById("calculatedTemp").value = calculatedValue;
    return calculatedValue;
}

function displayParagraphAfter5s() {

    let paragraph = document.createElement("p");
    let paragraphText = document.createTextNode("You need to enter a value into Celsius input and press the button Calculate F*!");
    paragraph.appendChild(paragraphText);
    document.body.appendChild(paragraph);
    return true;
}
setTimeout(displayParagraphAfter5s, 5000);
