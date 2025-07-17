// +++++++++++ for of loop +++++++++++++++++++++++++++++++++++++++++
// syntex 

// for (const iterator of object){  // Here Object means kis chiz ke upar loop lagana hai,
//  OO JS wala object nahi hai aur iterator means koe variable like i, num, a , etc.
// koe jaruri nahi hai object hi ho stings bhi ho sakta hai 
// }


// here we work on Array
// ["" , "" , ""]
// [{} , {} , {}]

const arr = [ 1, 2, 3, 4, 5]

for (const i of arr){ // it automatically take initiallication , condition and increment 
   // console.log(i);
    
}

const str = "Hello World!"
for (const a of str){
   // console.log(`So here is my string : ${a}`);
    
}


// forof loop on Maps data types

// and maps apne aap me ek object hai and it hold key-value pair object order yaad nahi rakhta lekin
// map order yaad rakhta hai. and it have unique value not repeated value.
// any value (both object and primitive values) may be used as either a key or a value.


const map = new Map()
map.set('In' , "India") // set() function are used to initiallise the value in map
map.set('USA' , "United State Of America")
map.set('Fr' , "France")
map.set('USA' , "United State Of America") // here we add similar thing again but map does not add this that's why we call this is map or 
// we can say predefine things

//console.log(map);
//output :-
/*
Map(3) {
  'In' => 'India',
  'USA' => 'United State Of America',
  'Fr' => 'France'
}
*/


for (const name of map){
    //console.log(name); // pura value in array form me aa jayega  
}
// output :-
/*
[ 'In', 'India' ]
[ 'USA', 'United State Of America' ]
[ 'Fr', 'France' ]
*/



// but if you want key value or dstructure  or the currect way to print map then syntex is
for (const [name , value ] of map){
    //console.log(name ,':-' , value);
}
// output is :-
/* 
 In :- India
USA :- United State Of America
Fr :- France
*/



// agar Object ho to then forof loop
const myObj = {
    'game1' : "NFS", // you can check after change in string key to non string key. result is same.
    'game2' : "Spiderman"
}
for (const [key , value] of myObj){
    console.log(key , ':-' , value);
    
}
// output :-
// TypeError: myObj is not iterable beacuse in forof loop we can't iterate object. 
// but we can iterate with other loop




