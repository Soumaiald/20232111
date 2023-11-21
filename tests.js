// Variables declaration example
var newVariable = "string value"
let newBooleen = true
const newCst = 7

/**
 * this an example of "if else" statement
 */

if (newBooleen == true) {
    console.log("the if condition is True")
}
else {
    console.log("the condition is False")
}

var a=3
var b=5
const fruits = ['apple', 'banana', 'cherry']


if (a>b && fruits.length==3){
    console.log(a + " is greater than " + b + "and fruits length equal to 3")
}
else if (a-b<0) {
    console.log(a + " is less than " + b)
}
else {
    console.log(a + " is equal " + b)
}

/**
 * This an example of "for" statement
 */

for (let i=0; i<=newCst; ++i) {
    console.log('iteration number : ' + i)
}


console.log("Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n\
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\
  Ut enim ad minim veniam,\t quis nostrud exercitation ullamco \n\
  laboris nisi ut aliquip ex ea commodo consequat.\n\
   Duis aute irure dolor in reprehenderit")