// do while loop ma pala ek variable ko let karta ha or is ka bate do loop start kra ka
// to valve to run karna ha vo write karta ha is ka bade increment / dincrement karta ha 
// jab do loop end hote ha to is ka bade while ma to be contions add kara ha // 
// loop ka aghar ap na ko be value ko let kar ha to ap is ko var / let ma kara ga //
// ighar ap na koye variable cosnt ko use kara hova kie to vo erro ta ka is lea jab kie koye variable let kar vo // 
// cosnt ma na lo // 



 //Example code for do while loop  // 
 // increment or decrement ka ek or type ma be use ka sata ha // 
 // a++ / a-- ha //

var a = 1;
do{
    console.log(a);
    a++;
}while(a < 10);

// One More Example.. // 
// agahr ham const ko use kar ka variable bana ga to do while loop kam ni kara ge//
// is lea let / var ka use kara // 
// let's start the code // 
// demo code  === for using 
let Number = 1;
do{
    console.log(Number);
    Number = Number + 1;
    
}while(Number <= 100);

// for loop syntax in javaScript // 
// for loop ma sab ak he line ma ho ta ha // 
 // Example // 
 // for (var a = 1; a<= 10; a++);{
 // is ka bade ko be print ka ho va //
 // consol.log("Anything")

// }
//  for loop code // 
// let's some code example // 
for(var a =1; a < 100; a++){
    console.log(a);
}

// break / countines //

for(var a = 1; a<10; a++){
    console.log(a);
    if (a == 3) {
        console.log('Stop');
        break;
        
        
    }
    
}