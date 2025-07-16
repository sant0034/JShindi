//++++++++++++++++++ truthy AND falsy Value
const userEmail = []
// Falsy Value are :- 
// "" , false , 0 , -0 , BigInt 0n , null , undefined , Nan ,  aur eske alawa jo bhi value hai
// wah sab truthy value hai.

//so some truthy value are :- [] , " " string with space , "0" , 'false' , {} empty object , 
// function (){} empty function with no parameter , and so on........

if (userEmail) { // yeha par hamne koe compaire nahi kiya , check bhi nahi kya direct variable pass 
    // kiya aur code execute kar gaya with true result bas maan liye ki ye true value hai , 
    // so kuch predefine truthy value aur kuchh predefine falsy value hoti hai JS me.
    console.log("Got user Email");
    
}else {
    console.log("don't have user email");
    
}


// so you can check the value is truthy or falsy
/*
if (userEmail.length === 0){
    console.log("If array lenght is equal to 0 then it is truethy value");
    
}else {
    console.log("Falsy");
    
}
*/

// Another Example
const emptyObj = {}
/*
if(Object.keys(emptyObj).length === 0) {   //Object.keys() ye function hame array return karta hai keys ka
    console.log("Object is empty so it is truthy value");
    
} else {
    console.log("falsy value");
    
}
*/


// In browser console

// false == 0 it give true by default
// false == '' it give true by default
// 0 == ''  it give true by default




// Nullish Coalescing Operator(??) 

// yeha jo bhi dekhna hai wah sab null and undefined operator ke upper hi hota hai

let val1;
// val1 = 5 ?? 10
// console.log(val1);


// Another example
/*
val1 = null ?? 10  // null value aaye hai to NCO uska safety check kar de, ho sakt hai null ke basics par 
// koe issue ho jaye or aage ja ke koe problem kar de. yeha par 10 nahi aayega yeha par koe complex 
// function hoga jo ki data base se koe value dega wah hoga
console.log(val1);
*/



// Anothe example
// val1 = undefined ?? 13
// console.log(val1);


// Another Example
val1 = null ?? 10 ?? 12  // yeha par jo value null ke just baad aaye hai wahi result me aayegi
console.log(val1);

//++++++++++++ Terniary Operator ++++++++++++++++++++++++++++++++++++++++
// syntax :- condition ? true : false
// Example of Terniary Operator

const iceTeaPrice = 100
iceTeaPrice <= 90 ? console.log("Yes iceTea Price is grater then 100 True") : console.log("false");





