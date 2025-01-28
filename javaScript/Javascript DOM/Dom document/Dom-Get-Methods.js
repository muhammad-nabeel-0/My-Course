// Gom Get Methods //
// .innerText => innerText text ko get karna ka lea use hota ha 
// .inner HTML => innerHTML html ko get karna ka lea use hota ha 
//.getAttribute => getAttribute attribute ko get karna ka lea use hota ha 
//.getAttributeNode => getAttributeNode attribute ko get karna ka lea use hota ha 
//.Attributes => Attribute attribute ko get karna ka lea use hota ha 

//===================== >>> ==========================//
// ======> innerText: innerText ko hum getElementById Or ClassName ka sata . laga kar use kar sata ha is sa hum  //
// Example Code //
const innerText = document.getElementById("menu").innerText;
console.log(innerText);
//===================== >>> ==========================//
// =====> innerHtml ko hum html ka code ka lea use kar sata ha. //
// Example Code //
const innerHtml = document.getElementById("content").innerHTML;
console.log(innerHtml);
//===================== >>> ==========================//
//=====> getAttribute method hum ko attribute kie value return karta ha is ko hum getElementById or getElementsByClassName ka sata use kar sata ha..
// Example Code //
const getAttribute = document.getElementById("sidebar").getAttribute("id"); // is ma jo be attribute kie value ho ge vhe return kara ga
console.log(getAttribute);
//===================== >>> ==========================//
//=====> Attribute method ma sabe attribute ata ha //
// Example Code //
const allData = document.getElementById("content").attributes;
console.log(allData);
//==========================> <==============================//
// Gom Set Methods //
const removeAttri = document.getElementById("content").removeAttribute("style");






