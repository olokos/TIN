function calculateFahrenheitToKelvin() {
    let calculatedValueFahrToKelv = document.getElementById("enteredTempFahrToCel").value;
    console.log("enteredTempFahrToCel " + enteredTempFahrToCel.value);
    calculatedValueFahrToKelv = ((calculatedValueFahrToKelv + 459.67) * (5/9));
    console.log("calculatedValueFahrToKelv " + calculatedValueFahrToKelv);
    document.getElementById("calculatedValueFahrToKelv").value = calculatedValueFahrToKelv;
    return calculatedValueFahrToKelv;
}
