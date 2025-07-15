// Immediately Invoked Function Expression(iifi) 
//jo function immedially execute ho jaye par ye pura sahi nahi hai
// what is iifi :- globle scope(variable or jo bhi globle declaration hai) ke pollution se bachane ke liye iifi ka use karte hai


/*

// this is simple function

function chai() {
    console.log(`DB Connected`);
}
chai()
*/

// for iifi function 

(function chai(){  // this is function chai() is a named iifi
    //console.log(`DB Connected`);
    
})();  // second Immediately invoke function wala parantheses to execute ho gaya lekin ese nahi pata kaha rokna hai , to rokne ke liye ; semi colon use karte hai

//()(); first parantheses for function defination And Second parantheses for function execution



// ++++++++++  now I use arrow function in iifi function  +++++++++++++++++

( () => {  // or we also se simple iifi
   // console.log(`DB Connection Two`);
    
})();  // break the line execution


//+++++++++++++++++++ now arrow function in iifi function accept a variable ++++++++++

( (name) => {  // simple iffi and parameter bhi pass kiye hai
    console.log(`DB Connected ${name}`);
    
})('Pritam') ; // variable value we pass in immediately inviked function but it work as it is.