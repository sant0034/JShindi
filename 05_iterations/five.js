// +++++++++++++ forEach loop +++++++++++++++++++++++++++
//for each loop is call back function and call back function does not have name

const coding = ["js" , "ruby" , "java" , "python" , "cpp"]
// simple function
coding.forEach(function (val) { // koe bhi parameter name pass kar sakte hai
    //console.log(val);
})
// output :-
/*
js
ruby
java
python
cpp
*/



// now work with Arrow function
coding.forEach((item) => {  //kaha tha na koe bhi paarameter name ho sakta hai but foucus on variable name.
   // console.log(item);
    
})
// output :-
/* 
js
ruby
java
python
cpp
*/



// here we create function and give refernce to for each loop
/*
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)
*/



// So now we pass different - different paramenter 
// coding.forEach((item , index , arr) => {
//     console.log(`so the index value is :- ${item} and the index is :- ${index} and the array is :- ${arr}`);
// })


//Another Example of loop
// ek array ke andar multiple object
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName : "Java",
        languageFileName :"java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]
myCoding.forEach((item) => {
    console.log(item.languageName);
    
})











