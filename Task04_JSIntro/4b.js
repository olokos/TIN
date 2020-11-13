    function nthNumberOfFibonacci(argument) {
        if (argument === 0) {
            return 0;
        } else if (argument === 1) {
            return 1;
        } else {
            return nthNumberOfFibonacci(argument - 1) + nthNumberOfFibonacci(argument - 2);
        }
    }

    console.log(nthNumberOfFibonacci(0));
    console.log(nthNumberOfFibonacci(1));
    console.log(nthNumberOfFibonacci(2));
    console.log(nthNumberOfFibonacci(3));
    console.log(nthNumberOfFibonacci(4));
    console.log(nthNumberOfFibonacci(5));
    console.log(nthNumberOfFibonacci(6));