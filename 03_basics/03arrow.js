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







