function calculateKelvinToFahrenheit() {
    let calculatedValueKelvToFahr = document.getElementById("enteredTempKelvToFahr").value;
    console.log("enteredTempKelvToFahr " + enteredTempKelvToFahr.value);
    calculatedValueKelvToFahr = ((calculatedValueKelvToFahr * (9/5)) - 459.67);
    console.log("calculatedValueKelvToFahr " + calculatedValueKelvToFahr);
    document.getElementById("calculatedValueKelvToFahr").value = calculatedValueKelvToFahr;
    return calculatedValueKelvToFahr;
}

window.calculateKelvinToFahrenheit=calculateKelvinToFahrenheit;