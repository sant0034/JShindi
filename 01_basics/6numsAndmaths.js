const num = 400  // here data type is pre-define

//console.log(num);

const balance = new Number(100)  // we fixed the data type number

//console.log(balance);

//console.log(balance.toFixed(1));  // here we can fixed the value

const intoString = balance.toString()  // after change into string so all the properties of string are applyed to

//console.log(intoString);

//console.log(typeof intoString);

//console.log(intoString.length);

const otherNumber = 1129.3732

const a = otherNumber.toPrecision(3)  // toPrecision is also round off the value

//console.log(typeof a);


//console.log(otherNumber.toPrecision(3));  // number digit must be 1 to 21 and it return String


const hundreds = 1000000

// console.log(hundreds.toLocaleString()); // it gives String the value in U.S standard

// console.log(hundreds.toLocaleString('en-IN'));  // it gives the String value in Indian standard 


// +++++++++++++++++++++ Maths  ++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));  // return the absolute value
// console.log(Math.round(4.2));
// console.log(Math.ceil(4.2));  // output it give 5 because it choose above value
// console.log(Math.floor(8.9));  // output it give is 8 becaause it choose the lowest value

// console.log(Math.min(3,7,1,3,5));  // it give minimum value
// console.log(Math.max(6,9,3,4,6,2,1,0));


// console.log(Math.random());   // it give some random value auto generated and always give value between 0 and 1.
// console.log(Math.random()*10+1);  

console.log(Math.floor(Math.random()*10) + 1);  // it give one digit value

const min = 10
const max = 20

Math.random()

console.log(Math.floor(Math.random() * (max - min + 1)) + min);





