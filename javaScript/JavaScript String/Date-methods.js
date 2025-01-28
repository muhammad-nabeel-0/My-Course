// date ka method ko use karna ka lea hum ho date ka variable ma date ka object bana ho ga /
// var now  = new Date (); new Date write karna sa ab ka variable date ka object bana gaya ga ap hum variable ka name ko use kar ka date ka method ko use kar hata ha 
// is tara hum variable ko use kar ka date ka methods ko use kar sate ha ..
// Example Code //
let now = new Date ();// date ka methods ko variable ka sate use kar sata ha  is ma hum koye be date year or time kar sata ha
console.log(now.toDateString()); // toDateString()method date ko read able bana ka lea use hota ha Date ka lea 
//------------------------------ !!!!! ------------------------//
// Date ka methods ma getDate() simple Date ka lea use hota ha
console.log(now.getDate());// Date ka methods ma getDate() simple Date ka lea use hota ha
//------------------------------ !!!!! ------------------------//
// Date ka method ma getFullYear () simple Year ka lea use hota ha //
console.log(now.getFullYear());
//------------------------------ !!!!! ------------------------//
// Date ka methods ma getmonth() month ka lea use hota ha javascript ma first month ka lea 0 use hota ha or is tara ahak vale ka lea is tara ana rata ha ..
console.log(now.getMonth()); // is ma ak or bate bht zhore ha date ka method ka sata () ka hona bht zhore ha is ka bagkar method kam ni kara ga 
// javaScript ma month 0 sa 11 take hota ha //
//------------------------------ !!!!! ------------------------//
// Date ka method ma getDay() day ka lea use hota ha 
console.log(now.getDay());
//------------------------------ !!!!! ------------------------//
// Time ka methods //
// getHours time ka lea use hota ha //
console.log(now.getHours()); // Hours ka lea use hota ha //
// getMinutes methods minutes ka lea use hota ha is method ma//
console.log(now.getMinutes());
// getSeconds ka second ka ko find krana ka lea use hota ha //
console.log(now.getSeconds());
//------------------------------ !!!!! ------------------------//
// ab hum date or time ka set method ka bara ma learn kara ga //
let dateFill = new Date();
dateFill.setHours(14);
console.log(dateFill);










