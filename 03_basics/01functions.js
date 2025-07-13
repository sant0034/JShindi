// function package of code ek baar create kar do ab use jaha le jana hai uski copy le jao.
function sayMyName() {
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("A");
    console.log("M");  
}
//sayMyName // function referrence
// sayMyName()  // function execute


// Add two numbers
// in java script me number ki types dene ki jarurat nahi hai

// function addTwoNumbers(number1 , number2) { // number1 and number2 are parameter
//     console.log(number1 + number2);
    
// }
// function call time per jo value dete hau use bolte hai argument
 //addTwoNumbers(3 , 5)  // output:- 8 
// addTwoNumbers( 3 , "5")  // output:- 35 because 5 is string so it print just after 3
// const result = addTwoNumbers( 3 , 5)  // output:- 8 lekin 
//console.log(result);  // jam ham result ko print karayege to output me undefined aayega means result me koe value store nahi hue hai.

// return keyword
function addTwoNumbers(number1 , number2) {
    // let result = number1 + number2
    // console.log("Prit");
    // return result  // return ke baad jo kuchh likhege wah execute nahi hoga , function ki defination hai
    // //console.log("Pritam"); 

    // or above code ko aur simple tarah se likh sakte hai

    return number1 + number2
    
}
const result = addTwoNumbers( 3 , 5)
//console.log("Result is", result);

// create another function and work on it
function loginUserMessage(username) {
    return `${username} just logged in`
}
// console.log(loginUserMessage("Pritam"))
//console.log(loginUserMessage());  // output:- undefined just logged in  aayega kyu ki hamne username ki koe value define hi nahi ki hai.


// now introduce if statement
function userMessage(message) {
    // if(message === undefined){
    //     console.log("Please enter a message");
    //     return  // return keyword use kar diya to ab aage ka koe bhi code execute nahi hoga. because function defination
    // }

    // above if statement code in another way
    if(!message){
        console.log("Please enter a message");
        return
    }
    return `${message} I got`
}
//console.log(userMessage());


// define the message value

function userOneMessage(message = 'Hi') {
    if (!message){
        console.log("Please enter a message");
        return
    }
    return `${message} I got`
}
// console.log(userOneMessage());  // output :- Hi I got
console.log(userOneMessage("Pritam")); // this value override the message = Hi 


