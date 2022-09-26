// Variables
// A variable is a “named storage” for data. We can use variables to store data.
// To create a variable in JavaScript, use the var , let and const keyword.
 // EXAMPLE:
// var message; // here we declared the variable. when we assign the value, then its called initialization. We can declare and initialize variable at same time or later as well after declaration.
// message = "Hello World"; // here we initialized the variable we declared above.
// var keyword have global scope. i.e we can re-declare same variable mutiple time and change the value always.
//let message = "Hello World" // let keyword have block scope. We can not re declare same variable using let. But we can re initialize its value and change multiple times.
// const message =  "Hello World"; // const keyword is same like let keyword having block scope. But we can't re initialize a variable value declared using const keyword.

// There are two limitations on variable names in JavaScript:

// 1.The name must contain only letters, digits, or the symbols $ and _.
// 2.The first character must not be a digit.


// DATA TYPES OF JAVASCRIPT: There are eight basic data types in JavaScript.
// 1. Numbers
// 2. Strings
// 3. Booleans
// 4. Null
// 5. Undefines
// 6. BigInt
// 7. Objects
// 8. Symbols

// 1. Numbers: The number type represents both integer and floating point numbers.

// There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.

// Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.

// Infinity represents the mathematical Infinity. It is a special value that’s greater than any number.

// console.log(1 / 0); // Infinity

// or we can just reference it directly:
// console.log(Infinity); // Infinity

// NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance
//  console.log("not a number" / 2); // NaN

//  Any further mathematical operation on NaN returns NaN:
//  console.log(NaN + 1); // NaN
//  console.log(NaN * 2); // NaN

 // So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).

 // 2. Strings: A string in JavaScript must be surrounded by quotes.

//  let str = "Hello";
//  let str2 = 'can also use single quotes';
//  let str3 = `can use backticks to embedd a variable in a string like ${str}`;

 // In JavaScript, there are 3 types of quotes.
 // 1. Double quotes ("Hello")
 // 2. Single quotes('Hello')
 // 3. Back Ticks(`Hello`)

 // Double and single quotes are simple quotes. There’s practically no difference between them in JavaScript.
 // Backticks are extended functionality quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

//  let name = "Ravi";
 // here will embedd a variable
//  console.log(`Hello, ${name}!`) // output: Hello, Ravi!
 // here will embedd an expression
//  console.log(`the result is ${1 + 2}`) // output -> the result is 3

//   The expression inside ${…} is evaluated and the result becomes a part of the string. We can put anything in there: a variable like name or an arithmetical expression like 1 + 2
//   or something more complex.


// 3. Boolean: The boolean type has only two values: true and false.
// This type is commonly used to store yes/no values: true means yes, correct, and false means no, incorrect.
 
// let isGreater = 4 > 1;
// console.log(isGreater) // output -> true

// 4. Null: The special null value does not belong to any of the types described above.

// It forms a separate type of its own which contains only the null value:

// let age = null; 

// It's just a special value which represents nothing, empty or value unknown.

// The code above states that age is unknown.


// 5. Undefined: The special value undefined also stands apart. It makes a type of its own, just like null.
// The meaning of undefined is value is not assigned.
// If a variable is declared, but not assigned, then its value is undefined

// let age;
// console.log(age)// output -> undefined


// 6. BigInt: In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.
// To be really precise, the “number” type can store larger integers (up to 1.7976931348623157 * 10308), but outside of the safe integer range ±(253-1) there’ll be a precision error, 
// because not all digits fit into the fixed 64-bit storage. So an “approximate” value may be stored.

// A BigInt value is created by appending n to the end of an integer:

// Example: 
// const bigInt = 1234567890123456789012345678901234567890n;


// 7. Objects: The object type is special.
// All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.

// Will explain more later in details.


// 8. Symbols: A “symbol” represents a unique identifier.

// A value of this type can be created using Symbol():

// Example : 
// let id = Symbol("id");



// typeof Operator: To find or know the data type of any variable we can use typeof operator.

// typeof undefined // "undefined"

// typeof 0 // "number"

// typeof 10n // "bigint"

// typeof true // "boolean"

// typeof "foo" // "string"

// typeof Symbol("id") // "symbol"

// typeof Math // "object"  

// typeof null // "object"  

// typeof alert // "function" 


// Interaction functions in JS

// alert : We use this function to pop a message on browser and it shows till user press ok.

// Example:
// alert("Hello");


// prompt: we use this to take input from user. It opens a window on web page and ask user to input something in it. We get the result once user enter something and press Ok.
// If user will cancel or press esc key. We will get Null in result.

// Example: 

// prompt("Enter your name?"); 


// confirm: This function ask a question to user in browser. It returns True if user press Ok or False if user press cancel.

// Example : 

// let isBoss = confirm("Are you the boss?");

// alert( isBoss ); // true if OK is pressed



// String Conversion: 
// We can convert any Data Type to String by following methods:

// let num = 12345; // type of num is Number.
// num = String(12345) //
// or
// let str = String(num);
// let str = num.toString;
// num = 12345 + "";


// Number Conversion: It can be performed on mathematical functions and expressions only.

// let str = "123"; // typeof str is String here;
// let num = Number(str); 
// let num = +(str);
// let num = str.toNumber;
// let num = +(undefined) ==> NaN;
// let num = +(null) ==> 0;
// let num = +(true) ==> 1;
// let num = +(false) ==> 0;
