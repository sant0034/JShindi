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
    // num > 4       // it gives [] arrays but if you want any value then you must have to below
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
//console.log(mNums);



// some Example
const books = [
    {title: 'Book One' , genre: 'Friction' , publish: 1981, edition: 2004},
    {title: 'Book Two' , genre: 'Non-Friction' , publish: 1992, edition: 2008},
    {title: 'Book Three' , genre: 'History' , publish: 1999 , edition: 2007},
    {title: 'Book Four', genre: 'Non-Friction', publish: 1989 , edition: 2010},
    {title: 'Book Five' , genre: 'Science', publish: 2009, edition: 2014},
    {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
    {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
    {title: 'Book Nine', genre: 'Non-Friction', publish: 1981, edition: 1989}
];
//Question:- user bol raha hai ki above data me History ki book do only
const userBooks = books.filter( (bk) => bk.genre === "History") // yeha par scope open nahi hai to direct likh diye hai
//console.log(userBooks);

//Question:- user wah sari books do jo publish hue hai 2000 ke bad.
const userBooks1=books.filter( (bk) => {
    return bk.publish >= 2000}) // yeha scope hue kar rahe hai to 
// return keyword use karna hona nahi to [] empty array dega
//console.log(userBooks1);


//Question:- user wah sari book do jo 1995 ki publish hue hai
const userBooks2 = books.filter( (bk) => bk.publish >= 1995)
// console.log(userBooks2);

//Question:- user wah sari book do jo 1995 ki to publish to ho aur history ki book ho
const userBooks3 = books.filter( (bk) => bk.publish >= 1995 && bk.genre==="History")
console.log(userBooks3);




