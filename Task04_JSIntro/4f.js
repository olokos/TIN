    function isNumberPrime(argument) {
        if (argument === 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(argument); i++) {
            if (argument % i === 0) {
                return false;
            }
        }



        return true;
    }

    if (isNumberPrime(1)) {
        console.log("This number is a prime number.");
    } else {
        console.log("This number is NOT a prime number.")
    }

    if (isNumberPrime(2)) {
        console.log("This number is a prime number.");
    } else {
        console.log("This number is NOT a prime number.")
    }
    if (isNumberPrime(3)) {
        console.log("This number is a prime number.");
    } else {
        console.log("This number is NOT a prime number.")
    }
    if (isNumberPrime(4)) {
        console.log("This number is a prime number.");
    } else {
        console.log("This number is NOT a prime number.")
    }
    if (isNumberPrime(5)) {
        console.log("This number is a prime number.");
    } else {
        console.log("This number is NOT a prime number.")
    }
