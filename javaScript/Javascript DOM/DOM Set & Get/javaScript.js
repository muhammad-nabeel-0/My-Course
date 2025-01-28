// Dom ka targeting method ma 2 important methods ha  inko css ka selector ka sate use kar sata ha
// querySelector or querySelectorALL 
// querySelector ma jo be first para ho ga querySelector is ko he target kar ga 
// querySelectorALL  sobe ko target kara ka kis ko hum na target karna ha //
var dara;
dara = document;
document.querySelector(".box").innerHTML = "<h1>Nice</h1>";
console.log(dara);
dara = document.querySelectorAll("ul")[0].innerText;
console.log(dara);

