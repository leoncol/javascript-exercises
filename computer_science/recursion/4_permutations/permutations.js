

const permutations = function(array){
    let masterArray = [];
    permutate(array);
    function permutate(array, copy = []){
        if (array.length == 0){
            const shallowCopy = copy.slice();
            saveToArray(shallowCopy);
            return;
        }
    
        array.forEach((element,index) => {
            let a = element;
            copy.push(a);
            permutate(array.filter((element) => element != array[index]), copy);
            copy.pop();
        })
    }

    function saveToArray(array){
        masterArray.push(array);
        console.log(masterArray);
        
    };
    
   

    return masterArray;

    
}





    




  
// Do not edit below this line
module.exports = permutations;
// # Exercise 4 - permutations

// Write a function that takes in an empty array or an input array 
// of an consecutive positive integers, starting at 1, 
// and returns an array of all possible permutations of the original array

// The integers will not repeat.

// ```javascript
// permutations([1, 2, 3]); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// // An empty set has a single permutation, 0! = 1
// permutations([]); // [[]]
// ```
