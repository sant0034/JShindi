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
    console.log(item);
    
})
// output :-
/* 
js
ruby
java
python
cpp
*/



















