const reverseString = function(string) {


let array = string.split("");
let reverse = ''
for(let i = array.length -1; i >= 0; i--){
reverse += array.splice(i)
}
return reverse
}


    
    
// Do not edit below this line
module.exports = reverseString;


/* Pretty simple, write a function called `reverseString` that returns its input, reversed!
Strings in JavaScript cannot be reversed directly 
so you're going to have to split it into something else first.. 
do the reversal and then join it back together into a string.




(function() {

   let input = prompt("Insert the word to reverse")
let array = input.split("");
let reverse = ''
for(let i = array.length -1; i >= 0; i--){
if(array[i] === reverse[0]){
    break
} else {
    let reverse = array.splice(i)
    }
}

})();
*/