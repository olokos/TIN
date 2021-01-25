function calculateMilesToKilometers() {
    let calculatedDistanceMilesToKilometers = document.getElementById("enteredDistanceMileToKilometers").value;
    console.log("enteredDistanceMileToKilometers " + enteredDistanceMileToKilometers.value);
    calculatedDistanceMilesToKilometers = (calculatedDistanceMilesToKilometers * 1.609344);
    console.log("calculatedDistanceMilesToKilometers " + calculatedDistanceMilesToKilometers);
    document.getElementById("calculatedDistanceMilesToKilometers").value = calculatedDistanceMilesToKilometers;
    return calculatedDistanceMilesToKilometers;
}
