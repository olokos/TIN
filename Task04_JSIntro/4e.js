    function findLongestWordInString(argument) {
        let longestWord;
        let longestWordLength = 0;
        let stringArray = argument.split(' ');
        for (let i = 0; i < stringArray.length; i++) {
            if (longestWordLength < stringArray[i].length) {
                longestWordLength = stringArray[i].length;
                longestWord = stringArray[i];
            }
        }
        return longestWord;

    }

    console.log(findLongestWordInString("Sentence with immensely long word."));
    console.log(findLongestWordInString("Sentence with long word."));
    console.log(findLongestWordInString("A word."));