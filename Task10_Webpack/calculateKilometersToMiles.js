function calculateKilometersToMiles() {
    let calculatedDistanceKilometersToMiles = document.getElementById("enteredDistanceKilometersToMiles").value;
    console.log("enteredDistanceKilometersToMiles " + enteredDistanceKilometersToMiles.value);
    calculatedDistanceKilometersToMiles = (calculatedDistanceKilometersToMiles / 1.609344);
    console.log("calculatedDistanceKilometersToMiles " + calculatedDistanceKilometersToMiles);
    document.getElementById("calculatedDistanceKilometersToMiles").value = calculatedDistanceKilometersToMiles;
    return calculatedDistanceKilometersToMiles;
}
