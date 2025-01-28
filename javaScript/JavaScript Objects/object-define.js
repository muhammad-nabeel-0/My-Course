// object { } bracket sa start hote ha  is ma object ma sabe sa pala properites or value ma data store karta ha //
// ap Object ma ak array be story or object ma fuction be store kar sata ha
// Example Code //

const hello = {
    firstName:"Nabeel",
    lastName:"Munir",
    age:19,
    country:"Pakistan",
    demo:["Hello","Boys"],
    salary:function (){
        return 25000
    },
    living:{
        'city':"Burewal",
        'country':"Pakistan"
    }

};
console.log(hello);
console.log(hello.living);
console.log(hello['demo'][1]); // dot ka alva ek or be property ha dot ka alva [ ] bracket ma array ka or index ko use kar ka //
console.log(hello.salary()); 
// this variable sa parent ko call karna ka use hota ha //
// objects ma jo be fuction ka sate use hote is ko methods hoka gata ha //  
// Object ko bana ka ak or method ha is ma hum ak variable bana ga or is newObject is ma hum object bana kara is ma pata ma value add kara sata ha //
 // Example Code //
 const methodII = new Object();
 methodII.ages = 19;
 methodII.number = 3006999257; // understand 
 methodII.name = "Nabeel";
 console.log(methodII);
 console.log(methodII.name);
 



