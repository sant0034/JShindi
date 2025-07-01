const accountId=13241
let accountEmail="pritamsingh@gmail.com"
/*
Prefer not to use var because
of issue in block scope and functional scope(scope means whats in this brackets{}) 
*/
var accountPassword="Pasja23"
accountCity="Patna"

accountEmail="p@gmail.com"
accountPassword="phh"
accountCity="Jaipur" //by default it reserve a memory for this variable but this is not a write way
let accountState;  // its output is undefine because we are not define the value.

console.table(["Account Email is "+accountEmail, "Account Id is "+accountId, "Account Password is "+accountPassword,
    "Account City is "+ accountCity , "Account State is "+accountState])


//upate the constant value so you can not change constant variable
//accountId=2233
console.log(accountId);
