// function package of code ek baar create kar do ab use jaha le jana hai uski copy le jao.
function sayMyName() {
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("A");
    console.log("M");  
}
//sayMyName     // function referrence
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
//console.log(userOneMessage("Pritam")); // this value override the message = Hi 

//Shopping card kitne argument aayege
/*
function calculateCardPrice(num1) {  
    return num1
}

//console.log(calculateCardPrice(20)); // multiple value ho tab
*/

// here we pass multiple valuein function with rest operator
function calculateCardPrice(...num1) {  //... ko hi kabhi ham rest bolte hai kabhi ham shop bolte hai base on use case
    return num1
}
//console.log(calculateCardPrice(30 ,40, 700));  // output:- [ 30, 40, 700 ]  it return the value in Array 


// How to pass object in fuction and how to use them

/*
const user = {
    username: "Pritam",
    price: 199
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);  // here we take access of object through dot .
    // ` ` typescript me data type automattly chech ho jati hai.
}
// handleObject(user)     // complusery pass the object
// jaruri nahi hai ki pahale object create karke use pass karo direct bhi kar sakte hai like
handleObject({
    username: "Prit",
    price: 384
})

*/



// jaruri nahi hai object hi ho Arrays bhi pass kar sakte hai

const myNewArray = [200 , 400 ,500, 8]
function returnSecondValue(getArray) {
    return getArray[3]
}
//console.log(returnSecondValue(myNewArray));
// jaruri nahi hai Array ko pahale hi define karo then pass karo direct bhi kar sakte ho
console.log(returnSecondValue([100,50000,23,45,76]));



