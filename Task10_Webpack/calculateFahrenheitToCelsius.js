function calculateFahrenheitToCelsius() {
    let calculatedValueFahrToCel = document.getElementById("enteredTempFahrToCel").value;
    console.log("enteredTempFahrToCel " + enteredTempFahrToCel.value);
    calculatedValueFahrToCel = ((calculatedValueFahrToCel - 32) / 1.8);
    console.log("calculatedValueFahrToCel " + calculatedValueFahrToCel);
    document.getElementById("calculatedValueFahrToCel").value = calculatedValueFahrToCel;
    return calculatedValueFahrToCel;
}
