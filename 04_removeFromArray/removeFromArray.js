const removeFromArray = function(array,...other) {

    
    
    for(let i = 0; i < other.length; i++){
        let compare = other[i]
        for(let y = 0; y < array.length; y++){
            if(compare === array[y]){
                array.splice(y, 1);
            y--
            }
            continue;
        }
            continue;
    }
      
return array    


};

// Do not edit below this line
module.exports = removeFromArray;


/* # Exercise 04 - removeFromArray

Implement a function that takes an array and some other arguments then removes the other arguments from that array:

```javascript
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
```

## Hints

The first test on this one is fairly easy, but there are a few things to think about (or google) here for the later tests:

- you can manipulate the original array you pass into the function call or create a new array that is returned as the result.
- how to remove a single element from an array
- how to deal with multiple optional arguments in a JavaScript function
- For more information, check out MDN's page on [function arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) - 
scroll down to the bit about `Array.from` or the spread operator. You can also check out MDN's page on [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).

1. Inputs: array and other arguments.
2. Output: removes the "other arguments" from the array

Questions: Where do I start?

1. Start by getting the array.

array = [1,2,3,4]

2. Then get the other argument

other = 3

3. Remove the specified argument from the array". For this, I should create a for loop that iterates over the values and looks for that coincidence:

for(i = 0; i < array.length -1; i++){
    if(other == array[i]){
    array.splice(i, othj);
        } else {
        continue; 
        }
}
return array

Question: How can I modify that loop, so it iterates over more than one value

*/