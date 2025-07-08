const marvel_heros = ["thor" , "Ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

//marvel_heros.push(dc_heros)  // here we want to add the arrays but actullay in output arrays are i
// so it take arrays as entry data, because array koe bhi data le leta hai. it push on the existing array.

//console.log(marvel_heros);
// output :- [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// so if want any value from 3 element then 
//console.log(marvel_heros[3][0]);  // but this is not right ways so

const allHeros = marvel_heros.concat(dc_heros)  // it return the new array and another cancat easy method is spread.
// console.log(allHeros);  // concat limitation is it apply on two value but spread is on multiple value.
// output :- [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros , ...dc_heros]  // so here we spread mathod.
// console.log(all_new_heros);
// so output is :-  [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]




const another_array = [1 ,2 ,3 ,[4 ,5, 6] , 7 , [6 , 7 , [4 , 5]]]

// saare array ko ek hi array me kar deta hai
//const real_another_array = another_array.flat(Infinity)  // eske ander pass karna kitni ander tak ki array hai like flat(3)
//console.log(real_another_array);
/* 
output :- [
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]

*/

// console.log(Array.isArray("Pritam"))    // use for asking the things
// console.log(Array.from("Prit"));         // from() are used to convert the value into array
                                         
// console.log(Array.from({name : "Prit"}));  // here got confuse first which one i make string key or value that's he return empty array
// output :- []




let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 ,score3));  //A set of elements to include in the new array object. 
// Returns a new array from a set of elements and set of element may be variables , arrays etc.
// in output he create new array :- [ 100, 200, 300 ]

