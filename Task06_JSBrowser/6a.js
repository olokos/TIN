function calculateToFahrenheit() {
    let calculatedValue = document.getElementById("enteredTemp").value;
    console.log("enteredTemp " + enteredTemp.value);
    calculatedValue = ((calculatedValue * 1.8) + 32);
    console.log("calculatedValue " + calculatedValue);
    document.getElementById("calculatedTemp").value = calculatedValue;
    return calculatedValue;
}
