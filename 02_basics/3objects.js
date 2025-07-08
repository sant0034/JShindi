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
console.log(JsUser.name); // but this is not full way but it does not me it's wrong way.And you can't access the full name value 
//console.log(JsUser.full name);

console.log(JsUser["full name"]); // by this you can access full name value and all other's value also.

// create a symbole which is primitive data type add into object and print them

const mySym = Symbol("key1")
const dataT = {
    name: "Prit",
    mySym: "I am the symbole"
}

console.log(dataT["name"]);
console.log(typeof mySym);  // i create data type in object but in output it show data type is symbole.


