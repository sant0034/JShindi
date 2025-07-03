// Primitive data type are 7 type and it is call by value.

// String , Number , Boolean , null , undefined , symbole and BigInt.

const score = 100;  //Number type
const scoreValue = 100.3 ;   // Number Type
const isLoggedIn = false  // boolean type
const outsideTemp = null   // null type
let userEmail;  // undefine type

const id = Symbol ('123')  // symbol type but it does not mean both have same data type.
const userId = Symbol ('123')

console.log(id === userId);  // here we cross check

const bigNumber = 28349182363n  // bigint data types
console.log(typeof bigNumber);


// Reference (Non- Primitive) Data type it direct allocate the reference in memmory of the reference value.

// Array , Objects , Functions All reference data type and return datatype is saying function and for
//  Functions return datatype we are saying object Function.

const heros = ["saktiman" , "naagraj" , "doga"]      // Array

let myObj = {     // Object type
    name : "Pritam",
    age : 24
}

let myFunction = function () {
    console.log('Hello World');
    
}
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);


