const sumAll = function(n1,n2) {


let nreplace1 = 0
let nreplace2 = 0

if(n1 > n2){
    nreplace1 = n1
    nreplace2 = n2
    n2 = nreplace1
    n1 = nreplace2
}
   
let n3 = [];
let sum = 0
    
for(let i = n1; i <= n2; i++){
    n3.push(i);
        
 }

 if (n1 < 0 || n2 < 0){
    return 'ERROR'
 } else if (Number.isInteger(n1) == false || Number.isInteger(n2) == false) {
    return 'ERROR'
 } else if (typeof(n1) == 'string' || typeof(n2) == 'string') {
    return 'ERROR'
 } else if (typeof(n1) == 'object' || typeof(n2) == 'object') {
    return 'ERROR'
 } else {
    for(let y = 0; y <= n3.length-1; y++){
        sum += n3[y]
        }
    return sum
 }
    


};

// Do not edit below this line
module.exports = sumAll;

/* 

# Exercise 05 - sumAll

Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) them:

```javascript
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10


```

1. Two inputs:
 - starting number (sn)
 - finishing number (sn)

 2. put the numbers inside an array


## Hints

Think about how you would do this on pen and paper and then how you might translate that process into code:
- make sure you pay attention to the function parameters
- create a variable to hold the final sum
- loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
- on each iteration add the number to the sum
- return the sum after finishing the loop

*/