// ++++++++++++++++++  Dates  +++++++++++++++++++

// date is a object
let myDate = new Date()

// console.log(typeof myDate);

// console.log(myDate);

// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toLocaleString());

// console.log(myDate.toLocaleDateString());

//let myCreatedDate = new Date(2023 , 0 , 23)  

// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString()); // so months started from 0

// let myCreatedDate = new Date(2023 , 0 , 23 , 5 , 3)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-0-14") // in string month started form 1 but if we month is 0 
// // then output is invalid date and in number it started from 0
// console.log(myCreatedDate.toLocaleString());  

//  let myCreatedDate = new Date("01-14-2023")
// console.log(mycreatedDate.toLocaleDateString());  // values are in milli seconds

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);  // output are in milli second
// console.log(myCreatedDate.getTime()); // convert myCreatedDate and compare it

// Now convert into second


// console.log(Date.now()/1000);  // in result it give decimal value remove that we use Math.floor in next line
// console.log(Math.floor(Date.now()/1000));

let getDate = new Date()
// console.log(getDate.getMonth());
// console.log(getDate.getDay());
// console.log(getDate.getMinutes());

// here we define the formate 

let a = getDate.toLocaleString('Default',{
    weekday: "short",
    day: "numeric"
})
console.log(a);















