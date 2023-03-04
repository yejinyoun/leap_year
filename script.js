"use strict";

console.log("fucku");

// leap year
// 1. check if it's divisible by 4
// - false : not a leap year
// - true : step 2

// 2. check if it's divisible by 100
// - false : yes leap year
// - true : step 3

// 3. check if it's divisible by 400
// - true : yes leap year
// - false : not a leap year

function isLeapYear(year) {
  let result = divisibleBy4(year);
  function divisibleBy4(year) {
    if (year % 4 !== 0) {
      return false;
    } else {
      return divisibleBy100(year);
      function divisibleBy100(year) {
        if (year % 100 !== 0) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

  function divisibleBy400() {}

  return console.log(result);
}

isLeapYear(300);
