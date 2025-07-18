//+++++++++++++++++++++ map function +++++++++++++++++++++++++++++++++++
// map function me ham for each wala operation bhi perform kar sakte hai filter bhi use karte hai.

const myNumers = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNumers.map( (num) => num + 10) // it automatically return value means ye nahi ki print value nahi likhna padega
// console.log(newNums);
// lekin esi ko scope me likhte hai to return keyword use karna padega
const newNums1 = myNumers.map( (num) => {return num + 10})
//console.log(newNums1);
// output :-
/*
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/




// +++++++++++++++++++ chaining ++++++++++++++++++++++++++++++++++
// cahining means function then again function and so on
const valueChain = myNumers
                   .map( (num) => num * 10)
                   .map( (num) => num + 1) // es num ki value jo just above map ka num hai uski first value hogi
//console.log(valueChain);
// output :- 
/*
[
  11, 21, 31, 41,  51,
  61, 71, 81, 91, 101
]
*/


// Now ab ham filter ko bhi chainig me use kar rahe
// filter true or false return karta hai.
const valueChainFil = myNumers.map( (num) => num*10).map((num) => num + 1).filter((num) => num >= 40)
console.log(valueChainFil);










