// let x,y,z;
// x=9;y=6;z=x+y; console.log('z');
// //alert(3+5)  it gives error because we are talking in nodeJs , there is another syntex in NodeJs
// //write(3+2);
// let a;
// a=122;
// console.log(a);

// let color = "Green";
// switch (color){
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Go Slow");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Light is broken");
// }
// let  d="John"+" "+"Doe";
// console.log(d);

// Conditional Statement

// let mode="light";
// let color;

// if(mode === "dark"){
//     color = "black";   
// }

// if(mode === "light"){
//     color = "White";
// }

// console.log(color);


// let mode = "Light";

// let color;

// if ( mode === "Light") {
//     color = "White";
// } else {
//     color = "Black";
// }

// console.log(color);

// 

// let a = 8;
// if (a % 2 === 0) {
//     console.log("a is even number " + a );  
// }else {
//     console.log("a is not a odd number " + a );
    
// }

// else if

// let age = 59;

// if ( age <= 18) {
//     console.log("You are Young");
    
// }else if ( age >= 60 ) {
//     console.log("You are Senior citizen");
    
// } else {
//     console.log("You are adult");
    
// }


// Ternary operators

// let age = 49;

// let result = age >= 50 ? "you are senior" : "You are Adult" ;

// console.log(result);

// practice Question 1

/* Get the user to input a number using promt ("Enter a number") check if the number 
is a multiple of 5 or not.  */

// 


// Question 2
// Write a code which can give grades to students according to there score.

let percent = 90;

if ( 100 >= percent && percent >= 80 ) {
    console.log("Student get Grade A " +percent);
    
} else if ( 79 >= percent && percent>=70) {
    console.log("Student get Grade B " + percent);
    
} else if ( 69>= percent && percent >= 60) {
    console.log("Student get Grade C " + percent);
    
} else if ( 59>= percent && percent >=50) {
    console.log("Student get Grade D " + percent);
    
} else if ( 49 >= percent && percent>0){
    console.log("Student get Fail " +percent);
    
} else {
    console.log("Student Grade not in Range " +percent);
    
}



