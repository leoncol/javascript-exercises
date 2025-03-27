const palindromes = function(string) {
    string = string.toLowerCase();
    let wordArray = string.split((/[.,!? ]/));
wordArray = wordArray.join('');
wordArray = wordArray.split('');

    let inverted = [];
    for (let i = wordArray.length - 1; i >= 0; i--){
        inverted.push(wordArray[i]);
    }
    
    let isPalindrome = wordArray.length === inverted.length && wordArray.every((value, index) => value === inverted[index]);

    return isPalindrome;

    
}
   

// Do not edit below this line
module.exports = palindromes;
