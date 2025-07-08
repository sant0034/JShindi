// object are declare in two way by literal and constructor

// constructor se banega object to hamesh singleton banega , lekin literal se banega to singleton 
// nahi banega.

// By constructor method
// Object.create   // yehi banta hai singleton ke through


// So Object literals
//const JsUser = {}  // object created and it is empty so create the in object through key and value
// so name bhi apne aap me string ki tarah hai by default ("name") but ham likhte nahi hai and value 
// string , function,boolean , number , object , array etc.
const JsUser = {
    name: "Pritam",
    "full name": "Pritam Singh",
    age: 18,
    location: "Patna",
    email: "pritam@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" ,"Saturday"]
}
// how to access the data of object
//console.log(JsUser.name); // but this is not full way but it does not me it's wrong way.And you can't access the full name value 
//console.log(JsUser.full name);

//console.log(JsUser["full name"]); // by this you can access full name value and all other's value also.





// create a symbole which is primitive data type add into object and print them
const mySym = Symbol("key1")
const dataT = {
    name: "Prit",
    [mySym]: "I am the symbole"
}

// console.log(dataT["name"]);
// console.log(dataT[mySym]);
// console.log(typeof dataT[mySym]);  
//console.log(Object.freeze(dataT));  // here it that he is symbol not a string


// So now Change the in object.
//JsUser.email = "sant@google.com"  // here override the value
//console.log(JsUser["email"]);

// if you want to freez the JsUser so that no one change the value.
// console.log(Object.freeze(JsUser));

//JsUser.location = "Varanasi"  // here you can't override the value. because it's freez
// console.log(JsUser["location"]);





// how to add function in object. it treet them as variable.
JsUser.greeting = function(){
    console.log("Hello I am newly added function in object");
    
}
// obejct JsUser ke pass kon kon si property hai use access lene ke liye use karte hai
JsUser.greetingTwo = function(){
    console.log(`Hello JS user , ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

console.log(JsUser);

