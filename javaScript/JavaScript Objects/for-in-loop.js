// for in loop mostly object ka lea use hote ha sab sa pala for ma in variable banye ga is ma in ka sate object vala variable ka name is bage ma to statemate ko use karna ho
const obj = {
    name:"Nabeel",
    age:19,
    country:"pakistan",
    city:"Burewala",
    email:"nabeel@gmail.com",
}
for(const key in obj){ // for in loop is kara use kie gate ha...//
    console.log(obj[key]); // is tara object ki sigle single value ko use kar sata ha // 
    console.log(key+ ':' + obj[key]); // aghar property ka be sata ma print karne ho
    
}
obj.name = "usman"
console.log(obj);

// ab hum array ka sate for in loop use kar ka check karta ha //
const arrayData = ["Nabeel",19,"pakistan","Burewala"];
for(const over in arrayData){ // Yes it's working hum array or object ka sate use kar sata ha // 
    console.log(arrayData[over]);
    
}

for(var a = 1;a<= 20;a++){ // for loop ma const ko use ni kiea ga sata
    console.log(a);
     

}
