// Aghar ham na array ko const ka sate use karna ha to const kie value ko tobra assine ni kar sata is ko karna ka lea ek or method use hota ha..
// const ma array ko use kar ka  / /
// Example Code //

const a = [10,20,30];// aghar hum const variable ko dobra assine kara ka to error aya ga //
// a = [10,30,59] // is tara const kie value ko assine ni kiea ga sata is ka lea or method use hota ha
// is ka lea or method use hota ha //
a[0] = 40;
a[1] = 70;
a[2] = 200;
a[3] = 500; // aghar const ko use kar ka array ma value ko add kar sata ha // 
console.log(a[1]-a[2]+a[3]);
console.log(a);
// const ka sata object ko use kar ka //
// Example Code //

const objectData = { // is tara object ma value add karta ha 
    name:"Ali",
    age:28
}
// --!const ma aghar object ho to is ko overwrite karna ka lea const variable ka lea!--// 
objectData.name = "Hamza";// is tara value ko change ka sata ha....!  // 
objectData.age = 40;
console.log(objectData);


// array ka [   ] ka sata use karna ha ...... // 
// object ko . ka sata ues karna ha...... // 



