// string ka methods ma sabe sa first ma length ata length ko string kie property ka tore para use kie gata ha //
// Length string kie length ko check karna ka use hota ha length 0 sa start hote ha is ma space ko count hote ha //
// Example Code //
const srt = "Hello this a test for find length of length property";
const leg = srt.length; // length ko use karna ka lea ek or variable bana ho ga //
console.log(leg);

// string ma toLowerCase text ko samll case ma change kar data ha./
// array or string ka method ma methods ka sata () use kara zhoze ha 
let a = "Hello World";
let b = a.toLowerCase();
console.log(b);
//------------------------------ !!!!! ------------------------//
// string ma toUpperCase string ma sabe text ko captial ka change karna ka lea use hota ha 
let c = "nice work";
let d = c.toUpperCase();
console.log(d);
//------------------------------ !!!!! ------------------------//
// String ma includes search karna ka use hota ha aghar string ma search kie hova word malle gay ko includes ture or false ma answer data ha..
let e = "Hello how are you! ";
let f = e.includes("how");
console.log(f);
//------------------------------ !!!!! ------------------------//
// String ma startsWith Methods string ma start vala text ko search karta ha aghar text ho to ture hoga aghar na ho to false ho ga is tara endsWith last vala world ka lea use hota ha //
// startsWith Methods //
let g = "I Am Find Something";
let h = g.startsWith("I");
console.log(h);
// endsWith Methods //
let i = "I am the last world";
let j = i.endsWith("world");
console.log(j);

//------------------------------ !!!!! ------------------------//
// Search methods includes kie tara he use hota ha magher includes ture or false ma return karta ha maghar search method index return karta ha ..
// Search Methods // 
let l = "Hello my name is Nabeel";
let m = l.search("N");
console.log(m);

//------------------------------ !!!!! ------------------------//
// Match method search kie tara se kam karta ha maghar match method jo be value find karna ha in  ko collect kara ka ak new array ma change karta ha...//
// Example Code //
let n = "Hello how are you  I am Fine and how can help you in this time how can manage this work";
let o  = n.match(/how/g); // match method ma " " ko use karna is ka lea  // ka use karna ha or is ma g = gobel ka toar par use hota ha
console.log(o);
//------------------------------ !!!!! ------------------------//
// indexOf methods string ma word ka index find karna ka lea use hota ha indexOf string ko start ka find karta ha//
// lastIndexOf Method string ma word ka index find karna ka lea use hota ha maghar is ma end ma check karna start karta ha
//------------------------------ !!!!! ------------------------//
// Replace method string ma word ko replace karna ka lea use hota ha is ma 2 condition hote ha first ma vo word gis sa replace karna ha or bade ma vo word jo replace kie gaka hona ha //
let p = "Hello Guys";
let q = p.replace("Guys","World");
console.log(q);
//------------------------------ !!!!! ------------------------//
// trim string ma space ko remove karna la lea use karta ha //
// Example Code //
let r = '    Hello Boys  ';
let s = r.trim();
console.log(s);

//------------------------------ !!!!! ------------------------//
// charAt methods ma is ko ek position define karta ha is postion jo character se return kata ha //
// Example Code //
let t = "This is a page";
let u = t.charAt(10);
console.log(u);
//------------------------------ !!!!! ------------------------//
// charCodeAt string ma skye code find karna ka lea use karta ha is ma hum character ka index datea ha or hum ko sky code return karta ha  //
// Example Code //
let x = "Hello";
let y = x.charCodeAt(4); // index ko use kar ka sky code return karta ha../
console.log(y);
//------------------------------ !!!!! ------------------------//
// formCharCode sky code ko use kar ka cha keybord ma character find kara ka jo is ko string kie property karna ka lea use hota ha /
// Example Code //
let z = String.fromCharCode(467); // keybord ka character ko find karna ha 
console.log(z);
//------------------------------ !!!!! ------------------------//
// concat 2 string ka apse ma marje karna ka lea use hota ha is bate hum ak new string return kara ga //
// Example Code //
let valeData = "This is First String";
let valeData1 = "This is Second String";
let valeData2 = "This is Third String";
let marije = valeData.concat(valeData1 + valeData2);
console.log(marije);
//------------------------------ !!!!! ------------------------//
// split string ka torna ka lea use hota ha split space kie jaka sa splite kar la in ko array ka chanhe kar tata ha or is alva hum apne marze sa be split kar sata ha is ka lea hum ko ak new variable bana ho ga //
// Example Code //
let over = 'This is a string';
let overData = over.split(" ");// aghar ma is ma space add kara ka to space kie gaka sa he split kara ga is ka alva aghar ma kis word sa split kara ha to be ho hata ha //
console.log(overData);
//------------------------------ !!!!! ------------------------//
// repeat string ka repeat karna ka use hota ha is ma hum ghar string ko 5 bar repeat karna to number ka sata use kara sata ha /
// Example Code //
let repeatCode = "Hello";
let repeatLine = repeatCode.repeat(10);
console.log(repeatLine);
//------------------------------ !!!!! ------------------------//
// slice method string ma character ko nakla ka lea use hota ha gis tara array ma slice use hota ha is start or end ko use kie gata ha index ko use kar ka  //
// Example Code //
let sliceCode = "Hello this is Codeing for test";
let startEnd = sliceCode.slice(0,5)
console.log(startEnd);











