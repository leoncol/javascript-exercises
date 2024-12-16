const leapYears = function(year) {

if (year % 100 == 0 && year % 400 == 0) {
    return true
} else if (year % 100 == 0 || year % 4 == 1) {
    return false
} else if (year % 4 == 0) {
    return true
}

};

// Do not edit below this line
module.exports = leapYears;


/* # Exercise 06 - leapYears

Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:

> Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)
>
> -- <cite>[Learn to Program](https://pine.fm/LearnToProgram/chap_06.html) by Chris Pine</cite>

```javascript
leapYears(2000) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false
```
To calculate a leap year, you can use the following rule:
Divisibility by 4
A year is a leap year if it is evenly divisible by 4. For example, 1988, 1992, and 1996 are leap years.
Exception for century years
Century years, like 300, 700, 1900, and 2000, are not leap years unless they are also evenly divisible by 400. For example, 1700, 1800, 1900, and 2100 are not leap years, but 1600, 2000, and 2400 are. 
3 Ways to Calculate Leap Years - wikiHow
A leap year has 366 days, with the extra day added at the end of February as February 29th. 


## Hints
- use an `if` statement and `&&` to make sure all the conditions are met properly
 */