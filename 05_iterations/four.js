//+++++++++++++ forin loop +++++++++++++++++++++++++++++++
// forin loop work on object but forof is not work .
// forin loop not work on map but forof is work on map

const myObject = {
    js : 'JavaScript',
    cpp : 'C++',
    rb : "Ruby",
    swift : "Swift by apple"
}
for (const key in myObject) {
    //console.log(key);
    // output:- so it all key value
    /*
    js
    cpp
    rb
    swift
    */  
   
   
   //console.log(myObject[key]); // this syntex gave me value of key

   // lekin fillay hame to object chahiye bas key thodi na chahiye na hi bas value thodi na chahiye.

  // console.log(`${key} and the all the value is ${myObject[key]}`); // you can change the text accourdly.
}



// So kye ham forin loop Array ke liye use kar sakte hai
const programming = ["js" , "rb" , "py" , "java" , "cpp"]
for(const index in programming){
    //console.log(index); // it work out in output it gives only index number. but forof direct value de raha tha.
    //console.log(programming[index]);  // it gives value
    //console.log(`${index}  ${programming[index]}`); 
}





// forin loop in Map
const map = new Map()  // so in forin loop map is not iterate.
map.set('In', "India")
map.set('USA' , "United State Of America")
map.set('Fra', "France")
for(const country in map){
    console.log(country); // so forin does not work on Map.
    
}




