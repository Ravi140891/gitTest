// Variables
// A variable is a “named storage” for data. We can use variables to store data.
// To create a variable in JavaScript, use the var , let and const keyword.
 // EXAMPLE:
 var message; // here we declared the variable. when we assign the value, then its called initialization. We can declare and initialize variable at same time or later as well after declaration.
 message = "Hello World"; // here we initialized the variable we declared above.
  // var keyword have global scope. i.e we can re-declare same variable mutiple time and change the value always.
  let message = "Hello World" // let keyword have block scope. We can not re declare same variable using let. But we can re initialize its value and change multiple times.
  const message =  "Hello World"; // const keyword is same like let keyword having block scope. But we can't re initialize a variable value declared using const keyword.
  