// this keyword current constant ke baare me batata hai
const user = {
    username: "Pritam",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to this website`);  // this keyword current constant ko reffer karta hai.
        console.log(this); // here in output this keyword show the current constant(means user object ke ander kya kya hai like username,price,welcomeMessage)
        
    }
}
// user.welcomeMessage()
// user.username = "sam" // here we change the username value
// user.welcomeMessage()

//console.log(this); // ham node enviroment ke ander hai , to this keyword reffer kar raha hai 
// ek empty object ko kyu ki abhi globle ke ander koe constant hi nahi hai es liye empty lekin 
// brower console me value dikhege predefine globle(brower ke andar window globle object hai)wali

// now in function

/*
function one() {
    //console.log(this); // node enviroment me aagar this keyword print karte hai to bahut se node ki value print hoti hai
    let username = "Pritam"
    console.log(this.username);  // output:- undefined means ham bas object me use kar pa rahe hai this lekin
    // function me aaake ham kar rahe hai to undefined aa raha hai,, so aur bhi tarike hote hai function me wah sab aage sikhege DOM study karte time
    
}
one()

*/

// function ko aur kaise declare kar sakte specilly Arrow function ke through.
/*
const chai = function() {
    let username = "Pritam"
    console.log(this.username); // output:- undefined
    
}
 chai()
*/

const chai = () => {   // this is an Arrow Function
    username = "Pritama"
    // console.log(this.username); // output:- undefined
    // console.log(this);    // output:-  {} 
    
}
//chai()

// another new Arrow function add two number
/*
const addTwo = (num1 ,num2) => {  // so this is Explicit return example
    return num1 + num2
}
console.log(addTwo(30000, 9))
*/


// another way to create Arrow function is and use ham bolte hai Implicit return

const addTwoNum = (num1 , num2) =>  num1 + num2
//console.log(addTwoNum( 200000 , 50));

// or another way
const addTwoNumber = (num1 , num2) => (num1 + num2) // this is also a Implicit return and yeha par to 
// number return kar rahe hai
//console.log(addTwoNumber( 4 , 8));

// Agar hame object return karna ho to
const useName = (num1, num2) => ({username: "Return object in arrow function implicit"})
console.log(useName());

