const totalIntegers = function(object) {
    if (typeof object == 'object'){
         return countElements(object)
    } else {
     return undefined;
    }
     
     
 ;}
 
 function countElements(object){
     let check = 0;
     if (typeof object != 'string'){
          for (let key in object){
         if (Number.isInteger(object[key])){
             check += 1;
         } else {
             check += countElements(object[key]);
         }
     }
     }
   
     return check;
 }
// const totalIntegers = function(object) {
//     let check = 0
//     if (Number.isInteger(object)){
//         return 1;
//     }
    
//     if (typeof object != 'string'){
//         for (let key in object){
//         check += totalIntegers(object[key]);
//          }
//     }
    

//     return check;
    
    
// ;}

// const totalIntegers = function(object) {
//     let check = 0
//     // if (Number.isInteger(object)){
//     //     return 1;
//     // }
    
    
//     if (typeof object == 'object'){
//         for (let key in object){
//         if (Number.isInteger(object[key])){
//             check += 1;
//         } else {
//             check += totalIntegers(object[key]);
//         }
//          }
//     }
    
    

//     return check;
    
    
// ;}



  
// Do not edit below this line
module.exports = totalIntegers;
