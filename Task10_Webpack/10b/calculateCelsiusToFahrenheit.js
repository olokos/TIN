function calculateCelsiusToFahrenheit() {
    let calculatedValueCelToFahr = document.getElementById("enteredTempCelToFahr").value;
    console.log("enteredTempCelToFahr " + enteredTempCelToFahr.value);
    calculatedValueCelToFahr = ((calculatedValueCelToFahr * 1.8) + 32);
    console.log("calculatedValueCelToFahr " + calculatedValueCelToFahr);
    document.getElementById("calculatedValueCelToFahr").value = calculatedValueCelToFahr;
    return calculatedValueCelToFahr;
}
