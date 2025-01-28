// Array ma slilce method array ma value ko print kara ka lea use hota ha //
// example ka lea aghar hum ko 4 value ma sa kise be value kie zhoort ha to is ko index ko use kara ka hasl kar hata ha//
// Example Code //
var a  = ["Hello","How","Are","You","Thanks"]; // Hum na a name ka ak variable lea or is ma 4 value add kare //
var b = a.slice(2,4) // remove karna ka lea 
console.log(b);


// Array ma splice methods value ko add karna or replace karna ka lea use hota ha //
// Example code // 
const splice = ["I","Am","Fine"]; // add karna ka lea 
splice.splice(3,0,"Thanks");// splice ma first ma index number ata ha gis gaha sa start karna ha or is ka bade gis gaha replace & delete karna ha is ka bade vo jo value add karne ha 
console.log(splice);


// isArray check karna ka lea use hota ha value array ha ka ni..//
const check  = ["Checking","Array"];
const testing  = "Check";
const data = 20;
if (Array.isArray(data)) {
    console.log(typeof data, "Yes This is Array");
    
}else{
    console.log("This Not Array");
    
};

// Array ma indexOf index find karna ka lea use hota ha. indexOf ma gis value ka index find karna ha is ka name add krna hota ha or is alva gis index //
// some Example code // 
const findValue = ["Find","Index","Hello","Find","Index"];
const valueFind = findValue.indexOf("Hello");
const valuesFind = findValue.lastIndexOf("Hello",3);
console.log(valuesFind);

// Array ma includes value ko find karna ka lea use karna ha is ma sabe sa pala ek or variable bata ha includes ma aghr value ho gaye to true return kara ha aghar value ni hoye to false return kara ga  //
// Example Code //
const freeCode = ["Hello","Guys",40,"Nice"];
const orderList = freeCode.includes(40);
console.log(orderList);
