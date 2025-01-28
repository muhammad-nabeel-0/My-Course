// javaSript ma classList methods //
//1. add(classname) ==> 
//2. remove(classname) ==>
//3. toggle(classname) ==>
//4. contains(classname) ==>
//5.item(index) is ko hum class ka index ka sata use kar sata ha //
// 6. legth ==> 


//=================>>>>>>> <<<<<<=======================//
// classList method ma add methods class add karna ka lea use hota ha 
// ise tara remove method class remove karna ka lea use hota ha //
// or legth method class kie legth check karna ka lea use hota ha // 
let a = document.getElementById("outer").classList.add("hello");
 document.getElementById("outer").addEventListener("click",function(){
    document.getElementById("outer").classList.toggle("hello");
    
}

);
// classList ma jo toggle methods vo class ko add or remove dono ko ak sate use karna ka lea use hota ha 
// classList ma contains ma class check karna ka lea use hota ha contains hum ture or false ma answer return karta ha
let b = document.getElementById("outer").addEventListener("click",abc);
function abc(){
let c = document.getElementById("outer").classList.contains("cx")
    console.log(c);
    
}


