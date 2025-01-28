let element = document.getElementById("paga").onclick = demow;
function demow(){
    document.getElementById("paga").style.background = "orange"
};
// Dom addEventListener methods ma hum is tara use kar sata ha is ma addEventListener ka bade hum event ka name write kara ga is ma on ka bager write ka ho example ka lea onclick ka click is tara use karna ha is ka bade function go hum na is event sa run karna ha //
// Example Code //
// document.getElementById("head").addEventListener("click",function name(){
    // is tara hum addEventListener ko use kar sata ha 
//}) is ma function name ka baja hum function be use kar sata ha 
let elementipp = document.getElementById("head").addEventListener("click",demo);
function demo(){
 document.getElementById("head").style.background = "blue";
 document.getElementById("head").style.textAlign = "right";
};
// addEventListener ma 3 ka methods ko UseCapture be hota ha useCapture hum ture or false ma return karta ha
// Example Code //
document.querySelector(".box2").addEventListener('click',function(){
    alert("box2 in here")
}); 

document.querySelector(".box1").addEventListener('click',function(){
    alert("box1 in here")
}); 