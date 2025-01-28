// Promise method promise karna ka lea use karta ha is ko hum 3 stage ma deivde kar sata ha hum saba sa pala ak new variable lata ha or is new method promise ka ander he hum function or arrow function use karta ha function ma hum ko 2 parameter dana hota ha 
// Pendind => 
// Fulfilled => resolve() => then() call back function
// Rejected => reject() => catch() call back function

// Example Code //
let complete = true;

let prom = new Promise(function(resolve,reject){
    console.log("Fetching data,please wait.");
    setTimeout(() => {
        if(complete){
            resolve("Promise is Successfull.");
    
        }else{
            reject("Promise is Failed");
    
        }
        
    }, 3000);
    
    
});
let onFullFill = (result) =>{
    console.log(result);
};
let onRejected = (error) =>{
    console.log(error);
};
prom.then(onFullFill);
prom.catch(onRejected);



