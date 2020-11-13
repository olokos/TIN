    function checkStringPalindrome(argument) {
        argument = argument.toUpperCase();
        for (let i = 0; i < argument.length / 2; i++) {
            if (argument.charAt(i) !== argument.charAt(argument.length - i - 1)) {
                return false;
            }
        }
        return true;
    }

    if (checkStringPalindrome("Anna")) {
        console.log("This word is a palindrome");
    } else {
        console.log("This word is NOT a palindrome");
    };

    if (checkStringPalindrome("Xanax")) {
        console.log("This word is a palindrome");
    } else {
        console.log("This word is NOT a palindrome");
    };

    if (checkStringPalindrome("Whatever")) {
        console.log("This word is a palindrome");
    } else {
        console.log("This word is NOT a palindrome");
    };