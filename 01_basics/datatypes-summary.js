// Primitive data type are 7 type and it is call by value.
// it give copy of the value and anything change that change in the copy of the value.

// All primitive data type store in Stack and non-primitive in Heap.

// String , Number , Boolean , null , undefined , symbole and BigInt.

const score = 100;  //Number type
const scoreValue = 100.3 ;   // Number Type
const isLoggedIn = false  // boolean type
const outsideTemp = null   // null type
let userEmail;  // undefine type

const id = Symbol ('123')  // symbol type but it does not mean both have same data type.
const userId = Symbol ('123')

//console.log(id === userId);  // here we cross check

const bigNumber = 28349182363n  // bigint data types
// console.log(typeof bigNumber);


// Reference (Non- Primitive) Data type it direct allocate the reference in memmory of the reference value.
// if anything change that change in origial value.
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
// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof myFunction);

//  ---------------------------------------------

// Stack (Primitive)  , Heap(Non-Primitive)

let nameF = "Pritam"

let anotherName = nameF

anotherName = "Tour"

// console.log(nameF);

// console.log(anotherName);

// from just above example prove that change happen in copy value not original in primitive data type


// Non-Primitive Example

let userOne = {
    email : "abc@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "prit@google.com"

console.log(userOne);
console.log(userTwo);

//hence prove that the above example if we change in non-primitive value that change in the original value
//not in copy of that value.

