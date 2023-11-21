console.log("******************************************* Math Problem *******************************************************")
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
//console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);



// ************************ Math Problem *****************************************************

const isDividedBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0 // check that all numbers divided by 5
console.log("The four numbers are divided by 5 : " + isDividedBy5)
const n1isOvern4 = n1>n4  // check if first number is greater than the last number
console.log("First number is greater than the last number : " + n1isOvern4)
const a = n2 - n1  // second number minus first number
console.log("Second number minus first number : a = " + a)
const b = a*n3   // a multiple the third number
console.log("a multiple the third number : b = " + b)
const c = b%n4    // the rest of the division on b and the fourth number
console.log("The rest of the division of b on the fourth number : c = " + c)

const isLess25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log("The four numbers are less than 25 : " + isDividedBy5)

const isValidMathProblem = isDividedBy5 && isLess25

console.log (`The four numbers are valid according to the provided criteria: ${isValidMathProblem}.\n`) 

// ************************ Pratice Math *******************************************************
console.log("******************************************* Practice Math *******************************************************")

const tripMiles = 1500
const milesHour55 = 30
const milesHour60 = 28
const milesHour75 = 23
const fuelBudget = 175
const fuelGallon = 3

const gallonSpeed55 = tripMiles/milesHour55 
const gallonSpeed60 = tripMiles/milesHour60 
const gallonSpeed75 = tripMiles/milesHour75 

console.log("With 55 miles per hour speed I will need : " + gallonSpeed55.toFixed(2) + " gallons")
console.log("With 60 miles per hour speed I will need : " + gallonSpeed60.toFixed(2) + " gallons")
console.log("With 75 miles per hour speed I will need : " + gallonSpeed75.toFixed(2) + " gallons\n")

console.log("My budget is 175 I can cover : " + (gallonSpeed55*3).toFixed(2) + "$")
console.log("My budget is 175 I can cover : " + (gallonSpeed60*3).toFixed(2) + "$")
console.log("My budget is 175 I can not cover : " + (gallonSpeed75*3).toFixed(2) + "$\n")


console.log("With 55 miles per hour speed the trip will take : " + (tripMiles/55).toFixed(2) + " hours")
console.log("With 60 miles per hour speed the trip will take : " + (tripMiles/60).toFixed(2) + " hours")
console.log("With 75 miles per hour speed  the trip will take : " + (tripMiles/75).toFixed(2) + " hours\n")

console.log("With 60 miles/h speed the trip will take " + (tripMiles/60).toFixed(2) + " hours,\n\
 which save " + (tripMiles/55 - tripMiles/60).toFixed(2) + " hours of driving compared to 55 miles/h,\n\
  and it is covered by your budget contrary to 75 miles/h  ")



