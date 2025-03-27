const findTheOldest = function(person) {
    let yearNow = new Date();
    
    person.forEach((number, index, array) => {
        if (!number.yearOfDeath){
            number["age"] = yearNow.getFullYear() - number.yearOfBirth;
        } else {
            number["age"] = number.yearOfDeath - number.yearOfBirth;
        }
    });
   
    person.sort((a, b) => b.age - a.age);
 return person[0];
};


// Do not edit below this line
module.exports = findTheOldest;
