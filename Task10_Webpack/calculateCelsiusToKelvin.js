function calculateCelsiusToKelvin() {
    let calculatedValueCelToKelv = document.getElementById("enteredTempCelToKelv").value;
    console.log("enteredTempCelToKelv " + enteredTempCelToKelv.value);
    calculatedValueCelToKelv = (calculatedValueCelToKelv + 273.15);
    console.log("calculatedValueCelToKelv " + calculatedValueCelToKelv);
    document.getElementById("calculatedValueCelToKelv").value = calculatedValueCelToKelv;
    return calculatedValueCelToKelv;
}
