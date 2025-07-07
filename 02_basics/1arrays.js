// ++++ Array +++++++

//const myArr = [1,3,7,3,8,2] // in this element we can pass number, string , means any things
// Arrays indexes started from 0.
//console.log(myArr);   // Print Hole Arrays

//console.log(myArr[2]);

const myArr2 = new Array(4 , 5 , 2 , 1)  // it automatically add square bracket
//console.log(myArr2[3]);



//   ++++++  Arrays Methods  +++++++++++++

// myArr2.push(9)  // this method add the value in array
// myArr2.push(8)
// console.log(myArr2);
// myArr2.pop()      // it delete the last element of the array and we don't pass any argument
// console.log(myArr2);
 


//myArr2.unshift(0)   // it always add value in 0 index, but due to adding value in 0 index we have to replay all the
  // remaining value and it load on the system so we mainlly not use this.
//console.log(myArr2);


//myArr2.shift()   // it always delete the element  from 0 index and it does not have any argument.
//console.log(myArr2);


//console.log(myArr2.includes(9));  // it gives the result in True/False and it's data type is boolean.
//console.log(myArr2.indexOf(1));   // pass the value in array and it give the index possition


const newArr = myArr2.join()  // it join the array but the type is convert it into String
//console.log(myArr2);
// console.log(newArr);
// console.log(typeof newArr);


//    slice  and splice


console.log("A original array" , myArr2);

const myn1 = myArr2.slice(1 , 3)  // it return acopy of section of array and 3 or last index is not included

console.log("B original array" , myArr2);  // orginal array
console.log(myn1);  // slice array


// splice

const myn2 = myArr2.splice(1 , 3)  // splice change the original array and last index is included

console.log("C original array" , myArr2);  // original array
console.log(myn2); // splice array



