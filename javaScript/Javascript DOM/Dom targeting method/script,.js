// Dom Traversal methods //

// parentElement kise be value ka parent check karna ka lea use hota ha aghar parentElement na hoto vo hum ko null kara da //
// Example Code //
var a = document.getElementById("inner").parentElement; // is tara hum parentElement ko target kar sata ha 
document.getElementById("inner").parentElement.style.background = "red";
console.log(a);
// is bara hum inner ka inder vala div ko target kata ha //
document.getElementById("child-C").parentElement.style.border = "2px solid green"
console.log(a);
// ParentNode hum khote na 
// aghar hum na kis be element ka children ko target karna sa to hum children method ko use kar ka target kar sata ha 
var b = document.getElementById("inner").children;
console.log(b);
// firstElementChild apna parent ka first element ko target karna ka lea use hota ha  parent ma jo first tag ho ga vo hum ko return kara ga //
var b =  document.getElementById("inner").firstChild;
console.log(b);
var b =  document.getElementById("inner").lastChild;
console.log(b);
var b =  document.getElementById("inner").firstElementChild;
console.log(b);
var b =  document.getElementById("inner").lastElementChild;
console.log(b);

// previos sibling and next sibling ==> aghar hum ko kie be element ko sibling ko target karna ha to hum is tara target kar sata ha //
var c = document.getElementById("child-C").nextElementSibling; // is tara hum next sibling ko check kar sata ha
console.log(c);
// or is tara perives sibling check karn ka lea hum previosElementSibling ko use kar ka check kara sata ha 
var d = document.getElementById("child-C").previousElementSibling;
console.log(d);

// Dom ma create karna ka 3 methods ha //
// ==> createElement
// ==> createTextNode
// ==> createComment
//====> uesing methods and definition
// ==> crate method ma aghar hum ko javaScript ko use kar hum html ma koye tag add karna ha to hum createElement ko use karta ha 

//  ==> crate method ma aghar hum ko javaScript ko use kar hum html ma koye text add karna ha to hum createTextNode ko use karta ha 

// ==> crate method ma aghar hum ko javaScript ko use kar hum html ma koye comment add karna ha to hum createComment ko use karta ha 



