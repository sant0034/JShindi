//+++++++++++++++++++ Reduce method ++++++++++++++++++++++++++++++++++++++

// basics easy way through function

/*
const myNums = [1,2,3]
const myTotal = myNums.reduce(function(acc , currval) {
    console.log(`accumulator value is : ${acc} and currentValue is ${currval}`);
    
    return acc + currval
} , 3)  // here we gave accumulator value is 0.
console.log(myTotal);
*/



// now write above function in array function
// And we use mainly this Array function
const myNums = [1,2,3]
const myArrayFun = myNums.reduce( (acc , currval) => acc + currval , 0) // 0 for initial accumulator value
//console.log(myArrayFun);



// Anothe example
const shoppingCard = [
    {itemName: "Js course",
        price: 2999
    },
    {itemName: "py course",
        price: 999
    },
    {itemName: "mobile dev course",
        price: 5999
    },
    {itemName: "data science course",
        price: 12999
    }
]
// prices add kar do
const priceToPay = shoppingCard.reduce((acc , item) => acc + item.price ,0)
console.log(priceToPay);














