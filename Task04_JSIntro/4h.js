function findMinAndMaxNumberInArray(argument) {
        let min = argument[0];
        let max = argument[0];
        let secMin = argument[0];
        let secMax = argument[0];
        for (let i = 1; i < argument.length; i++) {
            if (argument[i] < min) {
                secMin = min;
                min = argument[i];
            } else if (argument[i] < secMin) {
                secMin = argument[i];
            }
            if (argument[i] > max) {
                secMax = max;
                max = argument[i];
            } else if (argument[i] > secMax) {
                secMax = argument[i];
            }

        }
        console.log("Second lowest number is: " + secMin + " and second greatest number is: " + secMax);
    }
    findMinAndMaxNumberInArray([
        1,
        4,
        0,
        12,
        34,
        56,
        78,
        93
    ])