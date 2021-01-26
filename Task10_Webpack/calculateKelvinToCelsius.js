function calculateKelvinToCelsius() {
    let calculatedValueKelvToCel = document.getElementById("enteredTempKelvToCel").value;
    console.log("enteredTempKelvToCel " + enteredTempKelvToCel.value);
    calculatedValueKelvToCel = (calculatedValueKelvToCel - 273.15);
    console.log("calculatedValueKelvToCel " + calculatedValueKelvToCel);
    document.getElementById("calculatedValueKelvToCel").value = calculatedValueKelvToCel;
    return calculatedValueKelvToCel;
}

window.calculateKelvinToCelsius=calculateKelvinToCelsius;