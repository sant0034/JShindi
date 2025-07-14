// let , var , const

 var c = 300 
if(true) {
    let a = 10 // it work as block scope
    const b = 20
    var c = 30 // it work groblally or globle scope and it also over ride the globle var c
}

//console.log(a); // a is not define show in output
//console.log(b);   // b is not define shown in output
//console.log(c);

// globle scope is different in browser console and it different in node in vs code.


// Nested Scope in function

/*
function one() {
    const username = "Pritam"
    
    function two() { // jab es function declare or call akrte hai to eske liye ek alag se call stack or scope banta hai stack me rakha jata hai
        const website = "youtube"
        console.log(username);
    }
    //console.log(website); // yeha error aayega kyu ki scope hi website ka bas us breket ke ander tak hai
    //   // line by line execution so yeha par error de diya to aage ka line of code execute nahi hua.
    two()  // function execute hence prove child function access the property of parent function but parent function is not get access the property the child.

}
one()
*/

// Nested scope in conditional statement
/*
if (true){
    const username = "Pritam"
    if(username === "Pritam"){
        const website = " youtube"
        console.log(username + website);
        
    }
    //console.log(website); // yeha error dega kyu ki websie ka scope hi uske braket ke ander tak hai
    
}
// console.log(username);  // par bhi eska scope nahi ahai bracket ke bahar hai

*/



//  +++++++++++++++++++++ interisting +++++++++++++++++++++++++++
/*
function addone(num) {  // esko kahate hai function
    return num + 1
}
addone(5)
*/

// esko yese bhi likh sakte hai koe error nahi aayega

console.log(addone(5));
function addone(num) {  // esko kahate hai function
    return num + 1
}


// you can do above function in another way


/*
const addtwo = function (num) { // esko bhi function bolte hai , lekin kabhi kabhi esko expression bhi bol diya jata hai 
    // yeh ek variable ki tarah hai
    return num + 2
}
addtwo(5)
*/

// lekin esko ese nahi likh sakte kyu ki yeha par function ek variable me store hua hai to wah change accept nahi kar pa raha hai

console.log(addtwo(5));  // output :- Cannot access 'addtwo' before initialization
const addtwo = function (num) { // esko bhi function bolte hai , lekin kabhi kabhi esko expression bhi bol diya jata hai 
    // yeh ek variable ki tarah hai
    return num + 2
}







