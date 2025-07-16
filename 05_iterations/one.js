// ======== for loop/iteration ======================
for (let i = 0 ; i<= 10 ; i++){  // ctrl + d for select all i variable
    const element = i;
   // console.log(element);
    
}


//+++++++++ if in for loop ++++++++++++++++++++++++
for (let i = 0 ; i <= 10 ; i++){
    const element = i;
    if(element == 5){
       // console.log("5 is the best number");
        
    }
   // console.log(element);
    
}


//++++++++++++++ Loop inside Loop
for (let i = 0; i<= 10 ; i++){
   // console.log(`Outer loop is : ${i}`);
    
    for(let j = 0 ; j <= 10 ; j++){
       // console.log(`Inner loop is : ${j} and outer loop is : ${i}`);
       // console.log(i + '*'+ j + '=' + i*j);
        //console.log("*");
        
        
    }
}


// Another Example with array
const myArray = ["flash" , "batman" , "superman"]
//console.log("Here we print the length of myArray :"+ myArray.length);

for(let index = 0 ; index < myArray.length ; index++){
    //console.log(index);
    const element = myArray[index];
    //console.log(element);
    
    
}



// ============ break ===== continue ===============
/*
for(let index = 1 ; index <= 20 ; index++){
    if(index == 5){
        console.log(`Detected 5`);
        break;
        
    }
    console.log(`Value of index is : ${index}`);
    
}
*/

for( let index = 1 ; index <= 10 ; index++){
    if(index == 5){
        console.log(`Detected 5`);
        continue; // ek baar gal kiye chalo maaf lekin print nahi karuga lekin kaam continue karo rokuga nahi.
    }
    console.log(`Value of index is : ${index}`);
    
}






































