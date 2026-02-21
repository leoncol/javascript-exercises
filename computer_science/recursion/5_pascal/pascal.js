const pascal = function(number) {
   
  let previousRow = [];
  return generatePreviousRows(previousRow, number)



};

function generatePreviousRows(previousRow, number){
  if (number ==1){
          previousRow.push(1);
          return previousRow
      } else if  (number == 2) {
          previousRow = generatePreviousRows(previousRow, number-1);
          previousRow.push(1);
          return previousRow;
      } else {
          previousRow = generatePreviousRows(previousRow, number-1);
          newArray = getNewArray();
          for (let i = 0; i <= previousRow.length; i++){
              if (i == 0){
                  newArray.push(1);
              }
              if (previousRow[i+1] != undefined){
                  newArray.push(previousRow[i]+previousRow[i+1]);
                  console.log(newArray);
              } 
              
              if (i == previousRow.length){
                  newArray.push(1);
              }

              
              }
                  return newArray;
          }
      }

  


function getNewArray(number){
  let newArray = [];
  return newArray;
}
    

 


// # Exercise 5 - pascal

// The pascal's triangle is modelled as follows:
// - The first row is `1`.
// - Each row can be considered to have a hidden `0` to either sides of it. So the first row could also be said to be `0, 1, 0`
// - To obtain the next row, we take each number and add it with its rightmost neighbor.

// First row: `[1]`
// Second row: `[0+1, 1+0]` or simply `[1, 1]`
// Third row: `[0+1, 1+1, 1+0]` or simply `[1, 2, 1]`
// Fourth row: `[0+1, 1+2, 2+1, 1+0]` or simply `[1, 3, 3, 1]`
// ... 

// The pattern continues forever.

// Your task is to create a *recursive* function, `pascal` - that will take an input `n` and output the `n`th pascal's row as an array of numbers.

// For example, `pascal(3)` should return `[1, 2, 1]`.

  
// Do not edit below this line
module.exports = pascal;
