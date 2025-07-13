// Object singleton kaise kar sakte hai or constructor ki help se kaise declare kar sakte hai object

//const tinderUser = new Object()  // declare object by singleton
//console.log(tinderUser);

const tinderUser = {} // this is non singleton object internally both are same.and empty
// now add some object value
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

// so now we see object inside object
const regularUser = {
    // add some object value
email: "some@gmail..com",
fullname: {  //this is object inside object
    userfullname: { //this is also object inside object inside object
        firstname: "Pritam",
        lastname: "Singh"
    }
}
}
//console.log(regularUser.fullname);  // access value of regularUser Object
//console.log(regularUser.fullname.userfullname);  // you can access object inside object
//console.log(regularUser.fullname.userfullname.lastname);


// now here we merge or combine object. the process is same as an Array
const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}
//const obj3 = {obj1 , obj2}  // object inside object ho jayega esa nahi karna hai
//console.log(obj3);

//const obj3 =Object.assign(obj1 , obj2) // somainly we are also not use this
//console.log(obj3);


// we are use spread operators 90%
const obj3 = {...obj1 , ...obj2}
// console.log(obj3);

// jab database se value aati hai array of object
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]
//console.log(tinderUser);
//console.log(Object.keys(tinderUser));  // tinderUser Object ke sabhi key ka output and 
// uska data type Array hoga. see output:-  [ 'id', 'name', 'isLoggedIn' ] ab aap chahe to lopp laga sakte hai and aur jo akrna hai.
// and same syntax for value

//console.log(Object.values(tinderUser));  // output :-  [ '123abc', 'Sammy', false ]

//console.log(Object.entries(tinderUser));  // har key value ko array me convert kar diya jata hai.
// output:-  [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// here we checked the value inside the object
//console.log(tinderUser.hasOwnProperty('isLogged'));  //Determines whether an object has a property with the specified name.
// output :- false so always retrun type is boolean.

//console.log(users[1].email); // array ke 1 object ki email ki value in output me aayegi.



/////   Dstructure in objects
const course = {
    coursename: "java",
    price: "99",
    courseInstructor: "Pritam"
}
//console.log(course["courseInstructor"]);

const {courseInstructor} = course // agar aap ko lagta hai courseInstructure bada name hai then uska name only instructor karna hai then
console.log(courseInstructor);
const {courseInstructor : instructor} = course // output same hoga ese hi kahate hai object ko dstructure karna, {} dekha esa to samajh lo dstructring ho rahi hai
console.log(instructor);





  




