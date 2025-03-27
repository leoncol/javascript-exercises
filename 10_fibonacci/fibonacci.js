const fibonacci = function(number) {

  if (number == 0){
      return 0
  } else if (number < 0) {
    return 'OOPS'
  } else {
      let newArray = [1, 1];
  
  for (let i = 0; i <= number;i++) {
                newArray.push(newArray[i]+newArray[i+1]); 
                
              }
      return newArray[number-1];
  
  }
  
     
  
  
        }

// Do not edit below this line
module.exports = fibonacci;
