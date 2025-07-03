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

let persent = 100

if ( 100 <= persent >= 80 ) {
    console.log("Student get Grade A");
    
} else if ( 79 <= persent >=70) {
    console.log("Student get Grade B");
    
} else if ( 69<= persent >= 60) {
    console.log("Student get Grade C");
    
} else if ( 59<= persent >=50) {
    console.log("Student get Grade D");
    
} else if ( 49 <= persent >=40){
    console.log("Student get Fail");
    
} else {
    console.log("Student Grade not in Range");
    
}



