    function binarySearch(desiredNumber, arrayOfNumbers) {
        let currentIndex = arrayOfNumbers.length / 2;
        let left = 0;
        let right = arrayOfNumbers.length - 1;
        arrayOfNumbers.sort(function(a, b) {
            return a - b;
        });
        while (left <= right) {
            if (desiredNumber > arrayOfNumbers[currentIndex]) {
                left = currentIndex + 1;
                currentIndex = right + left / 2;
            } else if (desiredNumber < arrayOfNumbers[currentIndex]) {
                right = currentIndex - 1;
                currentIndex = left + right / 2;
            } else {
                return arrayOfNumbers[currentIndex];
            }
        }
        return -1;
    }
    console.log('Number found: ' + binarySearch(3, [1, 2, 4, 5, 6, 7, 8, 3, 9, 10]));