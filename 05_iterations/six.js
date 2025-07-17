const coding = ["js" , "ruby" , "java" , "python" , "cpp"]
coding.forEach((item) => {
    //console.log(item);
    
})

// for each loop return kya karta hai undefined
const value = coding.forEach((item) => {
    //console.log(item);
   // return item
})
//console.log(value);





// agar array me se ki koe ek value print karani ho to
// so filter operation to solve the problem and filter bhi apne under callback function leta hai like forEach.
const myNums = [1,2,3,4,5,6,7,8,9,10]
// all number greater then 4.
const newNums = myNums.filter((num) => num > 4 ) // forEach koe value return nahi karta lekin filter karta hai

//console.log(newNums);



// Do in another way
const newNums1 = myNums.filter((num) =>  {
    // num > 4 // it gives [] arrays but if you want any value then you must have to below
    // kyu ki scope open hai
    //return num > 4
})
//console.log(newNums1);

// do this things with foreach loop lekin ye thoda long hai na if condition and so on.
const mNums = []
myNums.forEach((num) => {
    if(num > 4){
        mNums.push(num)
    }
})
console.log(mNums);






