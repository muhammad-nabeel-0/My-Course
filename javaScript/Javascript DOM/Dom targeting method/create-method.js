// Dom ma create karna ka 3 methods ha //
// ==> createElement
// ==> createTextNode
// ==> createComment
//====> uesing methods and definition
// ==> crate method ma aghar hum ko javaScript ko use kar hum html ma koye tag add karna ha to hum createElement ko use karta ha 

//  ==> crate method ma aghar hum ko javaScript ko use kar hum html ma koye text add karna ha to hum createTextNode ko use karta ha 

// ==> crate method ma aghar hum ko javaScript ko use kar hum html ma koye comment add karna ha to hum createComment ko use karta ha 

const newElement = document.createElement("h2"); // is sa hum html ma new tag add kar sata ha 
console.log(newElement);

const newText = document.createTextNode("This is new Text");
const otherText = document.createTextNode("This is another text")
console.log(newText);
const newComment = document.createComment("Hello this is comment");
console.log(newComment);

// Dom ma append methods //
// hum append ka method ko use kar ka create vala methods sa add kar sata ha  append method last ma he apply hota ha aghat hum na is ko first ! center ma add karna ka is ka lea ak or method use hota ha inserBefore ko use kar ka 
newElement.appendChild(newText); // is tara hum append ka use kar sata ha 
newElement.appendChild(otherText);
console.log(newElement);
  

const target = document.getElementById("test");
target.insertBefore(newElement,target.childNodes[4]);

const newTarget = document.getElementById("test");
const newDemo = "<h2>This is heading</h2>"
newTarget.insertAdjacentHTML("beforeend",newDemo);


