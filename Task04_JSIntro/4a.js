    function factorialOfNumberIteration(argument) {
        if (argument === 0) {
            return 1;
        } else if (argument > 0) {
            let result = 1;
            for (let i = 1; i <= argument; i++) {
                result = result * i;
            }
            return result;
        }

    }
    console.log("ITERATION RESULTS START HERE!");

    console.log(factorialOfNumberIteration(-1));
    console.log(factorialOfNumberIteration(0));
    console.log(factorialOfNumberIteration(1));
    console.log(factorialOfNumberIteration(2));
    console.log(factorialOfNumberIteration(3));
    console.log(factorialOfNumberIteration(4));
    console.log(factorialOfNumberIteration(5));
    console.log("ITERATION RESULTS END HERE!");

    function factorialOfNumberRecursive(argument) {
        if (argument === 0) {
            return 1;
        } else if (argument >= 1) {
            return argument * factorialOfNumberRecursive(argument - 1);
        }
    }

    console.log("RECURSIVE RESULTS START HERE!");
    console.log(factorialOfNumberRecursive(-1));
    console.log(factorialOfNumberRecursive(0));
    console.log(factorialOfNumberRecursive(1));
    console.log(factorialOfNumberRecursive(2));
    console.log(factorialOfNumberRecursive(3));
    console.log(factorialOfNumberRecursive(4));
    console.log(factorialOfNumberRecursive(5));
    console.log("RECURSIVE RESULTS END HERE!");