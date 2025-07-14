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


// Nested Scope

function one() {
    const username = "Pritam"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);  // line by line execution so yeha par error de diya to aage ka line of code execute nahi hua.
    two()  // function execute
}
one()






