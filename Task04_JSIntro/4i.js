
    function convertMoneyIntoCoins(amountOfCoins, coinsArray) {

        coinsArray.sort(function(a, b) {
            return a - b;
        });
        console.log(coinsArray);
        for (let i = coinsArray.length - 1; i >= 0; i--) {
            while (amountOfCoins >= coinsArray[i]) {
                amountOfCoins -= coinsArray[i];
                console.log(coinsArray[i]);
            }
        }
    }

    convertMoneyIntoCoins(46, [25, 10, 5, 2, 1]);