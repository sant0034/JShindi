const name = "Pritam"  // create string
//console.log(name);


const repoCount = 50

//console.log( name + repoCount + "Some Value"); // this type of syntax is out dated.

// so don't use ""or'' use backtick ` `
//console.log(`So print the value of name is ${name} and the repoCount is ${repoCount}`);

const gameName = new String('Prit-Singh-sdj-kefj-wd')   // Anothe way to create string

// console.log(gameName);

// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase()); //it don't change the original value because String is Primitive data type

// console.log(gameName.charAt(3));   // we can find which charactor are what position.

// console.log(gameName.indexOf('i')); 



const newString = gameName.substring(0 , 7)  // end value are not included. we can't give -ve value

//console.log(newString);

const anotherString = gameName.slice(-1 , 4)  // we can give negative value also
//console.log(anotherString);



const newStringOne = "    Pritam    "

//console.log(newStringOne);

//console.log(newStringOne.trim());  
// trim method are used to remove the starting and ending spaces of the string and line terminator


const url = "https://prit.com/singh%302ets"

//console.log(url.replace('%302', '-'));   // we can replace the value

//console.log(url.includes('pritam'))   // we can asked also

console.log(gameName.split('-'));  // here we get the array 






