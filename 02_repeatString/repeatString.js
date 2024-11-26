
const repeatString = function(string,num) {


let newstring = '';
    
    
for(let i = 0; i < num; i++){
        newstring += string;
       
}       
    if (num < 0){
        return "ERROR";
    } else {
       return newstring;
    }
}
;
    

// Do not edit below this line
module.exports = repeatString;
