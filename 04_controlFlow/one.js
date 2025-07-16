// ++++++++++++++ if ++++++++++++++++++++++++++

const isUserLoggedIn = true // here I used assign operator
if (true) {
    //console.log(" is true");
    
}

// operators :- < , > , <= , >= , == we checked here kya wah equal hai kya , !== not equal value or type
// != , === it also check the type

if ( 2 == "2") {  // yeha par to true ho jayega ki 2 equal hai 2 ke but acctually esa nahi ek number aur ek string.
    //console.log("Is 2 equlas to 2");
    
}

// ---------  === also check data type ------------------
if (2 === "2"){  // es scope ke andar hi nahi jayege kyu kyu ki 2 number not equal hai string 2 ke.
    //console.log("is 2 equal to 2");
    
}

// -------------- !== 	not equal value or type -------------------------
if ( 2 !== "2") {
    //console.log("Is number 2 is not equal or not type to 2");
    
}
//console.log("I always run if condition is true or false");


// ++++++ if - else +++++++++++++++++++++++
const temperature = 41
if (temperature === 41){
    //console.log("less then 50");
    
}else {
    //console.log("greater then 50");
    
}
//console.log("I always execute beacuse I am not in scope");

// --- Another program -----------

const score = 200
if( score > 100) {
    const power = "fly"
    //console.log(`User power is : ${power}`);
    
}
//console.log(`User power is: ${power}`);  // this line of code is not execute because power string variable is not in scope

// var completely globle predefine.



// Short hand notation
// emplicit scope yeh ek hi line me execute hota multiple line execute nahi hoga.
const balance = 1000
//if (balance > 500) console.log("This is a explicit scope");
// likh sakte hai par wah sahi habbit nahi hai
const a = 200
//if ( a < 300) console.log("yes a is less then 300") , console.log("Another line of code");



// for checking multiple condition we use Nesting

const run = 1000
/*
if (run < 500){
    console.log("run less then 500");
    
}else if (run < 750){
    console.log("run less then 750");
    
}else if (run < 900) {
    console.log("run less then 900");
    
}else {
    console.log("run less then 1200");
    
}
*/


// ------ Anothe code ----------

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
// ===============   AND Operation ====================
if (userLoggedIn && debitCard && 2===2) {
    console.log(`Allow to buy courses`);  
}

// +++++++++++++++++ OR Operation ++++++++++++++++++++++
if (loggedInFromGoogle || loggedInFromEmail || '3'==='3'){
    console.log(`User logged in`);
    
}

























